---
name: Resend email setup
description: Current state of Resend transactional email — what works, what's pending, and how to finish domain verification.
---

# Resend Email Setup

## What works now
- Lead notification emails send to **ammakira5@gmail.com** (the Resend account email)
- Auto-response (factory price sheet) sends only to ammakira5@gmail.com — blocked for all other addresses until domain is verified

## What's pending
- **Domain verification for `theroofstore.net` in Resend** — required to send to any customer email
- Domain registrar: **Porkbun** (porkbun.com)
- Steps: Resend dashboard → Domains → Add `theroofstore.net` → copy TXT records → paste into Porkbun DNS → click Verify

## Code details
- `from` address defaults to `onboarding@resend.dev` (env var `RESEND_FROM` overrides once domain is verified — set to `The Roof Store <leads@theroofstore.net>`)
- Lead destination: env var `LEADS_EMAIL` defaults to `ammakira5@gmail.com`
- Both `sendLeadEmail` and `sendAutoResponse` in `artifacts/api-server/src/lib/email.ts` use the same `RESEND_FROM` env var

**Why:** Resend silently drops emails to non-account addresses when the sending domain is unverified. `onboarding@resend.dev` is Resend's shared sender that bypasses this for the account owner's email only.
