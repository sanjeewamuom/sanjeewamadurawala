# Sanjeewa Madurawala — Portfolio

Professional portfolio site built with [Astro](https://astro.build), deployed to GitHub Pages.

**Live site:** https://sanjeewamuom.github.io/sanjeewamadurawala/

## Development

```bash
npm install
npm run dev
```

Open http://localhost:4321/sanjeewamadurawala/

## Build

```bash
npm run build
npm run preview
```

## Deploy

Pushes to `main` or `master` trigger [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which builds and publishes to GitHub Pages.

In repository **Settings → Pages**, set source to **GitHub Actions**.

## Structure

- `src/content/projects/` — Public portfolio projects (screenshots)
- `src/content/experience/` — Text-only enterprise case studies
- `src/content/site.json` — Site metadata, skills, contact
- `public/images/` — Project images
- `public/cv/` — Downloadable CV PDF
- `legacy/` — Previous HTML5 UP site (archived)

## Update CV

Replace `public/cv/Sanjeewa_Madurawala_CV.pdf` and rebuild.
