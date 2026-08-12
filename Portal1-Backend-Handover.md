# MMAS — Public Portal (Portal 1)
## Backend Integration Handover Checklist

**Prepared for:** Backend Engineering Team
**Scope:** Everything in the Public Portal frontend prototype that is currently **simulated on the client** and must be wired to real backend services before production.

Legend: 🔴 = critical / blocking for launch · 🟡 = important · 🟢 = enhancement

---

### 1. Authentication & Identity 🔴
| # | Feature | Frontend today | Backend needed |
|---|---------|----------------|----------------|
| 1.1 | Sign up | Local form + client validation | User registration API, unique email/phone check, password hashing, account persistence |
| 1.2 | Login / sessions | Any credentials accepted | Auth endpoint, JWT/session tokens, refresh, "remember me" |
| 1.3 | OTP verification | Any 6 digits pass | **SMS OTP provider** (e.g. Hormuud/Somtel gateway or Twilio), code generation, expiry (30s resend), rate-limiting |
| 1.4 | Forgot password | Modal flow only | Reset-token email/SMS, secure token expiry, password update endpoint |
| 1.5 | Field validation | Email/phone regex client-side | Server-side re-validation (never trust client) |

### 2. Applications & Workflow 🔴
| # | Feature | Frontend today | Backend needed |
|---|---------|----------------|----------------|
| 2.1 | Submit Press Card / License / Foreign Permit | Builds an object in memory | Create-application API, persistence, unique application IDs |
| 2.2 | Status lifecycle | Hardcoded statuses | State machine: Submitted → Under Review → Approved/Rejected; timestamps; audit trail |
| 2.3 | Rejection reason | Static demo text | Store/return reviewer's reason; link to re-apply |
| 2.4 | Application list & filters | Static array | Paginated, filterable query endpoint (by type/status/date) |

### 3. Document Uploads 🔴
| # | Feature | Frontend today | Backend needed |
|---|---------|----------------|----------------|
| 3.1 | Photo / ID / passport / letter upload | Simulated progress bar, no real file | **Secure cloud storage** (S3-compatible), signed upload URLs, virus scanning, size/type limits |
| 3.2 | Image cropper (photo) | UI only | Persist cropped output; generate print-ready and thumbnail sizes |
| 3.3 | Document retrieval | N/A | Access-controlled signed download URLs for admin review |

### 4. Payments 🔴
| # | Feature | Frontend today | Backend needed |
|---|---------|----------------|----------------|
| 4.1 | Pay fee (EVC Plus / mobile money) | Simulated "processing" then success | **Real payment gateway integration** (EVC Plus / Waafi / mobile-money API), init + callback/webhook, idempotency |
| 4.2 | Transaction record | Random demo IDs | Store real transaction IDs, reconcile with provider, handle failed/pending states |
| 4.3 | Digital receipt | Rendered on client | Server-generated receipt (PDF), stored + emailed |
| 4.4 | Fee amounts | Hardcoded ($30/$150/$200) | Fees pulled from Admin-configured values (see Admin Portal Fees module) |

### 5. Digital Wallet & Cards 🔴
| # | Feature | Frontend today | Backend needed |
|---|---------|----------------|----------------|
| 5.1 | Issue digital card/license on approval | Static demo cards | Card record generation, unique card numbers, issue/expiry dates |
| 5.2 | **QR codes** | Decorative pattern only | **Dynamic, signed QR generation** encoding a verifiable token/URL; tamper-proof (signed payload) |
| 5.3 | Public verification (Verify-a-Card) | Static "Valid" result | Real lookup endpoint returning live status (Active/Expired/Suspended) from card scan |
| 5.4 | Save to phone wallet | Toast only | Apple Wallet (.pkpass) + Google Wallet pass generation & signing |
| 5.5 | Download PDF | Toast only | Server-rendered card PDF |
| 5.6 | Renew card | UI → payment flow | Renewal endpoint, new expiry, links to real payment |

### 6. Government Events 🟡
| # | Feature | Frontend today | Backend needed |
|---|---------|----------------|----------------|
| 6.1 | Event list | Static array | Events API (shared with Admin Events module) |
| 6.2 | Register for event | Sets a flag | Registration record, capacity enforcement |
| 6.3 | Event pass QR | Decorative | Signed QR pass; check-in validation endpoint |
| 6.4 | Add to calendar | Toast only | Generate .ics file |

### 7. Notifications & Alerts 🔴
| # | Feature | Frontend today | Backend needed |
|---|---------|----------------|----------------|
| 7.1 | In-app notifications | Static list | Notifications service + per-user feed, read/unread state |
| 7.2 | **Automatic SMS alerts** | Not present | SMS triggers on approve/reject/expiry (SMS provider) |
| 7.3 | **Automatic email alerts** | Not present | Transactional email service (e.g. SES/SendGrid) with templates |
| 7.4 | Expiry reminders | Not present | Scheduled job (cron) to detect cards nearing expiry and notify |

### 8. Profile & Settings 🟡
| # | Feature | Frontend today | Backend needed |
|---|---------|----------------|----------------|
| 8.1 | Edit profile | UI only | Update-profile endpoint |
| 8.2 | Change password | UI only | Secure password-change endpoint (verify current) |
| 8.3 | Language EN/SO | Label toggle only | Full i18n: Somali translations for every screen + server locale preference |

### 9. Cross-Cutting / Platform 🔴
| # | Concern | Backend needed |
|---|---------|----------------|
| 9.1 | Security | HTTPS, CSRF/XSS protection, input sanitization, RBAC, encryption at rest for PII/passports |
| 9.2 | Audit logging | Every state change recorded (feeds the Admin Activity Log) |
| 9.3 | Data protection | Compliance with Somalia Data Protection Act 2023 (consent, retention, access) |
| 9.4 | Backups & recovery | Automated DB backups, disaster recovery |
| 9.5 | Rate limiting & anti-abuse | On auth, OTP, payment, upload endpoints |
| 9.6 | API layer | REST/GraphQL contract shared with the frontend; environment configs |

---

### Priority summary for launch
**Must-have (🔴) before go-live:** Auth + OTP SMS, application persistence & workflow, secure file storage, real payment gateway, card issuance + signed QR + public verification, SMS/email alerts, security & audit logging.

**Can follow (🟡/🟢):** phone-wallet passes, .ics calendar, full Somali translation, advanced event capacity rules.

---

## Post-QA decisions (Public Portal)

**Fixed in the frontend (no backend needed):**
- **Save Draft** now persists wizard state to `localStorage` and restores it when the user returns. *(For production, drafts should also sync server-side so they follow the user across devices.)*
- **Re-apply** on a rejected application now pre-fills the wizard with the original submission.
- **Wizard → Application Detail persistence:** submitted wizard inputs (name, ID, nationality, outlet) are now stored on the application record and shown on the detail page. *(In production these come from the database instead of client memory.)*

**Deferred to backend / i18n phase:**
- **Issue 1 — Full Somali translation (i18n).** The EN/SO toggle currently switches the highlight only; translating every screen is a backend/i18n task (see Section 8.3). For the CEO demo the toggle is sufficient.
- **Issue 4 — Demo event naming.** "National Media Forum 2026" vs "National Media Summit 2026" is cosmetic; real events come from the Events API.

**Intentional design (keep as-is):**
- **Auto-login after signup.** After account creation the user is taken straight into the dashboard rather than back to the login page. This is the modern standard (Gmail/Facebook) and is intended behavior, not a bug.
