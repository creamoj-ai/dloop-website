# 🚀 Dealer Onboarding Flow - Complete Guide

## Architecture Overview

```
Dealer Flow:
1. Homepage → Signup Link
2. /dealer/signup → Registration Form
3. Email Verification → /api/dealers/verify?token=xxx
4. /dealer/dashboard → Dashboard Access
5. Product Upload → Orders → Earnings
```

---

## Database Schema

### dealers table
- `id` (UUID, PK)
- `business_name` (string, required)
- `owner_name` (string, required)
- `email` (string, unique, required)
- `phone` (string, required)
- `category` (enum: PET, GROCERY, ORGANIC, FASHION, OTHER)
- `address` (string, required)
- `city` (string, default: "Napoli")
- `postal_code` (string)
- `status` (enum: pending, verified, active, suspended)
- `email_verified` (boolean, default: false)
- `email_verified_at` (timestamp)
- `verification_token` (string, unique)
- `verification_token_expires_at` (timestamp, 24h expiry)
- `commission_percentage` (decimal, default: 3.0)
- `is_active` (boolean, default: false)
- `created_at` (timestamp)
- `updated_at` (timestamp)
- `metadata` (jsonb)

### dealer_products table
- `id` (UUID, PK)
- `dealer_id` (UUID, FK to dealers)
- `name` (string, required)
- `description` (text)
- `category` (string)
- `price` (decimal, required)
- `stock` (integer, default: 0)
- `is_in_stock` (boolean, default: true)
- `is_active` (boolean, default: true)
- `image_url` (string)
- `created_at` (timestamp)
- `updated_at` (timestamp)

---

## API Endpoints

### POST /api/dealers/signup
**Create new dealer account**

Request:
```json
{
  "business_name": "Piccolo Supermarket",
  "owner_name": "Mario Rossi",
  "email": "mario@supermarket.it",
  "phone": "+39 081 123 4567",
  "category": "GROCERY",
  "address": "Via Roma 123",
  "city": "Napoli",
  "postal_code": "80100"
}
```

Response (201):
```json
{
  "success": true,
  "message": "Registration successful! Check your email to verify your account.",
  "dealer_id": "uuid-here"
}
```

---

### GET /api/dealers/verify?token=xxx
**Verify email with token**

Response (redirect):
```
Redirects to: /dealer/dashboard
```

---

## Pages & Routes

### /dealer/signup
- Registration form for new dealers
- Validates all required fields
- Sends verification email (TODO)
- Success message with email confirmation

### /dealer/dashboard
- Protected dealer dashboard (TODO: Auth)
- Tabs: Overview, Products, Orders, Settings
- Stats: Total Orders, Earnings, Active Products, Rating
- Product upload interface (TODO)
- Order management (TODO)

### /dealer/verify
- Email verification page (TODO)
- Shows verification success/error
- Redirects to dashboard

---

## Implementation Progress

### ✅ Completed
- [x] Database schema (dealers + dealer_products tables)
- [x] API endpoint: POST /api/dealers/signup
- [x] API endpoint: GET /api/dealers/verify
- [x] Signup form page (/dealer/signup)
- [x] Dashboard page (/dealer/dashboard) - Basic UI
- [x] Homepage link to signup (/dealer/signup)

### ⏳ In Progress
- [ ] Email verification (SendGrid/Resend integration)
- [ ] Auth middleware for protected routes
- [ ] Product upload interface
- [ ] Order management system

### 📋 TODO
- [ ] Payment setup (stripe connect)
- [ ] Earnings tracking
- [ ] Rating/reviews system
- [ ] Analytics dashboard
- [ ] Multi-language support

---

## Email Templates (TODO)

### 1. Welcome Email
```
Subject: Benvenuto in Dloop! 🚀

Hi [Dealer Name],

Grazie per esserti registrato come dealer Dloop!

Clicca il link per verificare il tuo email:
[VERIFICATION_LINK]

This link expires in 24 hours.

Team Dloop
```

### 2. Order Notification
```
Subject: Nuovo Ordine Ricevuto! 📋

Hi [Dealer Name],

Hai un nuovo ordine da [Customer Name]!

Dettagli:
- Ordine #12345
- Totale: €42.50
- Consegna: [Address]

Accedi al dashboard per i dettagli.

Team Dloop
```

### 3. Earnings Report
```
Subject: Report Guadagni Settimanale 💰

Hi [Dealer Name],

Guadagni questa settimana: €250

Ordini: 15
Commissione (3%): -€7.50
Guadagni Netti: €242.50

Pagamento in transito sul tuo conto.

Team Dloop
```

---

## Environment Variables

```bash
# Required
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Email (one of)
SENDGRID_API_KEY=
RESEND_API_KEY=

# Optional
NEXT_PUBLIC_SUPPORT_EMAIL=
FROM_EMAIL=
```

---

## Testing Checklist

- [ ] Signup form validation
- [ ] Duplicate email detection
- [ ] Verification token generation
- [ ] Token expiry (24h)
- [ ] Email delivery (when integrated)
- [ ] Dashboard access (when auth added)
- [ ] Product upload flow
- [ ] Order notifications

---

## Next Phase: Email Integration

### Option A: SendGrid
```bash
npm install @sendgrid/mail
```

### Option B: Resend
```bash
npm install resend
```

Recommend **Resend** - simpler API, better TypeScript support

---

**Status**: 🟡 Core Signup Flow Complete - Awaiting Email Integration
**Last Updated**: 2026-03-01
**Next**: Integrate email service (SendGrid/Resend) for verification
