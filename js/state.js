/* ========================= STATE & PROGRESS HELPERS ========================= */
/* ========================= STATE ========================= */
const state = {
  mode: 'adventure',      // 'adventure' | 'focused'
  view: 'home',           // home | subjects | arcs | trail | units | bubbles
  subjectIdx: null,
  arcIdx: null,
  unitIdx: null,
  xp: 0,
  streak: 0,
  completed: new Set()  // subjectIdx-unitIdx-topicIdx
};

function tkey(s,u,t){ return s+'-'+u+'-'+t; }

function isTopicUnlocked(s,u,t){
  // All levels are unlocked from the start — a student can jump straight to
  // whichever topic they're weak on instead of being blocked by earlier ones.
  return true;
}
function isUnitUnlocked(s,u){
  // All arcs/units are unlocked from the start, same reasoning as above.
  return true;
}
function unitProgress(s,u){
  const unit = SUBJECTS[s].units[u];
  let done=0; unit.topics.forEach((t,i)=>{ if(state.completed.has(tkey(s,u,i))) done++; });
  return {done, total:unit.topics.length};
}
function subjectProgress(s){
  let done=0, total=0;
  SUBJECTS[s].units.forEach((unit,u)=>{ unit.topics.forEach((t,i)=>{ total++; if(state.completed.has(tkey(s,u,i))) done++; }); });
  return {done,total};
}

function overallProgress(){
  let done=0, total=0;
  SUBJECTS.forEach((subj,s)=>{ subj.units.forEach((unit,u)=>{ unit.topics.forEach((t,i)=>{ total++; if(state.completed.has(tkey(s,u,i))) done++; }); }); });
  return {done, total};
}
