/* ========================= HOME VIEW ========================= */
function renderHome(){
  const op = overallProgress();
  return `
  <div class="wrap">
    <section class="hero">
      <div class="hero-grid">
        <div>
          <div class="eyebrow">LEARN · PLAY · GROW</div>
          <h1>Turn Your Syllabus Into an <span class="grad">Adventure</span></h1>
          <p>Gamified learning with levels, rewards and real progress, built around your exact curriculum. Make every topic feel like a win.</p>
          <div class="hero-actions">
            <button class="btn btn-purple" onclick="openSubjects('adventure')">Start Your Journey →</button>
            <button class="btn btn-outline" onclick="openSubjects('focused')">▶ Try Focused Mode</button>
          </div>
        </div>
        <div class="hero-art">
          <div class="screen">
            <div class="lvl">LEVEL UP YOUR KNOWLEDGE</div>
            <div style="font-size:13px;color:var(--text-dim)">Your progress across every subject</div>
            <div class="bar-track"><div class="bar-fill" style="width:${op.total? Math.round((op.done/op.total)*100):0}%"></div></div>
            <div class="caption">${op.done} of ${op.total} topics complete${op.done===0 ? ' — start your first level below' : ' — keep going 🔥'}</div>
          </div>
          <div class="floaty-badge fb1">⭐ ${state.xp} XP</div>
          <div class="floaty-badge fb2">🔥 ${state.streak} day streak</div>
        </div>
      </div>
    </section>

    <section class="features">
      <div class="feature"><div class="ico" style="background:rgba(124,58,237,.18);">🎮</div><div><h4>Gamified Learning</h4><p>Topics become levels, units become arcs, subjects become worlds.</p></div></div>
      <div class="feature"><div class="ico" style="background:rgba(16,185,129,.18);">📈</div><div><h4>Real Progress</h4><p>Track XP, streaks, and exactly how far you've come.</p></div></div>
      <div class="feature"><div class="ico" style="background:rgba(245,158,11,.18);">🏆</div><div><h4>AKTU Exam Traps</h4><p>Every topic flags the exact question patterns examiners repeat.</p></div></div>
      <div class="feature"><div class="ico" style="background:rgba(56,189,248,.18);">🎥</div><div><h4>Curated Videos</h4><p>Hand-picked explainers from Gate Smashers, Abdul Bari & more.</p></div></div>
    </section>

    <div class="section-title">
      <h2>Two Ways to Learn, One Amazing Experience</h2>
      <p>Pick the style that fits your mood — or switch anytime with the toggle above.</p>
    </div>
    <section class="options">
      <div class="option-card opt1">
        <span class="badge-tag">Option 1</span>
        <h3>Gamified Adventure</h3>
        <p>Each subject is a world. Each unit is an arc of floating islands, and topics are levels along a winding trail. Clear a level to unlock the next — clear every level to unlock the next arc.</p>
        <button class="btn btn-purple" onclick="openSubjects('adventure')">Explore Adventure →</button>
      </div>
      <div class="option-card opt2">
        <span class="badge-tag">Option 2</span>
        <h3>Focused Learning</h3>
        <p>Prefer a simpler path? Browse every subject's units as chunky banners, tap a unit to see all its topics as bubbles, and open any bubble for a fast, complete cheat-sheet.</p>
        <button class="btn btn-cyan" onclick="openSubjects('focused')">Explore Linear Mode →</button>
      </div>
    </section>

    <div class="section-title">
      <h2>B.Tech CSE & Allied · 2nd Year · Semester III</h2>
      <p>Six full subjects, mapped topic-by-topic. More years and branches coming soon.</p>
    </div>
    ${renderSubjectGrid()}
  </div>`;
}

function colorVar(c){
  return {purple:'var(--purple)',cyan:'var(--cyan)',amber:'var(--amber)',emerald:'var(--emerald)',rose:'#F472B6',blue:'#60A5FA'}[c] || 'var(--purple)';
}
function colorBg(c){
  return {purple:'rgba(124,58,237,.18)',cyan:'rgba(56,189,248,.18)',amber:'rgba(245,158,11,.18)',emerald:'rgba(16,185,129,.18)',rose:'rgba(244,114,182,.18)',blue:'rgba(96,165,250,.18)'}[c] || 'rgba(124,58,237,.18)';
}
