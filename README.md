# 🛒 Ecommerce-App

[![MIT License](https://img.shields.io/github/license/404notDeeksha/Ecommerce-App?style=flat-square)](https://github.com/404notDeeksha/Ecommerce-App/blob/main/License)
[![Deploy with Vercel](https://img.shields.io/badge/deploy%20with-vercel-100000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com/new/clone?repository-url=https://github.com/404notDeeksha/Ecommerce-App)
![Version](https://img.shields.io/badge/version-0.0.0-blue)
![Responsive](https://img.shields.io/badge/responsive-mobile%20%7C%20tablet%20%7C%20desktop-blue)

> A production-ready e-commerce frontend with cart management, JWT authentication, and persistent state — inspired by Amazon's UX patterns.

**[Live Demo](https://ecommerceapp-demo.vercel.app)** • **[Backend Repo](https://github.com/404notDeeksha/Ecommerce-App-Backend)**

---

## 🎯 Key Highlights

- ✅ **Full cart lifecycle** — Add, update, remove items with Redux Toolkit + persistence across sessions
- ✅ **JWT authentication flow** — Protected routes, secure login/signup with token refresh
- ✅ **Role-Based Access Control (RBAC)** — Admin panel with CRUD operations guarded by 3 roles and 4 granular permissions
- ✅ **Mobile-friendly responsive** — Tailwind CSS, works seamlessly on mobile/tablet/desktop
- ✅ **Production-ready DX** — Vite builds, Vitest testing, ESLint
- ✅ **Polished UX** — Framer Motion animations, toast notifications, error boundaries, skeleton loaders

---

## 🖼️ Screenshots

| Home Page | Product Page |
|----------|--------------|
| ![Home](./screenshots/home.png) | ![Product](./screenshots/product.png) |

| Products Grid | Cart |
|--------------|------|
| ![Products](./screenshots/productsgrid.png) | ![Cart](./screenshots/cart.png) |

---

## ⚡ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 18 + Vite |
| **Styling** | Tailwind CSS + MUI |
| **State** | Redux Toolkit + Redux Persist |
| **Routing** | React Router v6 |
| **API** | Axios with interceptors |
| **Animation** | Framer Motion |
| **Testing** | Vitest + React Testing Library |
| **Deployment** | Vercel |

---

## 📊 Performance & Engineering

- ⚡⚡ ***Optimized builds with Vite*** — Sub-second dev startup, code-split production bundles
- 🧪 ***Robust testing with Vitest*** — Unit & integration tests for critical user flows
- 💾 ***Persistent global state*** — Auth & cart retained via Redux Persist (localStorage)
- 🛡️ ***Resilient UI architecture*** — Error Boundaries + graceful fallbacks prevent full app crashes
- 🔐 ***Secure route protection + RBAC*** — `ProtectedRoute` for auth-guarded routes, `AdminGuard` with 3 roles and 4 granular permissions
- 🚀 ***Performance optimizations*** — Debounced API calls and optimized state updates reduce unnecessary re-renders
- 📦 ***Scalable frontend architecture*** — Modular, feature-based structure with reusable components & hooks

<details>
<summary><strong>Click to expand — Deep Dive</strong></summary>

---

## 📈 Impact & Metrics

- **17 RESTful API endpoints** across 4 modules (auth, products, cart, admin) with centralized axios interceptors for token injection and automatic error transformation
- **8 Redux slices** (auth, cart, error, loader, sidebar, overlay, location, language) with selective persistence — cart + auth survive page refresh via Redux Persist + localStorage
- **Dual-token JWT authentication** with hybrid memory + localStorage storage — access token in module-level memory (XSS-safe), refresh token in Redux Persist, with queue-based auto-refresh on 401 responses preventing concurrent refresh storms
- **Role-Based Access Control (RBAC)** with 3 roles (`admin`, `product_manager`, `user`) and 4 granular permissions (`product:create`, `product:read`, `product:update`, `product:delete`) — `AdminGuard` + `ProtectedRoute` enforce route-level and operation-level access
- **50+ reusable components** organized across layout (header with 14 sub-components, footer, sidebar), feedback (error boundaries, toasts, skeletons), and common (portal, overlay, popover) categories
- **Debounced filter search (500ms)** with URL-synced query parameters — users can share filtered + paginated product views directly via link
- **Admin product management panel** with full CRUD operations (create, update, delete) using MUI Dialogs, guarded by role-based permission hooks (`useHasPermission`, `useHasRole`, `useUserRole`)
- **5 unit/integration test suites** using Vitest + React Testing Library covering auth slice, error slice, error toast (auto-dismiss, aria attributes), error handler utilities, and 404 page
- **Mobile-responsive UI** with Tailwind CSS across 3 device breakpoints (mobile/tablet/desktop), with Framer Motion slide animations for sidebar and skeleton loaders eliminating layout shift
- **Vercel-managed CI/CD** with `vercel.json` build config, SPA routing rewrites, and preview deployments per pull request

---

## 🏗️ Architecture & Engineering Decisions

### State Management
- **Redux Toolkit** with slices pattern for cart, auth, errors, and UI state
- **Redux Persist** serializes state to localStorage — cart and auth survive refresh

### API Layer
- **Axios** with centralized interceptors for auth token injection
- Automatic token refresh on 401 responses (queue-based to prevent concurrent refresh)
- Dedicated `api/` modules: auth, products (search/filters/pagination), cart, admin (CRUD)
- Centralized error transformation across all API calls

### Authentication Flow
- JWT-based login/signup with protected routes
- **Hybrid token storage**: accessToken in memory (XSS-safe), refreshToken in Redux Persist
- Axios interceptor automatically attaches tokens to requests
- Auto-refresh on token expiry via interceptor
- `ProtectedRoute.jsx` guards prevent unauthorized access
- `AdminGuard.jsx` enforces role-based access (admin, product_manager) for admin routes

### UI/UX Engineering
- **Framer Motion** for smooth page transitions and micro-interactions
- **Mobile-first** Tailwind classes for responsive layouts
- Toast notifications provide real-time feedback
- Skeleton loaders eliminate layout shift during data fetches

### Testing Strategy
- **Vitest** for fast unit tests
- **React Testing Library** for component integration tests
- 5 test suites covering: auth slice, error slice, error toast (auto-dismiss, aria attributes), error handler utilities, 404 page

---

## 🚧 Challenges Solved

| Challenge | Solution |
|-----------|----------|
| **State loss on refresh** | Redux Persist persists cart + auth in localStorage |
| **Protected route bypass** | `ProtectedRoute.jsx` enforces auth checks before render |
| **UI flickering** | Skeleton loaders + error boundaries + toast feedback |
| **API error inconsistency** | Centralized error slice normalizes all API failures |
| **Cart not loading after login** | Fixed race condition — backend extracts userId from JWT |

---

## 📂 Project Structure

```
src/
├── api/
│   ├── admin/products.js     # Create, update, delete products
│   ├── auth/index.js         # Signup, email auth, password auth, logout
│   ├── cart/index.js         # Add, get, update quantity, delete cart items
│   ├── products/index.js     # Get carousel, list, filter, single product
│   └── axiosInstance.js      # Axios setup + interceptors (auth token, refresh)
├── assets/
│   └── images/               # Static images (flag, logos, etc.)
├── components/
│   ├── common/               # Overlay, Portal, PopoverBox, NotFound, ScrollToTop, LoaderData
│   ├── feedback/             # ErrorBoundary, ErrorToast, Skeleton
│   └── layout/
│       ├── footer/           # Main footer, top navigation, connections, other services, terms footer
│       ├── header/           # MainHeader, SecondaryHeader, SearchBar, CartLogo, AccountMenu, DeliveryLocation, LanguageSelection, etc.
│       └── sidebar/          # Sidebar, Navbar, Categories
├── config/                   # App configuration (routes, constants)
├── hooks/                    # useAuth, useCart, useDebounce, useHasRole
├── pages/
│   ├── Admin/
│   │   ├── AdminLayout.jsx   # Admin page wrapper
│   │   └── AdminProducts.jsx # Product CRUD with RBAC
│   ├── Auth/
│   │   ├── LoginPage/        # Email auth, password auth, popup login
│   │   └── SignupPage/       # User registration
│   ├── CartPage/
│   │   └── components/       # ShoppingCartItems, EmptyCartPage, Skeletons
│   ├── HomePage/
│   │   ├── components/       # Slider, CategoryGridCarousel, MultiCardCarousel, Skeletons
│   │   └── data/             # Category grid data
│   ├── Info/                 # AboutUs, Privacy, TermsConditions
│   ├── ProductPage/
│   │   ├── components/       # Product detail skeleton
│   │   └── utils/            # Currency formatting
│   └── ProductsPage/
│       └── components/       # ProductCard, Pagination, Skeletons
├── redux/
│   ├── slices/               # auth, cart, error, loader, sidebar, overlay, location, language
│   └── store.js              # Redux store + persist config
├── routes/                   # appRoutes.jsx, ProtectedRoute.jsx, AdminGuard.jsx
├── styles/                   # Global Tailwind styles
├── test/                     # Vitest test suites + setup
└── utils/                    # authTokens, errorHandler, commonUtils, commonConsts
```

---

## 🚀 Getting Started

```bash
# Clone
git clone https://github.com/404notDeeksha/Ecommerce-App.git

# Install
npm install

# Dev server
npm run dev
```

### Environment Variables

Create `.env` based on `.env.example`:

```bash
# Base API URL for backend
# In development: Use http://localhost:8000/api
# In production: Set this to your deployed backend URL
VITE_BASE_URL=
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview build |
| `npm run test` | Run tests (watch) |
| `npm run test:run` | Run tests once |

---

## 🧠 Learnings

### JWT Token Storage — Memory + Redux Persist Hybrid

Instead of storing JWTs in **httpOnly cookies** (the recommended production approach), this app uses a **hybrid memory + localStorage** strategy:

- **accessToken** → stored in a JavaScript module-level variable (memory). Attached to every API request via axios interceptors. Short-lived (~15 min). Dies on page close — invisible to XSS.
- **refreshToken** → stored in Redux, persisted to localStorage via Redux Persist. Used to obtain new access tokens on expiry.

**Why not httpOnly cookies?**

httpOnly cookies are the gold standard for production apps — they're immune to XSS and ideal for high-stakes applications. However, they introduce **CORS complexity** that can be difficult to manage when the frontend and backend are on different origins (e.g., dev at `localhost:3000` vs production at `vercel.app` and `render.com`). For portfolio/side projects where you're iterating fast across multiple hosting platforms, managing `Access-Control-Allow-Origin` headers, `SameSite` policies, and credential flags on every environment becomes a significant time sink. The hybrid approach gives you the same security guarantees for a short-lived access token while avoiding cross-origin deployment headaches entirely — a pragmatic trade-off that you still see in industry applications, particularly SPAs and internal tools.

---

## 🔮 Upcoming Features

- [ ] Brand/price filters
- [ ] Checkout + payment integration
- [ ] Order history & tracking
- [ ] Product reviews & ratings
- [ ] Wishlist
- [ ] i18n (Redux slice ready)
- [ ] CI/CD pipeline on Vercel

---

## 📄 License

MIT — see [LICENSE](./LICENSE)

## 👤 Connect

- [GitHub](https://github.com/404notDeeksha) • [LinkedIn](https://www.linkedin.com/in/deek1995) • deeksha.developer@proton.me

</details>

---

*Built with React, Tailwind CSS & Vite — deployed on Vercel*