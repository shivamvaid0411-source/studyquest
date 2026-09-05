/* ============================================================
   AUTH — email/password login via Firebase Auth, per-user progress
   sync via Firestore, and a simple site-wide page-view counter.

   Design choices (worth knowing before you extend this):
   - Login is OPTIONAL. The app works fully as a guest; XP/streak/
     completion just live only in this browser tab until refreshed.
     Logging in adds cross-device persistence on top of that.
   - Email validation accepts ANY valid email address format, not
     only @gmail.com — restricting to one provider would lock out
     real students using college or Outlook addresses. Firebase
     itself verifies the address is a well-formed, unique account.
   ============================================================ */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* ---------- NAV AUTH AREA ---------- */
function renderAuthArea(){
  const el = document.getElementById('authArea');
  if(!el) return;
  const user = firebaseReady && auth ? auth.currentUser : null;
  if(user){
    el.innerHTML = `
      <span class="pill" title="${user.email}">👤 ${user.email.split('@')[0]}</span>
      <button class="btn btn-outline btn-sm" onclick="logoutUser()">Log Out</button>`;
  } else {
    el.innerHTML = `<button class="btn btn-purple btn-sm" onclick="openAuthModal('login')">Log In</button>`;
  }
}

/* ---------- MODAL ---------- */
function openAuthModal(mode){
  closeAuthModal();
  const isLogin = mode !== 'signup';
  const html = `
<div class="overlay auth-overlay" id="authOverlay" onclick="if(event.target===this) closeAuthModal()">
    <div class="drawer" style="max-width:420px;">
      <div class="drawer-head">
        <h2>${isLogin ? 'Log In' : 'Create Your Account'}</h2>
        <button class="close-x" onclick="closeAuthModal()">✕</button>
      </div>
      <p style="color:var(--text-dim); font-size:13.5px; margin-bottom:18px;">
        ${isLogin ? 'Log in to sync your XP and progress across devices.' : 'Just an email and a password — takes 10 seconds.'}
      </p>
      <div id="authError" style="display:none; background:rgba(239,68,68,.12); border:1px solid rgba(239,68,68,.4); color:#FCA5A5; font-size:13px; padding:10px 13px; border-radius:10px; margin-bottom:14px;"></div>
      <form id="authForm" onsubmit="return false;">
        <div style="margin-bottom:12px;">
          <label style="font-size:12.5px; color:var(--text-dim); display:block; margin-bottom:6px;">Email</label>
          <input id="authEmail" type="email" placeholder="you@example.com" autocomplete="email"
            style="width:100%; padding:11px 13px; border-radius:10px; border:1.5px solid var(--border); background:var(--bg2); color:var(--text); font-size:14px;">
        </div>
        <div style="margin-bottom:18px;">
          <label style="font-size:12.5px; color:var(--text-dim); display:block; margin-bottom:6px;">Password</label>
          <input id="authPassword" type="password" placeholder="At least 6 characters" autocomplete="${isLogin?'current-password':'new-password'}"
            style="width:100%; padding:11px 13px; border-radius:10px; border:1.5px solid var(--border); background:var(--bg2); color:var(--text); font-size:14px;">
        </div>
        <button class="btn btn-purple" style="width:100%; margin-bottom:12px;" onclick="submitAuthForm('${isLogin ? 'login' : 'signup'}')">
          ${isLogin ? 'Log In' : 'Sign Up'}
        </button>
      </form>
      <p style="text-align:center; font-size:13px; color:var(--text-dim);">
        ${isLogin
          ? `New here? <a href="#" onclick="openAuthModal('signup'); return false;" style="color:var(--purple-glow); font-weight:700;">Create an account</a>`
          : `Already have an account? <a href="#" onclick="openAuthModal('login'); return false;" style="color:var(--purple-glow); font-weight:700;">Log in</a>`}
      </p>
    </div>
  </div>`;
  document.body.insertAdjacentHTML('beforeend', html);
  setTimeout(()=>{ const f = document.getElementById('authEmail'); if(f) f.focus(); }, 50);
}
function closeAuthModal(){
  const ov = document.getElementById('authOverlay');
  if(ov) ov.remove();
}
function showAuthError(msg){
  const el = document.getElementById('authError');
  if(!el) return;
  el.textContent = msg;
  el.style.display = 'block';
}

