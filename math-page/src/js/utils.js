// ── Helpers ──

function rk(latex){
  try{return katex.renderToString(latex,{throwOnError:false});}
  catch(e){return`<code>${latex}</code>`;}
}
function esc(str){
  return(str||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function sizeClass(latex){
  const len=latex.replace(/\\[a-zA-Z]+/g,'X').replace(/[{}\s]/g,'').length;
  if(len>16)return'sz-xs';
  if(len>10)return'sz-sm';
  if(len>5) return'sz-md';
  return'sz-base';
}
function tagClass(cat){
  return{logic:'tag-logic',set:'tag-set',algebra:'tag-algebra',calculus:'tag-calculus',
    probability:'tag-probability',linalg:'tag-linalg',statistics:'tag-statistics',misc:'tag-misc'}[cat]||'tag-misc';
}
function catLabel(cat){
  return{logic:'Logic',set:'Sets',algebra:'Algebra',calculus:'Calculus',
    probability:'Probability',linalg:'Linear Algebra',statistics:'Statistics',misc:'General'}[cat]||cat;
}

const UNI={'\\equiv':'≡','\\lnot':'¬','\\land':'∧','\\lor':'∨','\\oplus':'⊕','\\to':'→',
  '\\leftrightarrow':'↔','\\forall':'∀','\\exists':'∃','\\therefore':'∴','\\Rightarrow':'⇒',
  '\\Leftrightarrow':'⟺','\\in':'∈','\\notin':'∉','\\subseteq':'⊆','\\subset':'⊂',
  '\\cup':'∪','\\cap':'∩','\\setminus':'\\','\\emptyset':'∅','\\mathbb{N}':'ℕ',
  '\\mathbb{Z}':'ℤ','\\mathbb{Q}':'ℚ','\\mathbb{R}':'ℝ','\\mathbb{C}':'ℂ',
  '\\nabla':'∇','\\infty':'∞','\\approx':'≈','\\propto':'∝','\\pm':'±','\\neq':'≠',
  '\\leq':'≤','\\geq':'≥','\\sim':'∼','\\cong':'≅','\\perp':'⊥','\\triangle':'△',
  '\\alpha':'α','\\beta':'β','\\gamma':'γ','\\delta':'δ','\\epsilon':'ε',
  '\\theta':'θ','\\lambda':'λ','\\mu':'μ','\\pi':'π','\\sigma':'σ',
  '\\tau':'τ','\\phi':'φ','\\psi':'ψ','\\omega':'ω','\\Sigma':'Σ','\\Omega':'Ω',
  '\\partial':'∂','\\times':'×','\\otimes':'⊗','\\odot':'⊙','\\sqrt':'√',
};
function toUnicode(latex){
  for(const[k,v]of Object.entries(UNI)){if(latex.includes(k))return v;}
  const m=latex.match(/[^\\\{\}\^\_\s][^\\\{\}\^\_\s]*/);
  return m?m[0]:latex;
}

// ── Toast & Copy ──

function showToast(msg){
  const t=document.getElementById('toast');
  t.textContent=msg; t.classList.add('show');
  clearTimeout(t._t); t._t=setTimeout(()=>t.classList.remove('show'),1800);
}
function copyFromData(btn,label){
  const text=btn.dataset.copy||'';
  navigator.clipboard.writeText(text).then(()=>{
    const was=btn.textContent; btn.textContent=label||'✓'; btn.classList.add('copied');
    setTimeout(()=>{btn.textContent=was;btn.classList.remove('copied');},1500);
    showToast('Copied to clipboard');
  }).catch(()=>showToast('Copy failed'));
}

