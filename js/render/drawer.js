/* ========================= TOPIC DRAWER (SHARED BY BOTH MODES) ========================= */
function escapeHtml(str){
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
function formatTechnical(text){
  const blocks = text.split('\n\n');
  return blocks.map(block=>{
    const lines = block.split('\n').map(l=>l.trim()).filter(Boolean);
    return lines.map(line=>{
      const isFormula = /[=≤≥⟹⊕]/.test(line) || /^(O\(|T\(|Address|Sum|Carry|rear|h\(k\)|dist\[)/.test(line);
      return isFormula
        ? `<span class="formula-line">${escapeHtml(line)}</span>`
        : `<p>${escapeHtml(line)}</p>`;
    }).join('');
  }).join('');
}
function renderDrawer(){
  const {s,u,t} = activeTopicRef;
  const subj = SUBJECTS[s];
  const unit = subj.units[u];
  const topic = unit.topics[t];
  const key = tkey(s,u,t);
  const done = state.completed.has(key);
  const html = `
  <div class="overlay" id="drawerOverlay" onclick="if(event.target===this) closeDrawer()">
    <div class="drawer">
      <div class="drawer-head">
        <h2>${topic.title}</h2>
        <button class="close-x" onclick="closeDrawer()">✕</button>
      </div>
      <div class="drawer-meta">
        <span class="pill" style="color:${colorVar(subj.color)}">${subj.name}</span>
        <span class="pill">${unit.title}</span>
        <span class="pill xp">⭐ ${topic.xp} XP</span>
      </div>

      <div class="panel">
        <h4>⏱ 60-Second Intuition</h4>
        <p>${topic.intuition}</p>
      </div>

      <div class="panel">
        <h4>🧩 Technical Formulation & Key Details</h4>
        <div class="tech-content">${formatTechnical(topic.technical)}</div>
      </div>

      <div class="panel trap">
        <h4>⚠️ AKTU Exam Trap</h4>
        <p>${topic.trap}</p>
      </div>

      <div class="panel res">
        <h4>🎥 Curated Resources</h4>
        <div class="res-links">
          ${topic.resources.map(r=>`<a class="res-link" href="${r.url}" target="_blank" rel="noopener">
            <span>▶</span><span style="flex:1;">${r.name}</span><span class="rtype">Open ↗</span>
          </a>`).join('')}
        </div>
      </div>

      <div class="drawer-actions">
        ${done
          ? `<button class="btn btn-outline" disabled>✓ Completed</button>`
          : `<button class="btn btn-emerald" onclick="completeTopic()">Mark Complete +${topic.xp} XP</button>`}
        <button class="btn btn-outline" onclick="closeDrawer()">Close</button>
      </div>
    </div>
  </div>`;
  document.body.insertAdjacentHTML('beforeend', html);
}
