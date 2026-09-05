/* ========================= CORE RENDER LOOP & SHARED HELPERS ========================= */
/* ========================= RENDER ========================= */
function updateHeader(){
  document.getElementById('xpDisplay').textContent = state.xp;
  document.getElementById('streakDisplay').textContent = state.streak;
  document.getElementById('tglAdv').classList.toggle('active', state.mode==='adventure');
  document.getElementById('tglFoc').classList.toggle('active', state.mode==='focused');
}

function render(){
  updateHeader();
  const app = document.getElementById('app');
  if(state.view==='home') app.innerHTML = renderHome();
  else if(state.view==='subjects') app.innerHTML = renderSubjects();
  else if(state.view==='arcs') app.innerHTML = renderArcs();
  else if(state.view==='trail') app.innerHTML = renderTrail();
  else if(state.view==='units') app.innerHTML = renderUnits();
  else if(state.view==='bubbles') app.innerHTML = renderBubbles();
  window.scrollTo({top:0, behavior:'instant'});
}
