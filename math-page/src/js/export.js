// ── Export ──

function getFiltered(){
  const q=searchQuery.toLowerCase();
  return SYMBOLS.filter(s=>{
    const catOk=activeFilter==='all'||s.category===activeFilter;
    const qOk=!q||[s.symbol,s.name,s.meaning,s.explanation||''].some(t=>t.toLowerCase().includes(q));
    return catOk&&qOk;
  });
}
function dl(name,content,type){
  const a=document.createElement('a');
  a.href=URL.createObjectURL(new Blob([content],{type}));
  a.download=name; a.click(); URL.revokeObjectURL(a.href);
}
function exportCSV(){
  const rows=getFiltered();
  const h=['Name','Category','Symbol (LaTeX)','Meaning','Used In','LaTeX Package','Sources'];
  const lines=[h.join(','),...rows.map(s=>[
    `"${esc(s.name)}"`,`"${catLabel(s.category)}"`,`"${s.symbol}"`,
    `"${s.meaning.replace(/"/g,'""')}"`,`"${(s.usedIn||[]).join('; ')}"`,
    `"${s.pkg||'built-in'}"`,`"${(s.sources||[]).map(k=>SOURCES[k]?.short||k).join('; ')}"`,
  ].join(','))];
  dl('mathglyph.csv',lines.join('\n'),'text/csv');
  showToast(`Exported ${rows.length} symbols as CSV`);
}
function exportJSON(){
  const rows=getFiltered().map(s=>({
    name:s.name,category:catLabel(s.category),symbol_latex:s.symbol,
    meaning:s.meaning,explanation:s.explanation||'',
    latex_package:s.pkg||'built-in',used_in:s.usedIn||[],
    sources:(s.sources||[]).map(k=>SOURCES[k]?.title||k),
    examples:s.examples||[],
  }));
  dl('mathglyph.json',JSON.stringify(rows,null,2),'application/json');
  showToast(`Exported ${rows.length} symbols as JSON`);
}
function exportMarkdown(){
  const rows=getFiltered();
  const mdEsc=s=>(s||'').replace(/\|/g,'\\|').replace(/\n/g,' ');
  const groups={};
  rows.forEach(s=>{
    const label=catLabel(s.category);
    if(!groups[label])groups[label]=[];
    groups[label].push(s);
  });
  const lines=[];
  lines.push('# MathGlyph — Mathematical Notation Reference');
  lines.push('');
  lines.push(`> Exported ${rows.length} symbols on ${new Date().toLocaleDateString()}.`);
  lines.push('');
  for(const[group,syms]of Object.entries(groups)){
    lines.push(`## ${group}`);
    lines.push('');
    lines.push('| Symbol (LaTeX) | Name | Meaning | Used In | LaTeX Package |');
    lines.push('|---|---|---|---|---|');
    syms.forEach(s=>{
      const pkg=s.pkg?`\`\\\\usepackage{${s.pkg}}\``:'built-in';
      const usedIn=(s.usedIn||[]).join(', ');
      lines.push(`| \`${mdEsc(s.symbol)}\` | ${mdEsc(s.name)} | ${mdEsc(s.meaning)} | ${mdEsc(usedIn)} | ${pkg} |`);
    });
    lines.push('');
  }
  dl('mathglyph.md',lines.join('\n'),'text/markdown');
  showToast(`Exported ${rows.length} symbols as Markdown`);
}

