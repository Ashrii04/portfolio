# Ashritha S — Portfolio

A single-page dark, terminal/code-editor themed portfolio built with plain HTML, CSS, and vanilla JavaScript. No build step, no dependencies to install.

## Structure
```
ashritha-portfolio/
├── index.html   → page structure & content
├── style.css    → all styling (dark theme, layout, responsive rules)
├── script.js    → terminal typing animation + scroll-based nav highlighting
└── README.md
```

## Run it locally
Just open `index.html` in any browser — double-click it, or:
```
open index.html        # Mac
start index.html        # Windows
```

## Deploy it (pick one)

**GitHub Pages**
1. Create a new repo (e.g. `portfolio`) on github.com/Ashrii04
2. Push these 3 files to the repo root
3. Repo Settings → Pages → Deploy from branch → `main` / root
4. Live at `https://ashrii04.github.io/portfolio`

**Vercel**
1. `npm i -g vercel` (or use the Vercel dashboard → "Add New Project")
2. Import this folder / connect the GitHub repo
3. Deploy — no build settings needed, it's static

**Netlify**
1. Drag and drop this folder onto app.netlify.com/drop

## Editing content
All content lives directly in `index.html` — experience, projects, skills, and achievements are plain HTML blocks, easy to find and edit (search for section ids: `#about`, `#skills`, `#experience`, `#projects`, `#achievements`, `#contact`).

Colors and fonts are CSS variables at the top of `style.css` under `:root` — change `--teal` / `--amber` there to re-theme the whole site in one place.
