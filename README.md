# devi's mart — portfolio

Static site (HTML5 + CSS3 + vanilla JS). No build step.

## Run locally
```
python3 -m http.server 8000   # then open http://localhost:8000
```
(Opening index.html directly also works.)

## Deploy
- **GitHub Pages:** push this folder to a repo → Settings → Pages → Branch `main` / root.
- **Netlify:** drag & drop this folder into app.netlify.com/drop.

## Structure
- `index.html` Home · `contents.html` Table of Contents · `about.html` About · `project.html?id=...` project detail
- `css/style.css` design tokens (colors/typography from Figma), NavPill sticker, shelves, receipt, responsive
- `js/projects-data.js` content for all 8 projects (text, theme colors, images)
- `js/main.js` renders awning, navbar, checkout + receipt, shelves, project pages, random "you might also like"
- `assets/` images exported from Figma

## Edit content
- Contact info: `CONTACT` at the top of `js/main.js`
- Project text/colors: `js/projects-data.js` (`theme` = awning & accent colors)
- Project IDs: bxsea, bens-radio, kula, na-willa, bncc, artospate, digital-compositing, illustrations

## Fonts
Figma uses SF Pro / SF Pro Rounded (Apple fonts, which cannot be self-hosted). They show natively on Apple devices
and fall back to Inter / Nunito elsewhere. The display fonts (Gorillaz, Achilleus Script) are exported as images.
