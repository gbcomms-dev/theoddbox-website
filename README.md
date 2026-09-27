# The Oddbox — Website

Landing page for **The Oddbox**, a two-founder digital presence studio (technical + creative)
building unconventional websites and lead capture for small businesses and professional-service firms.

## Stack

Pure, dependency-free static site — no frameworks, no build step. Vercel serves it as-is.

```
index.html   → page structure & content
style.css    → styling and mobile-responsive layout
script.js    → footer year + contact-form placeholder handling
```

## Run locally

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy to Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and import this repository.
2. Framework preset: **Other** (no build command needed).
3. Leave the build & output settings empty — Vercel serves the static files directly.
4. Click **Deploy**.

Every push to `main` will trigger an automatic redeploy.

## Roadmap

- Wire the contact form to a live inbox (e.g. Formspree or a serverless function).
- Add case studies / portfolio section.
- Custom domain.
