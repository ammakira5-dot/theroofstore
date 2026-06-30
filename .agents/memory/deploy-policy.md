---
name: Deploy approval required
description: User must explicitly approve before any publish/deploy is suggested
---

The user has stated clearly: do not suggest publishing or deploying until they explicitly say so (e.g. "publish it", "deploy it", "go live").

**Why:** User asked "can you do X?" and agent jumped to deploying before the user approved the change. This is unwanted.

**How to apply:** After implementing any feature or fix, stop at "take a look in preview and let me know" — do not call `suggest_deploy` until the user says words like "publish", "deploy", "go live", or gives explicit approval.
