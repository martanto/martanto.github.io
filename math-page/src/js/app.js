// ── URL & Local Storage State ──

function pushState(){
  const p=new URLSearchParams();
  if(activeFilter!=='all') p.set('cat',activeFilter);
  if(searchQuery) p.set('q',searchQuery);
  if(activeTab!=='symbols') p.set('tab',activeTab);
  const url=p.toString()?`${location.pathname}?${p}`:location.pathname;
  history.replaceState(null,'',url);
}
function loadState(){
  const p=new URLSearchParams(location.search);
  const cat=p.get('cat')||localStorage.getItem('mg-cat')||'all';
  const q=p.get('q')||'';
  const tab=p.get('tab')||localStorage.getItem('mg-tab')||'symbols';
  const fs=localStorage.getItem('mg-fs')||'16';
  activeFilter=cat; searchQuery=q; activeTab=tab;
  document.getElementById('search').value=q;
  document.getElementById('fs-select').value=fs;
  document.documentElement.style.fontSize=fs+'px';
  document.querySelectorAll('.filter-btn').forEach(b=>{
    b.classList.toggle('active',b.dataset.cat===cat);
  });
}

// ── State ──

let activeFilter='all',searchQuery='',allExpanded=false,activeTab='symbols';

// ── Events ──

function switchTab(tab){
  activeTab=tab;
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.toggle('active',b.dataset.tab===tab));
  document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
  document.getElementById('panel-'+tab).classList.add('active');
  const isSymbols=tab==='symbols';
  document.getElementById('count-bar').style.display=isSymbols?'flex':'none';
  document.getElementById('filter-row').style.display=isSymbols?'flex':'none';
  localStorage.setItem('mg-tab',tab);
  pushState();
}
document.querySelectorAll('.tab-btn').forEach(b=>b.addEventListener('click',()=>switchTab(b.dataset.tab)));

document.querySelectorAll('.filter-btn').forEach(b=>b.addEventListener('click',()=>{
  document.querySelectorAll('.filter-btn').forEach(x=>x.classList.remove('active'));
  b.classList.add('active');
  activeFilter=b.dataset.cat;
  allExpanded=false;
  document.getElementById('toggle-all-btn').textContent='Expand all';
  localStorage.setItem('mg-cat',activeFilter);
  render();
}));

document.getElementById('search').addEventListener('input',e=>{
  searchQuery=e.target.value;
  render();
});

document.addEventListener('keydown',e=>{
  const inp=document.getElementById('search');
  if(e.key==='/'&&document.activeElement!==inp){e.preventDefault();inp.focus();}
  if(e.key==='Escape'){inp.blur();}
});

document.getElementById('toggle-all-btn').addEventListener('click',()=>{
  allExpanded=!allExpanded;
  document.getElementById('toggle-all-btn').textContent=allExpanded?'Collapse all':'Expand all';
  document.querySelectorAll('.card').forEach(c=>c.classList.toggle('expanded',allExpanded));
});

document.getElementById('btn-csv').addEventListener('click',exportCSV);
document.getElementById('btn-json').addEventListener('click',exportJSON);
document.getElementById('btn-md').addEventListener('click',exportMarkdown);

document.getElementById('fs-select').addEventListener('change',()=>{
  const px=document.getElementById('fs-select').value;
  document.documentElement.style.fontSize=px+'px';
  localStorage.setItem('mg-fs',px);
});

window.addEventListener('scroll',()=>{
  document.getElementById('back-top').classList.toggle('visible',window.scrollY>400);
});

// ── Boot ──

function boot(){
  loadState();
  renderHeaderDesc();
  updateFilterCounts();
  render();
  renderGreek();
  renderVariants();
  renderAbbr();
  renderEquations();
  const isSymbols=activeTab==='symbols';
  document.getElementById('count-bar').style.display=isSymbols?'flex':'none';
  document.getElementById('filter-row').style.display=isSymbols?'flex':'none';
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.toggle('active',b.dataset.tab===activeTab));
  document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
  document.getElementById('panel-'+activeTab).classList.add('active');
}
function waitKatex(cb){if(window.katex)return cb();setTimeout(()=>waitKatex(cb),80);}
waitKatex(boot);
