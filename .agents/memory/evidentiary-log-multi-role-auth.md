---
name: Evidentiary log multi-role auth pattern
description: How read-only third-party (attorney) access was added to an admin-only monitoring log without weakening evidentiary integrity.
---

For legal/evidentiary logs (e.g. trademark monitoring), a stakeholder (attorney) may need live viewing access separate from the admin who can write to it.

Pattern used: single shared header (`x-admin-password`), server checks the value against two separate secrets and returns a role (`"admin" | "attorney" | false`). GET endpoints allow both roles; POST/write endpoints require `role === "admin"` explicitly. The role is returned in the API response body so the frontend can conditionally hide write-only UI (forms, action buttons) — never inferred client-side from which password was typed.

**Why:** Keeping write access restricted to a single role preserves the append-only, single-source-of-truth nature of evidence intended for legal proceedings — more writers would weaken chain-of-custody credibility. Read access for outside counsel supports real-time validation without that risk.

**How to apply:** When adding a new low-privilege viewer role to an existing single-password admin area, extend the auth check to return a role string (not just boolean), gate writes on the specific role, and have the frontend trust the server's role field rather than guessing.
