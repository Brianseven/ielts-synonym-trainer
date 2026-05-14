# IELTS Synonym Trainer

雅思/英语同义替换单词背诵网站，基于 React + Vite + TypeScript。

## Local Development

```bash
npm install
npm run dev
```

The app will start at `http://127.0.0.1:5173/` by default.

## Data

The vocabulary is generated from the source Excel file into `src/data/vocabulary.ts`.

To regenerate:

```bash
python3 scripts/generate_vocabulary.py
```

## Production Build

```bash
npm ci
npm run build
npm run preview
```

The production files are generated in `dist/`.

## Deploy to Vercel

Vercel can import this repository directly as a Vite project.

1. Push the whole project to GitHub.
2. In Vercel, choose **Add New Project** and import the repository.
3. Keep the detected settings:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm ci`
4. Click **Deploy**.

The production URL appears on the Vercel deployment page after the build finishes.

## Deploy to GitHub Pages

This repository includes `.github/workflows/deploy.yml`. It automatically sets the Vite `base` path to `/<repository-name>/`, which is required for GitHub Pages project sites.

1. Push the whole project to a GitHub repository.
2. In GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push to the `main` branch, or manually run **Deploy to GitHub Pages** from the Actions tab.

The final URL is shown in the workflow summary and in **Settings → Pages**. It will normally look like:

```text
https://<username>.github.io/<repository-name>/
```

For a manual local GitHub Pages build using this repository name:

```bash
npm ci
npm run build:github-pages
```

If your GitHub repository name is different, use:

```bash
VITE_BASE_PATH=/your-repository-name/ npm run build
```
