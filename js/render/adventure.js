/* ========================= ADVENTURE MODE: ARC ISLANDS + LEVEL TRAIL ========================= */
function renderArcs(){
  const s = SUBJECTS[state.subjectIdx];
  return `<div class="wrap">
    <div class="topbar">
      <button class="crumb-btn" onclick="backTo('subjects')">← Subjects</button>
      <div>
        <div class="page-title">${s.icon} ${s.name}</div>
        <div class="page-sub">${s.code} · Choose an arc (unit) to begin your journey!</div>
      </div>
      <div></div>
    </div>
    <div class="island-belt">
      ${s.units.map((unit,u)=>{
        const unlocked = isUnitUnlocked(state.subjectIdx,u);
        const prog = unitProgress(state.subjectIdx,u);
        const complete = prog.done===prog.total;
        const cls = complete ? 'complete' : (unlocked ? 'unlocked' : 'locked');
        const icon = complete ? '🏆' : (unlocked ? '🏝️' : '🔒');
        return `${u>0 ? '<div class="island-connector"></div>' : ''}
        <div class="island-node">
          <div class="island-circle ${cls}" onclick="openArc(${u})">${icon}</div>
          <h4>Arc ${u+1}</h4>
          <span>${unit.title}</span>
          <span class="arc-progress">${unlocked ? prog.done+'/'+prog.total+' levels' : 'Locked'}</span>
        </div>`;
      }).join('')}
    </div>
  </div>`;
}

function renderTrail(){
  const s = SUBJECTS[state.subjectIdx];
  const unit = s.units[state.arcIdx];
  const prog = unitProgress(state.subjectIdx, state.arcIdx);
  return `<div class="wrap">
    <div class="topbar">
      <button class="crumb-btn" onclick="backTo('arcs')">← ${s.name}</button>
      <div>
        <div class="page-title">Arc ${state.arcIdx+1}: ${unit.title}</div>
        <div class="page-sub">${unit.lectures} proposed lectures · ${prog.done}/${prog.total} levels complete</div>
      </div>
      <div></div>
    </div>
    <div class="trail-panel">
      <div class="trail-head">
        <h3>Level Trail</h3>
        <span class="sub">Clear each level in order to unlock the next</span>
      </div>
      <div class="trail">
        ${unit.topics.map((topic,t)=>{
          const key = tkey(state.subjectIdx, state.arcIdx, t);
          const done = state.completed.has(key);
          const unlocked = isTopicUnlocked(state.subjectIdx, state.arcIdx, t);
          const cls = done ? 'done' : (unlocked ? 'current' : 'locked');
          const icon = done ? '✓' : (unlocked ? '▶' : '🔒');
          const clickable = unlocked;
          return `<div class="trail-item ${clickable?'clickable':''}">
            <div class="trail-line"></div>
            <div class="node-circle ${cls}" ${clickable?`onclick="openTopic(${state.subjectIdx},${state.arcIdx},${t},false)"`:''}>${icon}</div>
            <div class="trail-label" ${clickable?`onclick="openTopic(${state.subjectIdx},${state.arcIdx},${t},false)"`:''}>
              <h5>Level ${t+1} · ${topic.title}</h5>
              <span>${done ? 'Completed · +'+topic.xp+' XP earned' : (unlocked ? '+'+topic.xp+' XP · Tap to start' : 'Locked')}</span>
            </div>
          </div>`;
        }).join('')}
      </div>
    </div>
  </div>`;
}
