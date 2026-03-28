# Earthling Evaluator — GitHub Pages

Live demo (after first deploy): https://<your-username>.github.io/<your-repo>/

What this does
- The repository is a static site (index.html, app.js, styles.css).
- A GitHub Actions workflow `.github/workflows/gh-pages.yml` will publish the repository root to the `gh-pages` branch whenever you push to `main`.

How to publish
1. Commit and push your changes to the `main` branch.
2. The workflow will run and create/update the `gh-pages` branch.
3. GitHub Pages will serve the site (URL above). If needed, visit the repository Settings → Pages to confirm the site URL.

Notes & options
- If you prefer to serve from a `docs/` folder instead, move the site files into `docs/` and change `publish_dir` in the workflow to `docs/`.
- Add a screenshot (e.g., `seals/demo-screenshot.png`) to preview the site directly in this README.

Need me to:
- create a `docs/` folder and move files, or
- add an automated screenshot creation step, or
- tailor the workflow to a different branch?
