---
name: Verification tool URL caching
description: External screenshot/webFetch tools can return stale cached snapshots keyed by exact URL, causing false "still broken in production" conclusions.
---

When verifying a production fix with the `screenshot` (external_url) or `webFetch` tools, a "bug still present" result for a URL that was fetched/screenshotted *before* the fix was published can be a stale cache hit from the tool's own backend, not a real regression.

**Why:** Investigated a reported "double header" on a specific production page. Exhaustive source review (Layout, Navbar, App router, main.tsx, server.js, full page component) showed no possible duplicate render, and other pages on the same bundle rendered cleanly. The one affected URL was the exact URL originally reported broken pre-fix. Re-fetching with a cache-busting query param (`?cachebust=<timestamp>`) immediately returned clean single-header content.

**How to apply:** Before trusting a persistent "still broken in prod" signal from these tools — especially when source code review finds nothing wrong and other routes/pages are clean — retest with a cache-busting query param appended to the URL. If that resolves it, the original result was a stale tool-side cache, not a real bug. Don't spend further engineering time chasing it in the codebase.
