# 🚀 MVP Project - Cross-Platform Payment & Crypto Platform

A complete full-stack application supporting React/React Native with Express.js backend, featuring comprehensive payment integration (fiat and cryptocurrency) and a modern glassmorphism UI design system.

## 🎯 **Project Overview**

- **Frontend**: React (Web/Telegram) + React Native (Mobile)
- **Backend**: Express.js + Prisma + PostgreSQL
- **UI System**: Mantine v8 with custom theme variants
- **Payments**: Stripe + Cryptocurrency wallets
- **Authentication**: Biometric + traditional auth flows
- **Architecture**: TypeScript monorepo with shared business logic

## 🏗️ **Project Structure**

```
mvp-project/
├── packages/
│   ├── api/              # Express.js + Prisma backend
│   ├── mobile/           # React Native app (iOS/Android)
│   ├── ui/               # React UI components + themes
│   └── shared/           # Common TypeScript utilities
├── package.json          # TurboRepo configuration
├── pnpm-workspace.yaml   # pnpm workspace setup
└── turbo.json           # Build pipeline configuration
```

## ✨ **Key Features**

### 🎨 **Universal Theme System**
- **4 Theme Variants**: Glassmorphism, Corporate, Dark Mode, Neon Cyberpunk
- **Full Light/Dark Mode** support with instant switching
- **Responsive Design**: Adapts to all screen sizes and platforms
- **Telegram Mini App Optimized**: Compact, expanded, and fullscreen modes

### 💳 **Payment Integration**
- **Stripe Integration**: Credit/debit card payments
- **Cryptocurrency Support**: Web3 wallet connections
- **Multi-currency**: Fiat and crypto payment options
- **Transaction Management**: Complete payment flow handling

### 🔐 **Authentication System**
- **Biometric Authentication**: TouchID/FaceID support
- **Silent Auth Flows**: Seamless user experience
- **Secure Token Management**: JWT with refresh rotation
- **Multi-platform Support**: Consistent across all platforms

### 📱 **Cross-Platform Support**
- **Telegram Mini Apps**: Full integration with Telegram ecosystem
- **Web Applications**: Responsive dashboard and admin panels
- **Mobile Apps**: React Native for iOS and Android
- **90%+ Code Sharing**: Business logic shared across platforms

## 🚀 **Quick Start**

### Prerequisites
- Node.js 18+
- pnpm 9+
- Git

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd mvp-project

# Install dependencies
pnpm install

# Start development servers
pnpm dev
```

### Individual Package Development

```bash
# Backend API
cd packages/api
pnpm dev

# UI Components (React)
cd packages/ui  
pnpm start

# Mobile App
cd packages/mobile
pnpm start
```

## 📦 **Available Packages**

### `@mvp/api` - Backend API
- **Express.js** server with TypeScript
- **Prisma ORM** with PostgreSQL
- **Authentication** endpoints
- **Payment processing** (Stripe + Crypto)
- **RESTful API** with standardized responses

### `@mvp/ui` - React UI System
- **Mantine v8** component library
- **4 theme variants** with instant switching
- **Responsive layouts** and constraints
- **Navigation system** (adaptive for web/Telegram)
- **Complete component showcase**

### `@mvp/mobile` - React Native App
- **Expo SDK 53** for iOS/Android
- **Cross-platform** business logic
- **Native authentication** (biometric)
- **Payment integration** (Stripe + Web3)

### `@mvp/shared` - Common Utilities
- **TypeScript types** and interfaces
- **API constants** and configurations
- **Validation schemas** (Zod)
- **Utility functions**

## 🎨 **Theme System Usage**

```tsx
import { MVPThemeProvider, useThemeSwitcher } from '@mvp/ui';

function App() {
  return (
    <MVPThemeProvider initialVariant="glassmorphism">
      <YourApp />
    </MVPThemeProvider>
  );
}

function ThemeControls() {
  const { switchToGlassmorphism, toggleColorScheme } = useThemeSwitcher();
  
  return (
    <>
      <Button onClick={switchToGlassmorphism}>Glass Theme</Button>
      <Button onClick={toggleColorScheme}>Toggle Dark Mode</Button>
    </>
  );
}
```

## 📱 **Platform-Specific Features**

### Telegram Mini Apps
- **Auto-detection** of Telegram environment
- **Safe area handling** for UI boundaries
- **Compact/Expanded/Fullscreen** mode support
- **WebApp API integration** for native features

### Web Applications
- **Responsive breakpoints** (320px - 1440px)
- **Sidebar navigation** for desktop
- **Progressive Web App** ready
- **SEO optimized** components

### Mobile Native
- **Biometric authentication** (TouchID/FaceID)
- **Native navigation** patterns
- **Performance optimized** for mobile devices
- **Offline support** capabilities

## 🛠️ **Development Scripts**

```bash
# Development
pnpm dev              # Start all packages in development
pnpm mobile           # Start mobile app only
pnpm api              # Start backend API only

# Building
pnpm build            # Build all packages for production
pnpm type-check       # TypeScript validation across packages

# Database
pnpm db:studio        # Open Prisma Studio (database GUI)
pnpm db:push          # Push schema changes to database
pnpm db:migrate       # Create database migrations
```

## 🔧 **Configuration**

### Environment Variables
Create `.env` files in respective packages:

```bash
# packages/api/.env
DATABASE_URL="postgresql://..."
JWT_SECRET="your-secret"
STRIPE_SECRET_KEY="sk_..."
SUPABASE_URL="https://..."
```

### Database Setup
```bash
cd packages/api
pnpm db:push          # Initialize database schema
pnpm db:studio        # Open database management interface
```

## 🚀 **Deployment**

### Backend (Fly.io)
```bash
cd packages/api
fly deploy
```

### Mobile (Expo)
```bash
cd packages/mobile
npx eas build --platform all
```

### Web (Vercel/Netlify)
```bash
cd packages/ui
pnpm build
# Deploy build folder to your preferred platform
```

## 📋 **Project Status**

### ✅ **Completed**
- [x] Monorepo foundation with TurboRepo
- [x] Complete React UI system with Mantine
- [x] 4 theme variants with light/dark mode
- [x] Responsive design system
- [x] Navigation system (web + Telegram)
- [x] Backend API foundation
- [x] Database schema with Prisma
- [x] TypeScript integration across packages

### 🚧 **In Progress**
- [ ] Payment integration (Stripe + Crypto)
- [ ] Authentication system implementation
- [ ] React Native mobile app development
- [ ] Deployment infrastructure setup

### 🔮 **Planned**
- [ ] Biometric authentication
- [ ] Push notifications
- [ ] Real-time features
- [ ] Advanced analytics
- [ ] Multi-language support

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 **Acknowledgments**

- **Mantine** for the excellent React components library
- **Prisma** for the powerful database toolkit
- **Expo** for simplifying React Native development
- **TurboRepo** for efficient monorepo management

---

**🔗 Links:**
- [Documentation](./docs/)
- [API Reference](./packages/api/README.md)
- [Component Library](./packages/ui/README.md)
- [Deployment Guide](./docs/deployment.md)

**📧 Contact:** [your-email@example.com]