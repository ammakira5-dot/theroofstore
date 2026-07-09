---
name: Prerender static-server pristine shell bug
description: A resumable/retriable static-prerendering script must never treat the on-disk built index.html as the "pristine shell" for its SPA fallback — that file gets overwritten by the render of the "/" route itself, so repeated/resumed runs stack duplicate <head> tags (title, meta, OG) each time.
---

When building a headless-browser static prerender script (Playwright/Puppeteer against a local static server, snapshotting `page.content()` per route to `dist/<route>/index.html`):

**Rule:** capture the pristine build-output `index.html` into a separate backup file (or in-memory string) immediately once, before any route is rendered. Always serve that backup for the SPA fallback / any extensionless route request — never read the mutable on-disk `index.html` for this purpose.

**Why:** the "/" route's own render result gets written to that same on-disk `index.html`. If the script is interrupted (timeout) and resumed, or simply re-run, the "pristine shell" read at the top of a later run is actually the *previous run's rendered output* — which already has a `<title>`/meta/OG block baked in as static markup. React's client Helmet library (react-helmet-async) only knows how to dedupe/replace tags *it* created in the current page lifecycle; it has no way to detect or remove pre-existing static tags baked into the initial HTML by a prior render. Each re-run therefore appends another full head-tag block on top of the previous one — 2 runs → doubled tags, 3 runs → tripled, etc. This is invisible in a single clean run and only surfaces after retries/resumes, which is exactly when a large multi-hundred-route prerender job (constrained by short tool/process timeouts) is likely to need them.

**How to apply:** whenever writing a "snapshot every route to static HTML" pipeline that (a) writes the home/root route's output to the same path the static server reads as its fallback shell, and (b) is expected to run in multiple resumable passes — always separate "the file being progressively written" from "the pristine template being read for booting new routes."
