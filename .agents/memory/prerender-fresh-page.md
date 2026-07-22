---
name: Prerender fresh page per route
description: Why the prerender script must create a new browser page per route, not reuse one page across all routes.
---

React Helmet adds `<title>` and `<meta>` tags to the DOM but does NOT reliably remove the previous route's tags during in-page navigation. Reusing one Playwright page across all routes causes every prerendered HTML file to accumulate head tags from all previously rendered routes — resulting in duplicate `<title>`, `<meta name="description">`, `<link rel="canonical">`, and `<meta property="og:*">` tags that corrupt crawl signals site-wide.

**Fix:** Create a new `page` inside the loop (one per route), close it after saving the HTML. The browser itself is reused (fast to launch), only the page/tab is recycled.

**How to apply:** Any time the prerender script is modified, ensure `browser.newPage()` is called inside the route loop, not before it. The `finally { await page.close() }` block is required to avoid leaking browser tabs.

**Why:** Confirmed July 22 2026 — prerendered file for `/roof-coating-florida` contained `/roof-services` title and canonical tags because the routes are processed sequentially and Helmet left previous route tags in the shared DOM.
