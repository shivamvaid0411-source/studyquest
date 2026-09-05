/* ========================= SUBJECT GRID + SUBJECT PICKER VIEW ========================= */
function renderSubjectGrid(){
  return `<div class="subjects-grid">
    ${SUBJECTS.map((s,i)=>{
      const p = subjectProgress(i);
      const pct = Math.round((p.done/p.total)*100);
      return `<button class="subject-card" onclick="setMode('${state.mode}'); openSubject(${i})">
        <div class="subject-icon" style="background:${colorBg(s.color)};">${s.icon}</div>
        <h3>${s.name}</h3>
        <div class="code">${s.code}</div>
        <div class="subject-meta">
          <span class="meta-chip">${s.credits} Credits</span>
          <span class="meta-chip">LTP ${s.ltp}</span>
          <span class="meta-chip">${s.units.length} Units</span>
        </div>
        <div class="progress-row"><span>${p.done}/${p.total} Topics</span><span>${pct}%</span></div>
        <div class="bar-track"><div class="bar-fill" style="width:${pct}%; background:${colorVar(s.color)};"></div></div>
      </button>`;
    }).join('')}
  </div>`;
}

function renderSubjects(){
  return `<div class="wrap">
    <div class="topbar">
      <button class="crumb-btn" onclick="goHome()">← Home</button>
      <div>
        <div class="page-title">${state.mode==='adventure' ? 'Choose a World to Begin Your Adventure' : 'Choose a Subject for Focused Learning'}</div>
        <div class="page-sub">${state.mode==='adventure' ? 'Every subject is a world of floating island arcs.' : 'Every subject expands into units, then topic bubbles.'}</div>
      </div>
      <div></div>
    </div>
    ${renderSubjectGrid()}
  </div>`;
}
