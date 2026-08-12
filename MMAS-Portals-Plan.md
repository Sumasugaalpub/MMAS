# MMAS — Media Management & Accreditation System
## Complete Plan for All Three Portals

**Project:** Ministry of Information, Culture & Tourism (Wasaaradda Warfaafinta Dhaqanka & Dalxiiska), Somalia
**Built by:** Senad Solutions
**What it is:** One platform for journalist accreditation, media licensing, foreign media/film permits, government events, payments, and public card verification.

---

## The big picture — 3 portals + 1 login

Everything starts at a single **login/portal chooser page** (`MMAS-portals.html`). From there the user picks which portal to enter:

| Portal | Who it's for | File |
|---|---|---|
| **1. Public Portal** | Journalists, media houses, foreign crews | `public-portal.html` |
| **2. Admin Portal** | Ministry staff (review, approve, manage) | `admin-portal.html` |
| **3. Verification Portal** | Police & public (scan/verify a card) | `verify-portal.html` |

The design system is shared across all three: Ministry sky-blue palette, the crest logo, Plus Jakarta Sans font, green = success, amber = warning, red = error.

---

## PORTAL 1 — PUBLIC PORTAL (the applicant)
*Responsive, mobile-first. Desktop: left sidebar. Mobile: bottom nav + hamburger.*

**Three account types** (chosen at signup): Individual Journalist · Media House · Foreign Media. The dashboard **quick actions are filtered by type**:
- Individual Journalist → Press Card, Events
- Media House → Media License, Press Card, Events
- Foreign Media → Foreign Permit, Press Card, Events

### The 16 pages / features
1. **Landing page** — hero, 4 service cards (Press Card, License, Permit, Events), "How it works" (3 steps), footer, EN/SO language switch, Login / Sign Up / Verify a Card.
2. **Sign Up** — account type + name, phone, email, password → **OTP modal** (6-digit + resend timer) → "Account created" → auto-login. *(Email/phone format is validated.)*
3. **Login** — phone/email + password, "Forgot password?" (email → OTP → new password).
4. **Dashboard** — welcome header, 3 stat cards (Active Cards, Pending Applications, Expiring Soon), role-based quick actions, recent activity table, notifications bell + dropdown.
5. **Apply — Press Card** (3-step wizard) — details → uploads (photo w/ **image cropper**, ID, employer letter) → fee → Submit & Pay. *(Required fields and required uploads are enforced.)*
6. **Apply — Media License** (wizard) — type (TV/Radio/Print/Online), outlet name, owner, address, contact, upload docs → pay.
7. **Apply — Foreign Permit** (wizard) — passport, reason, locations, **dynamic Equipment list** (add/remove rows), **dynamic Team list** (add/remove rows), schedule → pay.
8. **Payment** — order summary, method (EVC Plus / Mobile Money), phone, Confirm → processing spinner → **success receipt** (Receipt ID + transaction) → View Application.
9. **My Applications** — table with filters (type, status), status badges (Submitted=blue, Under Review=yellow, Approved=green, Rejected=red), View per row.
10. **Application Detail** — status timeline with dates, applicant details, uploaded documents; **Download Card** (if approved), **Re-apply** (if rejected — pre-fills the wizard), rejection-reason modal.
11. **My Digital Wallet** — cards/licenses as ID-card visuals with status (Active/Expired/Suspended), expiry; View details; **Renew** (→ payment) for expiring/expired.
12. **Card Detail** — large digital card, QR code, full details (name, photo, outlet, blood group, expiry), Download PDF, Save to Phone Wallet.
13. **Events** — upcoming events grid; Register → confirm modal.
14. **Event Pass** — ticket design with large QR, event info, check-in status, Download / Add to Calendar.
15. **Notifications** — grouped by date, types (approved / rejected / expiring / event), Mark all as read, delete.
16. **Profile & Settings** — tabs: Personal Info, Security (change password), Preferences (EN/SO); Logout with confirm modal.

