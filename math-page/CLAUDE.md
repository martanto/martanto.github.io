# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**MathGlyph** is a static web app — a mathematical notation reference/cheat-sheet. There is no build step, no bundler, no package manager, and no server-side code.

To develop: open `index.html` directly in a browser. Any changes are immediately visible on refresh.

## File Structure

| File | Purpose |
|---|---|
| `index.html` | HTML shell — structure only, no inline CSS or JS |
| `src/style/style.css` | All styles — CSS custom properties, layout, components, print |
| `src/js/data.js` | All data arrays: SOURCES, SYMBOLS (114), GREEK, VARIANTS, ABBRS, EQUATIONS |
| `src/js/utils.js` | Pure helpers: rk, esc, sizeClass, tagClass, catLabel, UNI, toUnicode, showToast, copyFromData |
| `src/js/export.js` | Export functions: getFiltered, exportCSV, exportJSON, exportMarkdown |
| `src/js/render.js` | DOM renderers: render, renderGreek, renderVariants, renderAbbr, renderEquations, renderHeaderDesc |
| `src/js/app.js` | App state, event listeners, pushState/loadState, boot, waitKatex |

Scripts load in order: `data.js` → `utils.js` → `export.js` → `render.js` → `app.js`. All variables are globals — no ES modules.

## Architecture Notes

- **KaTeX** — loaded `defer` from CDN (`cdn.jsdelivr.net/npm/katex@0.16.9`). All rendering must happen after KaTeX is ready. The `waitKatex(boot)` pattern in `app.js` polls until `window.katex` is available before calling `boot()`.
- **CSS custom properties** — full design token system (`--bg`, `--accent`, `--surface-alt`, `--border`, `--text-muted`, etc.). Tag categories each have a color pair (`--tag-{cat}-c` / `--tag-{cat}-bg`).
- **Fonts** — Google Fonts: `Lora` (serif, headings), `DM Sans` (UI), `JetBrains Mono` (code/LaTeX).
- **State** — `activeFilter`, `searchQuery`, `allExpanded`, `activeTab` are module-level vars in `app.js`. Persisted via `localStorage` and `URLSearchParams`.

## UI Structure

```
<header>         — title, stats, inline KaTeX in description
<div.toolbar>    — search input, category filter buttons, size/print/export actions
<div.count-bar>  — live result count, expand-all toggle
<div.tabs>       — Symbols | Greek Alphabet | Notation Variants | Abbreviations | Famous Equations
<div.panel>      — one per tab; symbols tab has a <div.grid> of <div.card> elements
<footer>         — source citations
```

Cards are expandable: clicking reveals LaTeX source, description, examples, used-in tags, and source chips. Symbol rendering uses `.symbol-box` with size classes (`sz-base`, `sz-md`, `sz-sm`, `sz-xs`).

## Data Shape (SYMBOLS entries)

```js
{
  symbol: "\\nabla f",       // LaTeX string — also used as display
  name: "Gradient",
  category: "calculus",      // logic|set|algebra|calculus|probability|linalg|statistics|misc
  pkg: null,                 // LaTeX package required, or null for built-in
  usedIn: ["Calculus","ML"], // plain-text field labels
  sources: ["murphy","holz"],// keys into SOURCES object
  meaning: "...",
  explanation: "...",
  examples: ["\\nabla f=[2x,2y]"]
}
```
