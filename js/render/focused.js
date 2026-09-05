/* ========================= FOCUSED MODE: UNIT BANNERS + TOPIC BUBBLES ========================= */
function renderUnits(){
  const s = SUBJECTS[state.subjectIdx];
  return `<div class="wrap">
    <div class="topbar">
      <button class="crumb-btn" onclick="backTo('subjects')">← Subjects</button>
      <div>
        <div class="page-title">${s.icon} ${s.name}</div>
        <div class="page-sub">${s.code} · ${s.credits} Credits · LTP ${s.ltp} — tap a unit to reveal its topic bubbles</div>
      </div>
      <div></div>
    </div>
    <div class="unit-list">
      ${s.units.map((unit,u)=>{
        return `<div class="unit-banner" onclick="openUnit(${u})">
          <div class="unit-left">
            <div class="unit-num">${u+1}</div>
            <div>
              <h3>Unit ${['I','II','III','IV','V'][u]}: ${unit.title}</h3>
              <div class="u-sub">${unit.topics.length} topics</div>
            </div>
          </div>
          <div class="unit-right">
            <span class="lect-chip">${unit.lectures} Lectures</span>
            <span style="color:var(--text-faint);">→</span>
          </div>
        </div>`;
      }).join('')}
    </div>
  </div>`;
}

function renderBubbles(){
  const s = SUBJECTS[state.subjectIdx];
  const unit = s.units[state.unitIdx];
  return `<div class="wrap">
    <div class="topbar">
      <button class="crumb-btn" onclick="backTo('units')">← ${s.name}</button>
      <div>
        <div class="page-title">Unit: ${unit.title}</div>
        <div class="page-sub">Tap any bubble for a full cheat-sheet with intuition, formulas, exam traps and videos</div>
      </div>
      <div></div>
    </div>
    <div class="bubble-grid">
      ${unit.topics.map((topic,t)=>{
        const high = topic.xp>=30;
        return `<div class="bubble" onclick="openTopic(${state.subjectIdx},${state.unitIdx},${t},false)">
          ${topic.title}
          <span class="tag ${high?'high':'quick'}">${high?'🔥 High Yield':'⚡ Quick'}</span>
        </div>`;
      }).join('')}
    </div>
  </div>`;
}