### Extras added during QA
- **Save Draft** persists the wizard to the browser and restores it when you return.
- **Re-apply** pre-fills the wizard from the rejected application.
- Submitted wizard data (name, ID, nationality, outlet) is stored on the application and shown on its detail page.

---

## PORTAL 2 — ADMIN PORTAL (Ministry staff)
*Desktop-only. Fixed dark-navy left sidebar + top header (search, notifications, user, role switcher).*

**Role-based UI:** a **Reviewer** sees only Dashboard, Applications Inbox and Records; a **Super Admin** sees everything (Fees, Users, Activity Log, etc.).

### The 12 pages
1. **Staff Login** — Ministry email + password + demo role (Super Admin / Reviewer).
2. **Dashboard** — 4 stat cards (Pending, Approved, Rejected, Total Revenue), charts (applications over time, revenue), quick tables (today's new applications, expiring soon).
3. **Applications Inbox** — advanced filters (type, status, date range), sortable + sticky + paginated data table, Review per row.
4. **Application Review** — **split-screen**: left = document viewer with zoom + thumbnails; right = applicant details, timeline, and **Approve / Reject / Request Info** (reject and request-info require a written reason).
5. **Cards & Licenses Management** — search, table, actions menu: **Suspend / Reactivate / Cancel** (require a reason).
6. **Fees & Payments** — tabs: Fees Settings (edit each service fee) + Payments & Revenue (summary cards, transactions table, View Receipt, Export CSV).
7. *(Payments — covered by the Fees & Payments tab above.)*
8. **Events Management** — events table, Create Event (modal), Manage Attendees.
9. **Records Database** — global search of journalists/outlets; **Full Profile side-drawer** (all cards + application history for that person).
10. **Reports & Statistics** — filters, charts (by month, by type, outcomes), Generate Report, Export PDF.
11. **Users & Roles** — staff table, Add/Edit staff (name, email, role: Reviewer/Approver/Super Admin), Deactivate/Activate.
12. **Activity Log** — audit table (user, action, target, timestamp, IP), date filters, Export.

---

## PORTAL 3 — VERIFICATION PORTAL (police & public)
*Mobile-first, no login. Camera-first, high-contrast "traffic-light" results.*

### The 4 views
1. **Scan Page** — camera viewfinder (opens on load) with scan brackets + animated line, "Scan card" button, and a **manual card-number entry** fallback.
2. **Result — Valid** — green banner + check, holder photo & details, "Issued by the Ministry" badge, Scan Another / Home.
3. **Result — Expired / Suspended** — amber (expired) or red (suspended) banner + warning, holder details.
4. **Result — Not Found / Fake** — red error banner, explanation, "Report it" action.

Try codes: `PC-2026-1042` (valid) · `PC-2024-0771` (expired) · `PC-2025-0620` (suspended) · anything else (not found).

---

## What's real vs. simulated (prototype)

These portals are a **frontend prototype** — clickable and complete to look at, but data lives in the browser. The parts that need a backend before launch (real SMS/OTP, EVC Plus payments, secure file storage, scannable signed QR codes, email/SMS alerts, database) are all listed in **`Portal1-Backend-Handover.md`** for the engineering team.

---

## Files in this folder
- `MMAS-portals.html` — the login / portal chooser (routes to all three)
- `public-portal.html` — Portal 1
- `admin-portal.html` — Portal 2
- `verify-portal.html` — Portal 3
- `logo.png` — the Ministry crest used across all portals
- `Portal1-Backend-Handover.md` — backend integration checklist
- `MMAS-Portals-Plan.md` — this document

## Suggested CEO demo order
1. **Public Portal** — sign up → apply for a Press Card (upload, pay) → track it → open the digital card with QR → register for an event.
2. **Admin Portal** — open the inbox → Review an application (split-screen) → Approve → find the person in Records.
3. **Verification Portal** — enter `PC-2026-1042` → green "Valid"; then `PC-2024-0771` → amber "Expired".
