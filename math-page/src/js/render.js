// ── Render: Symbols ──

function updateFilterCounts(){
  document.querySelectorAll('.filter-btn').forEach(b=>{
    const cat=b.dataset.cat;
    const count=cat==='all'?SYMBOLS.length:SYMBOLS.filter(s=>s.category===cat).length;
    let sp=b.querySelector('.count');
    if(!sp){sp=document.createElement('span');sp.className='count';b.appendChild(sp);}
    sp.textContent=count;
  });
}

function render(){
  const grid=document.getElementById('grid');
  const filtered=getFiltered();
  document.getElementById('count-text').innerHTML=`Showing <b>${filtered.length}</b> of ${SYMBOLS.length} symbols`;
  document.getElementById('stat-symbols').textContent=SYMBOLS.length+'+';

  if(!filtered.length){
    grid.innerHTML=`<div class="no-results"><span class="eg">∅</span><p>No symbols matched your search.</p></div>`;
    return;
  }

  grid.innerHTML=filtered.map((s,i)=>{
    const sc=sizeClass(s.symbol);
    const uc=toUnicode(s.symbol);
    const exs=(s.examples||[]).map(e=>`<div class="detail-example">${rk(e)}</div>`).join('');
    const usedInHtml=(s.usedIn||[]).map(u=>`<span class="card-tag tag-usedin">${esc(u)}</span>`).join('');
    const srcHtml=(s.sources||[]).map(k=>{
      const src=SOURCES[k];if(!src)return'';
      return`<span class="source-chip"><svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>${src.short}</span>`;
    }).join('');
    const pkgHtml=s.pkg?`<span class="pkg-badge"><svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>\\usepackage{${s.pkg}}</span>`:'';

    return`<div class="card" id="c${i}" onclick="toggle(${i})">
    <div class="card-top">
      <div class="symbol-box ${sc}">${rk(s.symbol)}</div>
      <div class="card-info">
        <div class="card-name">${esc(s.name)}</div>
        <div class="card-meaning">${esc(s.meaning)}</div>
        <div class="card-footer">
          <div class="card-tags"><span class="card-tag ${tagClass(s.category)}">${catLabel(s.category)}</span></div>
          <svg class="expand-chevron" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
      </div>
    </div>
    <div class="card-detail">
      <div class="detail-section">
        <div class="detail-label">LaTeX</div>
        <div class="latex-row">
          <span class="latex-code">${esc(s.symbol)}</span>
          <button class="copy-btn" data-copy="${esc(s.symbol)}" onclick="event.stopPropagation();copyFromData(this,'✓ Copied')">
            <svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy LaTeX
          </button>
          <button class="copy-btn" data-copy="${esc(uc)}" onclick="event.stopPropagation();copyFromData(this,'✓ Copied')">
            <svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7V4h16v3"/><path d="M9 20h6"/><path d="M12 4v16"/></svg>Copy Unicode
          </button>
        </div>
        ${pkgHtml?`<div style="margin-top:0.4rem">${pkgHtml}</div>`:''}
      </div>
      ${s.explanation?`<div class="detail-section"><div class="detail-label">Explanation</div><div class="detail-text">${esc(s.explanation)}</div></div>`:''}
      ${exs?`<div class="detail-section"><div class="detail-label">Examples</div>${exs}</div>`:''}
      ${usedInHtml?`<div class="detail-section"><div class="detail-label">Used in</div><div class="card-tags" style="margin-top:0.1rem">${usedInHtml}</div></div>`:''}
      ${srcHtml?`<div class="detail-section"><div class="detail-label">Sources</div><div style="margin-top:0.1rem">${srcHtml}</div></div>`:''}
    </div>
  </div>`;
  }).join('');

  if(allExpanded) document.querySelectorAll('.card').forEach(c=>c.classList.add('expanded'));
  pushState();
}

function toggle(i){
  document.getElementById('c'+i).classList.toggle('expanded');
}

// ── Render: Greek ──

function renderGreek(){
  const tbody=document.querySelector('#greek-table tbody');
  tbody.innerHTML=GREEK.map(g=>`<tr>
  <td class="sym-cell">${g.uc}${g.lc?' / '+g.lc:''}</td>
  <td class="name-cell">${g.name}</td>
  <td class="latex-cell">${esc(g.latex)}</td>
  <td class="use-cell">${esc(g.uses)}</td>
  <td class="copy-cell">
    <button class="tbl-copy" data-copy="${esc(g.latex)}" onclick="copyFromData(this,'✓')">LaTeX</button>
    <button class="tbl-copy" data-copy="${g.uc}" onclick="copyFromData(this,'✓')">Char</button>
  </td>
</tr>`).join('');
}

// ── Render: Variants ──

function renderVariants(){
  const el=document.getElementById('variants-content');
  el.innerHTML=VARIANTS.map(v=>`
  <p class="variants-group-title">${esc(v.group)}</p>
  <table class="variants-table">
    <thead><tr><th style="width:80px">Symbol</th><th style="width:180px">Field</th><th>Meaning</th></tr></thead>
    <tbody>${v.rows.map(r=>`<tr>
      <td class="v-sym">${rk(r.symbol)}</td>
      <td class="v-field">${esc(r.field)}</td>
      <td class="v-meaning">${esc(r.meaning)}</td>
    </tr>`).join('')}</tbody>
  </table>
`).join('');
}

// ── Render: Abbreviations ──

function renderAbbr(){
  const grid=document.getElementById('abbr-grid');
  const seen=new Set();
  const unique=ABBRS.filter(a=>{if(seen.has(a.term))return false;seen.add(a.term);return true;});
  unique.sort((a,b)=>a.term.localeCompare(b.term));
  grid.innerHTML=unique.map(a=>`<div class="abbr-card">
  <span class="abbr-term">${esc(a.term)}</span>
  <span class="abbr-def">${esc(a.def)}</span>
</div>`).join('');
}

// ── Render: Equations ──

function renderEquations(){
  const grid=document.getElementById('eq-grid');
  grid.className='eq-grid';
  grid.innerHTML=EQUATIONS.map(eq=>`
  <div class="eq-card">
    <div class="eq-header">
      <span class="eq-number">${eq.n}</span>
      <div class="eq-title-block">
        <div class="eq-name">${esc(eq.name)}</div>
        <div class="eq-meta">${esc(eq.author)}, ${esc(eq.year)}</div>
      </div>
    </div>
    <div class="eq-formula">${rk(eq.formula)}</div>
    <div class="eq-sections">
      <div>
        <div class="eq-section-label">What it means</div>
        <div class="eq-section-text">${esc(eq.description)}</div>
      </div>
      <div>
        <div class="eq-section-label">Real-world example</div>
        <div class="eq-example">${esc(eq.example)}</div>
      </div>
    </div>
  </div>
`).join('');
}

// ── Render: Header description with inline KaTeX ──

function renderHeaderDesc(){
  const el=document.getElementById('header-desc');
  const exprs=['p \\Rightarrow q','\\int_a^b f(x)\\,dx','P(A\\mid B)','\\mathbf{Ax}=\\mathbf{b}'];
  el.innerHTML='A reference guide to mathematical symbols and notation \u2014 covering logic <span class="hmath"></span>, calculus <span class="hmath"></span>, probability <span class="hmath"></span>, and linear algebra <span class="hmath"></span> \u2014 with LaTeX source, Greek letters, and worked examples.';
  document.querySelectorAll('.hmath').forEach((s,i)=>katex.render(exprs[i],s,{throwOnError:false,displayMode:false}));
}

