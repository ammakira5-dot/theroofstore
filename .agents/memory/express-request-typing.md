---
name: Express req typing pitfall
description: Avoid a broken type-inference trick for typing `req` in helper functions outside route handlers.
---

Don't type a standalone helper's `req` param as `Parameters<Parameters<typeof router.use>[0]>[0]` — it silently stops resolving to a valid Express `Request` type under this repo's Express/TS versions and throws TS2344/TS2339/TS2345 in every function that uses it.

**Why:** This pattern appeared in `admin.ts` and was copied into a new route file (`trademark-monitoring.ts`), breaking `pnpm run typecheck` in both places simultaneously.

**How to apply:** Just `import { Router, type Request } from "express"` and type the helper param as `Request` directly. If you see this `Parameters<Parameters<...>>` pattern anywhere else in the codebase, replace it the same way.
