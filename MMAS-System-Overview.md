# MMAS — Complete System Overview
### Media Management & Accreditation System · Ministry of Information, Culture & Tourism (Somalia)
Built by Senad Solutions · Prototype

Everything starts at one **login / portal chooser** page (`MMAS-portals.html`) that routes to the three portals below. Design system shared across all three: Ministry sky‑blue palette, the crest logo, Plus Jakarta Sans, and green / amber / red status colours.

---

## PORTAL 1 — PUBLIC PORTAL (`public-portal.html`)
*For journalists, media houses & foreign crews. Mobile‑first. Three account types: Individual Journalist · Media House · Foreign Media.*

**Pages (16 core + extras):**
1. **Landing** — hero, service cards, "How it works", **Fees & Requirements**, **FAQ**, **Contact**, EN/SO language switch, Login / Sign Up / Verify a Card.
2. **Sign Up** — account type + details → OTP → account created → auto‑login.
3. **Login** — email/phone + password, forgot‑password flow.
4. **Dashboard** — stat cards, **role‑based quick actions**, recent activity, notifications bell.
5. **Apply – Press Card** — 3‑step wizard (details → uploads with image cropper → fee).
6. **Apply – Media License** — wizard (TV/Radio/Print/Online).
7. **Apply – Foreign Permit** — wizard with **dynamic Equipment list + Team list**.
8. **Payment** — EVC Plus / Mobile Money → receipt.
9. **My Applications** — filters + status badges.
10. **Application Detail** — status timeline, **Re‑apply** (if rejected), rejection reason.
11. **My Digital Wallet** — cards/licenses with status, **Renew**.
12. **Card Detail** — large digital card, **QR code**, download, save to phone.
13. **Events** — public events page + in‑portal events, capacity ("X / Y spots"), Register.
14. **Event Pass** — QR ticket, add to calendar.
15. **Notifications** — grouped, mark read, delete.
16. **Profile & Settings** — personal info, security, preferences, logout.

**Extras:** Public Events page · Verify‑a‑Card · **My Journalists / My Crew** (team page) · Save Draft · Re‑apply prefill · full data persistence · event **capacity enforcement**.

---

## PORTAL 2 — ADMIN PORTAL (`admin-portal.html`)
*For Ministry staff. Desktop. Role‑based: **Reviewer** (limited) vs **Super Admin** (everything).*

**Pages (12 core + additions):**
1. **Staff Login** — real staff accounts (demo: `admin@ministry.gov.so / admin123`).
2. **Dashboard** — 4 stat cards, charts, quick tables.
3. **Applications Inbox** — filters (type/status/date/search), sortable + paginated, **Account type** column, Review per row.
4. **Application Review** — **split‑screen** (documents + details), **Approve / Reject / Request Info**, Equipment + Team (foreign), **"Staff activity on this application"** panel (Super Admin only).
5. **Cards & Licenses** — search/filter, **Suspend / Reactivate / Cancel** (with reason).
6. **Fees & Payments** — edit fees, revenue summary, transactions, **Export CSV**, receipts.
7. **Fraud Reports** *(Super Admin)* — reports from Verify + **automatic fraud alerts**; detail view with suspect **photo, phone, ID/NIRA, location (map link), event**; Mark reviewed.
8. **Events Management** — Create/Edit event, **capacity** (+ can't shrink below registered), **check‑in mode per event (Public / Staff / Both)**, Manage Attendees (named list), **Door Check‑in Mode** (QR scan, live stats, no duplicates).
9. **Records Database** — global search, **full‑profile side drawer** (cards + application history).
10. **Reports & Statistics** — charts, **Generate Report** (preview), **Export CSV / PDF**.
11. **Users & Roles** *(Super Admin)* — **create / edit / delete staff**, roles, last login, search + filters, safety rules (can't delete self or last Super Admin).
12. **Activity Log** — audit table (user, action, target, time, IP), filters, **Export CSV**.

**Role rule:** Reviewer sees only Dashboard, Inbox/Review, Records. Super Admin sees all.

---

## PORTAL 3 — VERIFICATION PORTAL (`verify-portal.html`)
*For police & public. Mobile‑first. **No login.** Camera‑first, traffic‑light results.*

**Scan page:** live camera viewfinder, scan brackets + line, **flashlight**, manual entry, and a **Press card / Event pass** toggle.

**Press‑card results (live data):**
- ✅ **Valid** (green) — holder details, issue + expiry dates, "Issued by the Ministry".
- ⚠️ **Expired** (amber) · 🚫 **Suspended** (red) · ❌ **Not recognized / fake** (dark red).
- Reflects admin changes live (suspend a card → shows Suspended instantly).

**Event‑pass results:**
- ✅ **Valid / Checked in** — for **Public/Both** events it **auto‑checks the person in** (no login).
- ⚠️ **Already checked in** — same pass twice.
- ⛔ **Not registered** · ❌ **Invalid / fake**.
- For **Staff‑only** events it just verifies (check‑in done by admin staff).

**Fraud reporting:** "Report suspicious card/pass" → form with **photo of the person, phone, ID/NIRA, note, location** → lands in Admin **Fraud Reports**. Plus **automatic alerts** on every fake scan.

**Demo codes:** cards `1234` valid · `2345` expired · `3456` suspended · `5678` fake. Event passes `EVT-2026-001` valid · `EVT-2026-999` not registered.

---

## HOW THE PORTALS CONNECT (shared data)
All three share data so a change in one shows in the others:
- Public **applies** → Admin **Inbox** (with account type, equipment/team).
- Admin **approves** → Public sees **Approved** + **card in wallet** + **notification**.
- Admin **rejects** → Public sees **Rejected + reason**.
- Admin **suspends / reactivates / cancels** card → Public wallet + **Verify portal** update.
- Admin **changes a fee** → Public shows new fee.
- Public **pays** → Admin **Payments**.
- Admin **creates event** → Public **Events**; Public **registers** → Admin **attendees**.
- **Check‑in** (Verify app or Admin staff) → same live attendance count.
- Verify **fraud report / auto‑alert** → Admin **Fraud Reports**.
- Public **signup** → Admin **Records**.
- Every admin action → **Activity Log**.

---

## What is real vs. what needs a backend
This is a **frontend prototype** — clickable and fully connected, but data lives in the browser (localStorage) and syncs on one machine. Before launch, the engineering team wires the real backend: secure logins & passwords, SMS/OTP, EVC Plus payments, secure file storage, **signed/scannable QR codes**, email/SMS alerts, and one shared database. Full checklist in **`Portal1-Backend-Handover.md`**.

## Files in this folder
`MMAS-portals.html` (login chooser) · `public-portal.html` · `admin-portal.html` · `verify-portal.html` · `logo.png` · `Portal1-Backend-Handover.md` · `MMAS-Portals-Plan.md` · `MMAS-System-Overview.md` (this file).
