---
name: Prerender stalls on large batches — cycle to resume
description: The roof-store prerender script silently stalls mid-run; kill and rerun without PRERENDER_FORCE to resume until all routes are written.
---

The prerender script (Playwright, one fresh page per route) silently stalls after ~20–40 pages on large batches — no error, no output, page count just stops growing.

**Why:** Appears to be a browser/resource leak accumulating across many newPage() cycles; the 30s goto timeout never fires because the hang is outside the navigation.

**How to apply:** Run prerender in the background and poll `find dist/public -name index.html | wc -l`. If the count doesn't move for ~2 minutes, kill the `tsx ./src/prerender.ts` process (kill by PID list — `pkill -f` with the pattern in your own shell command kills your own shell first) and rerun `pnpm run prerender` WITHOUT `PRERENDER_FORCE` — it skips already-written files and resumes. Repeat until the final "Prerendered N/N routes (0 failed)" line appears.
