/* ========================= NAVIGATION / EVENT HANDLERS ========================= */
/* ========================= NAV HELPERS ========================= */
function setMode(m){ state.mode=m; state.view = state.view==='home' ? 'home' : 'subjects'; render(); }
function goHome(){ state.view='home'; render(); }
function openSubjects(m){ state.mode=m; state.view='subjects'; render(); }
function openSubject(i){
  state.subjectIdx=i;
  state.view = state.mode==='adventure' ? 'arcs' : 'units';
  render();
}
function openArc(i){ if(!isUnitUnlocked(state.subjectIdx,i)) return; state.arcIdx=i; state.view='trail'; render(); }
function openUnit(i){ state.unitIdx=i; state.view='bubbles'; render(); }
function backTo(view){ state.view=view; render(); }

let activeTopicRef = null;
function openTopic(s,u,t,locked){
  if(locked) return;
  if(!isLoggedIn()){
    showLoginRequiredMessage(s,u,t);
    return;
  }
  activeTopicRef = {s,u,t};
  renderDrawer();
}
function closeDrawer(){
  const ov = document.getElementById('drawerOverlay');
  if(ov) ov.remove();
}
function completeTopic(){
  const {s,u,t} = activeTopicRef;
  const key = tkey(s,u,t);
  if(!state.completed.has(key)){
    state.completed.add(key);
    const topic = SUBJECTS[s].units[u].topics[t];
    state.xp += topic.xp;
    state.streak += 0;
  }
  closeDrawer();
  render();
  if(typeof saveProgressIfLoggedIn === 'function') saveProgressIfLoggedIn();
}
