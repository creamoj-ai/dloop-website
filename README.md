# 🚀 Dloop Website - Monorepo

Dloop ecosystem: Customer PWA, Dealer Landing, Rider App, Documentation

## 📁 Structure

```
dloop-website/
├── apps/
│   ├── landing/      # 🎯 Dealer recruitment landing page
│   ├── pwa/          # 📱 Customer marketplace PWA
│   └── rider/        # 🚴 Rider operations (Flutter)
├── docs/             # 📚 Documentation
└── README.md
```

## 🔗 Branches

- **main** - Base branch, monorepo structure
- **landing** - Dealer recruitment landing features
- **pwa** - Customer PWA features
- **rider** - Rider app features

## 🚀 Getting Started

### Landing Page (Dealer Recruitment)

```bash
cd apps/landing
npm install
npm run dev
# Opens http://localhost:3005
```

**Features:**
- Dealer signup form (/dealer/signup)
- Dealer dashboard (/dealer/dashboard)
- Email verification flow
- Supabase integration

### PWA (Customer Marketplace)

```bash
cd apps/pwa
npm install
npm run dev
# Opens http://localhost:3000
```

**Features:**
- Product catalog
- Shopping cart
- Checkout & payment
- Real-time order tracking

### Rider App

```bash
cd apps/rider
flutter pub get
flutter run
```

**Features:**
- Order queue
- Route optimization
- Real-time tracking
- Earnings dashboard

## 📊 Database

**Shared**: Supabase (aqpwfurradxbnqvycvkm)

Tables:
- `dealers` - Dealer accounts
- `pwa_orders` - Customer orders
- `products` - Product catalog
- `riders` - Rider accounts
- `whatsapp_conversations` - WhatsApp chat state

## 💬 WhatsApp Bot

**Number**: +39 328 185 4639 (Twilio)
**Features**: Order updates, dealer notifications, support chat

## 📈 Deployment

- **Landing**: https://dloop-landing.vercel.app
- **PWA**: https://dloop-pwa.vercel.app
- **Rider**: Google Play / Apple App Store

## 📋 Next Steps

- [ ] Custom domains (dloop-landing.it, dloop-pwa.it)
- [ ] Email integration (SendGrid/Resend)
- [ ] Auth middleware for dealer dashboard
- [ ] Product upload interface
- [ ] Payment integration (Stripe)

---

**Status**: 🟢 MVP Phase
**Last Updated**: 2026-03-01