/* ---------- SUBMIT ---------- */
function submitAuthForm(mode){
  const email = (document.getElementById('authEmail').value || '').trim();
  const password = document.getElementById('authPassword').value || '';

  if(!EMAIL_REGEX.test(email)){
    showAuthError('Please enter a valid email address (e.g. name@gmail.com).');
    return;
  }
  if(password.length < 6){
    showAuthError('Password must be at least 6 characters.');
    return;
  }
  if(!firebaseReady){
    showAuthError('Login isn\'t set up yet — add your Firebase project keys in js/auth/firebase-config.js first.');
    return;
  }

  const action = mode === 'signup'
    ? auth.createUserWithEmailAndPassword(email, password)
    : auth.signInWithEmailAndPassword(email, password);

  action
    .then(()=>{ closeAuthModal(); })
    .catch(err=>{ showAuthError(friendlyAuthError(err)); });
}

function friendlyAuthError(err){
  const map = {
    'auth/email-already-in-use': 'That email already has an account — try logging in instead.',
    'auth/invalid-email': 'That doesn\'t look like a valid email address.',
    'auth/weak-password': 'Password is too weak — use at least 6 characters.',
    'auth/user-not-found': 'No account found with that email — try signing up instead.',
    'auth/wrong-password': 'Incorrect password. Please try again.',
    'auth/invalid-credential': 'Incorrect email or password. Please try again.',
    'auth/too-many-requests': 'Too many attempts — please wait a moment and try again.'
  };
  return map[err.code] || (err.message || 'Something went wrong. Please try again.');
}

function logoutUser(){
  if(firebaseReady && auth) auth.signOut();
  state.xp = 0; state.streak = 0; state.completed = new Set();
  state.view = 'home'; state.subjectIdx=null; state.arcIdx=null; state.unitIdx=null;
  render();
}

/* ---------- CLOUD PROGRESS SYNC ---------- */
function loadUserProgress(uid){
  if(!firebaseReady) return;
  db.collection('users').doc(uid).get().then(doc=>{
    if(doc.exists){
      const d = doc.data();
      state.xp = d.xp || 0;
      state.streak = d.streak || 0;
      state.completed = new Set(d.completed || []);
    } else {
      db.collection('users').doc(uid).set({
        email: auth.currentUser.email,
        xp: 0, streak: 0, completed: [],
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
    }
    renderAuthArea();
    render();
  }).catch(err=>console.error('StudyQuest: failed to load progress', err));
}

function saveProgressIfLoggedIn(){
  if(!firebaseReady || !auth || !auth.currentUser) return;
  db.collection('users').doc(auth.currentUser.uid).set({
    xp: state.xp,
    streak: state.streak,
    completed: Array.from(state.completed),
    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
  }, {merge:true}).catch(err=>console.error('StudyQuest: failed to save progress', err));
}

/* ---------- SITE VIEW COUNTER ---------- */
function trackPageView(){
  if(!firebaseReady) return;
  db.collection('stats').doc('pageViews').set({
    count: firebase.firestore.FieldValue.increment(1),
    lastViewedAt: firebase.firestore.FieldValue.serverTimestamp()
  }, {merge:true}).catch(err=>console.error('StudyQuest: failed to log page view', err));
}

/* ---------- AUTH STATE LISTENER ---------- */
if(firebaseReady && auth){
  auth.onAuthStateChanged(user=>{
    renderAuthArea();
    if(user){
      loadUserProgress(user.uid);
    }
  });
}
