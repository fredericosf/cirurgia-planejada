<!-- .github/copilot-instructions.md - Guidance for AI coding agents -->
# Copilot instructions — cirurgia-planejada

Goal: Help maintain and extend a tiny static landing page that simulates a planned-surgery questionnaire and routes leads to WhatsApp.

- **Project type:** Plain static site (HTML/CSS/JS) in repository root. No build system, no package.json.
- **Run locally:** Open `index.html` in a browser or serve the folder with a static server, e.g. `python -m http.server 8000` or `npx serve .`.

- **Big picture / why:** This is a single-page client-side questionnaire. `App.js` contains the entire interaction state (`steps`, `currentStep`, `answers`) and DOM logic. The UX funnels users to a WhatsApp link that pre-fills a message to convert leads.

- **Key files to inspect/edit:**
  - `index.html` — page shell and script/style includes.
  - `App.js` — all interaction logic; the `steps` array drives questions and options.
  - `Style.css` — styling for layout and buttons.

- **Important discovered patterns / gotchas:**
  - Filenames in HTML use lowercase (`app.js`, `style.css`) but actual files are `App.js` and `Style.css` (capitalized). On Windows this works; on Linux (production hosting) this will break. If you rename files, also update `index.html` paths.
  - All user-facing strings are in Portuguese — preserve tone and phrasing unless asked to translate.
  - The WhatsApp link and phone number are hardcoded inside `App.js` (`https://wa.me/...`). Do not alter the phone number or call-to-action copy without explicit instruction from the repo owner.
  - No framework or module system: changes should be cautious and minimal to avoid introducing unnecessary build steps.

- **Common tasks & examples**
  - Add a new question: update the `steps` array in `App.js`, keeping each item `{ question: "...", options: [ ... ] }`.
    Example: add `{ question: "Nova pergunta?", options: ["Sim","Não"] }` to the array.
  - Change CTA text or WhatsApp message: edit the string in `showResult()` inside `App.js`. Keep the link format `https://wa.me/<country><number>?text=...`.
  - Fix case-sensitive path bugs: ensure `index.html` `script` and `link` `href`/`src` match filenames exactly.

- **Project-specific conventions**
  - Minimal JS helpers only; follow existing DOM-manipulation style (createElement, innerText, onclick). Mirror naming: `renderStep()`, `nextStep()`, `showResult()`.
  - Keep layout centered for small mobile width (max-width ~420px). Avoid large dependency additions for small UI tweaks.

- **Suggested safe edits policy for an AI agent**
  - Make single, focused commits per change (e.g., "Add question to steps" or "Fix filename casing in index.html").
  - Run the app locally in a browser after edits to verify DOM updates and WhatsApp link behavior.
  - Do not change external links or phone numbers without explicit user approval.

- **If you need to add automation or tests:** Propose adding minimal tooling (a `package.json` with `serve` script or a simple test harness), but do not add it without asking the repo owner first.

If anything above is unclear or you want examples of a proposed change (small code patch), tell me which area to edit and I will prepare a patch and show a quick validation plan.
