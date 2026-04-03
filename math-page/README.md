# MathGlyph

MathGlyph is a static single-page mathematical notation reference with KaTeX-rendered formulas, LaTeX source, explanations, and worked examples.

## Features

- **147 symbols** across Logic, Set Theory, Algebra, Calculus, Linear Algebra, Probability, Statistics, and General notation
- **24 Greek letters** with names, LaTeX commands, and common uses
- **54 abbreviations** spanning statistics, ML, econometrics, and general math
- **17 famous equations** with historical context and real-world examples
- Search by symbol/name/meaning, category filters, and tabbed sections
- Expandable symbol cards with:
  - rendered formula
  - LaTeX + Unicode copy actions
  - explanations, examples, use-cases, and source references
- One-click export of the current filtered symbols to **CSV**, **JSON**, and **Markdown**
- URL + local persistence for active tab/filter/search/font size
- Print mode optimized for the symbols view

## Run locally

No build step, package manager, or server is required.

1. Open `index.html` directly in a browser.
2. Refresh to see changes after editing files.

## Project structure

- `index.html` — layout, tabs/panels, toolbar controls, CDN links, and script loading order
- `src\style\style.css` — theme tokens, responsive grid/card/table styles, print styles
- `src\js\data.js` — source datasets (`SOURCES`, `SYMBOLS`, `GREEK`, `VARIANTS`, `ABBRS`, `EQUATIONS`)
- `src\js\utils.js` — KaTeX rendering helper, escaping, category labels, Unicode mapping, clipboard/toast helpers
- `src\js\render.js` — rendering functions for symbols, greek table, variants, abbreviations, equations
- `src\js\export.js` — CSV/JSON/Markdown export from the current filtered symbol set
- `src\js\app.js` — state management, URL/localStorage sync, events, boot sequence
- `MATH.md` — generated Markdown export snapshot

## Data model (symbols)

Each entry in `SYMBOLS` follows:

`symbol`, `name`, `category`, `pkg`, `usedIn`, `sources`, `meaning`, `explanation`, `examples`

## Sources

| Reference | Author(s) |
|---|---|
| *Discrete Mathematics* (2022) | Grami |
| *Probabilistic Machine Learning* (2023) | Murphy |
| *Foundations of Agnostic Statistics* (2019) | Aronow & Miller |
| *ML Notation* (2017) | Holzinger |
| *Introductory Statistics* | OpenStax |
| *Notation in Econometrics* (2002) | Abadir & Magnus |
| *Glossary of Mathematical Symbols* | Wikipedia |

## CDN dependencies

- [KaTeX 0.16.9](https://katex.org/) for math rendering
- [Google Fonts](https://fonts.google.com/) for Lora, DM Sans, and JetBrains Mono
