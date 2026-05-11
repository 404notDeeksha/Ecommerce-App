# Architecture Diagrams (Text Format)

## 1. System Context Diagram (C4 Level 1)

```
                          ┌─────────────────────────────────────┐
                          │         E-Commerce System           │
                          └─────────────────────────────────────┘

  ┌──────────────┐          ┌──────────────────┐          ┌──────────────────┐
  │              │  HTTPS   │                  │  HTTPS   │                  │
  │    User      ├─────────►│  Frontend SPA    ├─────────►│  Backend API     │
  │  (Browser)   │          │  (React + Vite)  │          │  (Express/REST)  │
  │              │◄─────────┤                  │◄─────────┤                  │
  └──────────────┘  HTML/   └────────┬─────────┘  JSON    └────────┬─────────┘
              JS/CSS                  │                             │
                                      │                             │
                                      │ served from                 │ connects to
                                      ▼                             ▼
                              ┌────────────────┐           ┌──────────────────┐
                              │    Vercel      │           │   MongoDB Atlas  │
                              │   (CDN/Edge)   │           │   (Database)     │
                              └────────────────┘           └──────────────────┘
```

---

## 2. Container Diagram (React App Internals)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          React Application                                   │
│                                                                             │
│  ┌─────────────┐      ┌─────────────────┐      ┌──────────────────────┐    │
│  │   main.jsx  │─────►│    App.jsx      │─────►│   BrowserRouter      │    │
│  │  (Providers)│      │   (App Shell)   │      │   (React Router v6)  │    │
│  └─────────────┘      └─────────────────┘      └──────────┬───────────┘    │
│       │                                                    │                │
│       │ wraps                                              │ renders        │
│       ▼                                                    ▼                │
│  ┌─────────────┐                                    ┌──────────────────┐   │
│  │  Redux      │                                    │   AppRoutes      │   │
│  │  Provider   │                                    │  (Route Config)  │   │
│  └──────┬──────┘                                    └────────┬─────────┘   │
│         │                                                    │              │
│         ▼                                                    ▼              │
│  ┌──────────────────┐                              ┌──────────────────┐    │
│  │  Redux Store     │                              │     Pages       │    │
│  │  (8 Slices)      │◄──── used by ───────────────│  Home │ Cart     │    │
│  │                  │                              │  Products │ Auth │    │
│  │  authSlice       │                              │  Admin │ Info    │    │
│  │  cartSlice       │                              └────────┬─────────┘    │
│  │  errorSlice      │                                       │              │
│  │  loaderSlice     │                              ┌────────▼─────────┐    │
│  │  sidebarSlice    │                              │   Components     │    │
│  │  overlaySlice    │                              │  Layout │ Common │    │
│  │  locationSlice   │                              │  Header │ Footer │    │
│  │  languageSlice   │                              │  Feedback │ etc  │    │
│  └────────┬─────────┘                              └────────┬─────────┘    │
│           │                                                 │              │
│           │ dispatches                                      │ uses         │
│           ▼                                                 ▼              │
│  ┌──────────────────┐                              ┌──────────────────┐    │
│  │  Hooks Layer     │                              │   API Layer      │    │
│  │  useAuth()       │◄──── calls ────────────────►│   Axios Instance │    │
│  │  useCart()       │                              │   + Interceptors │    │
│  │  useDebounce()   │                              │                  │    │
│  │  useHasRole()    │                              │ auth/ │ cart/    │    │
│  └──────────────────┘                              │ products/ │admin │    │
│                                                    └────────┬─────────┘    │
│                                                             │              │
│                                                             ▼              │
│                                                    ┌──────────────────┐    │
│                                                    │  Backend Server  │    │
│                                                    │  (Express API)   │    │
│                                                    └──────────────────┘    │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Authentication Flow (Sequence Diagram)

```
  Browser                     Frontend                   Backend                    Database
    │                            │                          │                         │
    │  1. Enter Email            │                          │                         │
    │───────────────────────────►│                          │                         │
    │                            │  2. POST /auth/verify-email                        │
    │                            │─────────────────────────►│                         │
    │                            │                          │  3. Query user          │
    │                            │                          │────────────────────────►│
    │                            │                          │◄────────────────────────│
    │                            │◄─────────────────────────│                         │
    │  4. Show Password Field    │     { email exists }     │                         │
    │◄───────────────────────────│                          │                         │
    │                            │                          │                         │
    │  5. Enter Password         │                          │                         │
    │───────────────────────────►│                          │                         │
    │                            │  6. POST /auth/verify-password                     │
    │                            │─────────────────────────►│                         │
    │                            │                          │  7. Validate creds      │
    │                            │                          │────────────────────────►│
    │                            │                          │◄────────────────────────│
    │                            │◄─────────────────────────│                         │
    │                            │  { accessToken           │                         │
    │  8. Redirect to Home      │    + refreshToken }       │                         │
    │◄───────────────────────────│                          │                         │
    │                            │                          │                         │
    │  9. Subsequent API calls   │                          │                         │
    │───────────────────────────►│                          │                         │
    │                            │  Authorization: Bearer <accessToken>              │
    │                            │─────────────────────────►│                         │
    │                            │                          │                         │
    │  ─ ─ ─ ─ ─ IF 401 ─ ─ ─ ─│                          │                         │
    │                            │                          │                         │
    │  10. Auto-retry w/refresh  │                          │                         │
    │◄───────────────────────────│   POST /auth/refresh                             │
    │                            │─────────────────────────►│                         │
    │                            │◄── { new accessToken }───│                         │
    │                            │                          │                         │
    │  11. Retry original req    │                          │                         │
    │                            │─────────────────────────►│                         │
```

### Token Storage Strategy

```
┌──────────────────────────────────────────────────────────────┐
│                    Token Storage Strategy                     │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  accessToken ───► In-Memory JS Variable                      │
│                   (XSS-safe, lost on tab close)              │
│                                                              │
│  refreshToken ──► Redux State (persisted to localStorage)    │
│                   (Survives page refresh, used to get new    │
│                    access tokens)                             │
│                                                              │
│  Redux Persist ──► Whitelist: [auth, cart] only              │
│                   (UI state like sidebar, overlay, loader    │
│                    are ephemeral - not persisted)             │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Token Refresh Queue Pattern

```
  Multiple 401s fire concurrently:

  Req1 ──► 401 ──┐
  Req2 ──► 401 ──┼──► _isRefreshing = false? ──► POST /auth/refresh
  Req3 ──► 401 ──┘                                    │
                                                       │
                                          ┌────────────┴────────────┐
                                          │                         │
                                     SUCCESS                   FAILURE
                                          │                         │
  Store new accessToken              Clear all tokens           Reject all
  Replay queued reqs                 Reject all queued          queued reqs
  (Req1, Req2, Req3)                 reqs
```

---

## 4. Redux State Flow

```
┌──────────────────────────────────────────────────────────────────────────┐
│                           Redux Store Architecture                       │
│                                                                          │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │                     rootReducer                                   │   │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────────────┐ │   │
│  │  │ authSlice │  │ cartSlice │  │errorSlice│  │  loaderSlice     │ │   │
│  │  │          │  │          │  │          │  │                  │ │   │
│  │  │ user     │  │ data     │  │queue[]   │  │ loading: bool    │ │   │
│  │  │isAuth    │  │ qty      │  │{id,msg,  │  │                  │ │   │
│  │  │refresh   │  │          │  │ type,     │  │                  │ │   │
│  │  │token     │  │          │  │ duration} │  │                  │ │   │
│  │  └──────────┘  └──────────┘  └──────────┘  └──────────────────┘ │   │
│  │                                                                  │   │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────────────┐ │   │
│  │  │sidebar   │  │ overlay  │  │location  │  │  languageSlice   │ │   │
│  │  │Slice     │  │ Slice    │  │Slice     │  │                  │ │   │
│  │  │          │  │          │  │          │  │  code: string   │ │   │
│  │  │state:    │  │isOpen    │  │pincode   │  │                  │ │   │
│  │  │OPEN/CLOSE│  │contentKey│  │          │  │                  │ │   │
│  │  └──────────┘  └──────────┘  └──────────┘  └──────────────────┘ │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                                                          │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │  Redux Persist                                                     │   │
│  │                                                                   │   │
│  │  Whitelist ──► auth, cart                                         │   │
│  │  Storage   ──► localStorage                                       │   │
│  │  Purpose   ──► Survive page refresh for login state & cart items │   │
│  │                                                                   │   │
│  └──────────────────────────────────────────────────────────────────┘   │
│                                                                          │
│  Data Flow:                                                              │
│                                                                          │
│  User Action                                                             │
│       │                                                                  │
│       ▼                                                                  │
│  Component ──dispatch(action)──► Slice Reducer ──new state──► Store     │
│       ▲                                                                │
│       │                  useSelector()                                   │
│       └──────────────────────────────────────────────────────────────────┘
└──────────────────────────────────────────────────────────────────────────┘
```

---

## 5. Component Tree

```
<main.jsx>
  │
  ├── <Provider store={store}>
  │     │
  │     └── <PersistGate loading={<LoaderData />}>
  │           │
  │           ├── <AppErrorBoundary>
  │           │     │
  │           │     └── <GlobalErrorStyles />
  │           │     └── <ErrorToast />
  │           │
  │           └── <App>
  │                 │
  │                 └── <BrowserRouter>
  │                       │
  │                       ├── <ScrollToTop />
  │                       │
  │                       ├── <AppRoutes>
  │                       │     │
  │                       │     ├── /home ──► <Layout>
  │                       │     │               ├── <MainHeader />
  │                       │     │               ├── <SecondaryHeader />
  │                       │     │               │     ├── <SearchBar />
  │                       │     │               │     ├── <DeliveryLocation />
  │                       │     │               │     ├── <LanguageSelection />
  │                       │     │               │     └── <AccountMenu />
  │                       │     │               ├── <Sidebar />
  │                       │     │               ├── <Outlet /> (page content)
  │                       │     │               │     ├── <HomePage>
  │                       │     │               │     │     ├── <Slider />
  │                       │     │               │     │     ├── <CardCarousel />
  │                       │     │               │     │     └── <CategoryGridCarousel />
  │                       │     │               │     ├── <ProductsPage>
  │                       │     │               │     │     ├── <ProductCard /> (×N)
  │                       │     │               │     │     └── <Pagination />
  │                       │     │               │     ├── <ProductPage>
  │                       │     │               │     ├── <CartPage> (Protected)
  │                       │     │               │     └── <AboutUs> / <Privacy> / <TermsConditions>
  │                       │     │               └── <Footer />
  │                       │     │
  │                       │     ├── /login/* ──► <AuthPage>
  │                       │     ├── /signup  ──► <SignupPage>
  │                       │     ├── /admin/products ──► <AdminGuard>
  │                       │     │                            └── <AdminLayout>
  │                       │     │                                  └── <AdminProducts />
  │                       │     └── * ──► <NotFound />
  │                       │
  │                       └── <Overlay />
  │
  └── Portal root (for modals/toasts)
```

### Layout Structure Detail

```
<Layout>  (shared wrapper for most public pages)
  │
  ├── <MainHeader>
  │     ├── Logo (Amazon-style)
  │     ├── DeliveryLocation (pincode selector)
  │     └── AccountMenu (sign in / account dropdown)
  │
  ├── <SecondaryHeader>
  │     ├── SidebarToggle (hamburger)
  │     ├── CategoryNav
  │     ├── <SearchBar> (debounced, 500ms)
  │     └── CartLogo (badge with qty)
  │
  ├── <Sidebar> (flyout menu)
  │     ├── SidebarNavbar (user info)
  │     └── SidebarCategories (category list)
  │
  ├── <main> {children}  ← page content via <Outlet />
  │
  └── <Footer>
        ├── TopNavigationFooter
        ├── ConnectionsBuildingFooter
        ├── OtherServicesFooter
        └── TermsConditionsFooter
```

---

## 6. API Module Map

```
┌──────────────────────────────────────────────────────────────────┐
│                     API Layer Architecture                        │
│                                                                   │
│  ┌──────────────────────────────────────────────────────────┐    │
│  │                axiosInstance.js                           │    │
│  │                                                          │    │
│  │  baseURL: process.env.VITE_BASE_URL                      │    │
│  │  withCredentials: true                                  │    │
│  │                                                          │    │
│  │  Request Interceptor                                     │    │
│  │  ┌──────────────────────────────────────────────────┐   │    │
│  │  │ Attaches Bearer <accessToken> to every request   │   │    │
│  │  │ (reads from in-memory module variable)           │   │    │
│  │  └──────────────────────────────────────────────────┘   │    │
│  │                                                          │    │
│  │  Response Interceptor                                    │    │
│  │  ┌──────────────────────────────────────────────────┐   │    │
│  │  │ On 401: queue-based token refresh pattern        │   │    │
│  │  │  1. Set _isRefreshing = true                     │   │    │
│  │  │  2. POST /auth/refresh                           │   │    │
│  │  │  3. On success: replay queued requests           │   │    │
│  │  │  4. On failure: logout & reject all              │   │    │
│  │  └──────────────────────────────────────────────────┘   │    │
│  └──────────────────────────────────────────────────────────┘    │
│                                                                   │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐  ┌────────────┐ │
│  │   auth/    │  │ products/  │  │   cart/    │  │   admin/   │ │
│  ├────────────┤  ├────────────┤  ├────────────┤  ├────────────┤ │
│  │signupUser  │  │getCarousel │  │ addToCart  │  │createProduct│ │
│  │verifyEmail │  │getProducts │  │ getCart    │  │updateProduct│ │
│  │verifyPass  │  │getProduct  │  │ getCartQty │  │deleteProduct│ │
│  │logoutUser  │  │getFiltered │  │updateQty   │  │            │ │
│  │            │  │Products    │  │deleteProd  │  │            │ │
│  └────────────┘  └────────────┘  └────────────┘  └────────────┘ │
│                                                                   │
│  All modules follow this pattern:                                 │
│                                                                   │
│  async function apiCall(params) {                                 │
│    try {                                                          │
│      const res = await API.get("/endpoint", params);              │
│      return res?.data;                                           │
│    } catch (error) {                                              │
│      throw new Error(error.response?.data?.message                │
│        || "Something went wrong.");                               │
│    }                                                              │
│  }                                                                │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘

API Endpoints: 17 total across 4 modules

  auth     │ 4 endpoints  │ signup, verify-email, verify-password, logout
  products │ 4 endpoints  │ carousel, products, product, filtered-products
  cart     │ 5 endpoints  │ add, get, get-qty, update-qty, delete
  admin    │ 3 endpoints  │ create-product, update-product, delete-product
  ─────────┼──────────────┴────────────────────────────────────────
  refresh  │ 1 endpoint   │ refresh (handled internally by interceptor)
```

---

## 7. RBAC / Route Guard Flow

```
                    ┌──────────────┐
                    │  Visitor     │
                    │ (unauthed)   │
                    └──────┬───────┘
                           │
                           ▼
              ┌────────────────────────┐
              │  Public Routes         │
              │  /home, /products/*,   │
              │  /about-us, /privacy,  │
              │  /terms, /login,       │
              │  /signup               │
              └────────────────────────┘
                           │
                           ▼
              ┌────────────────────────┐
              │  Protected Route       │
              │  /cart                 │
              │                        │
              │  ┌──────────────────┐  │
              │  │ isAuthenticated? │  │
              │  ├───────┬──────────┤  │
              │  │ YES   │   NO     │  │
              │  │ Go to │ Redirect │  │
              │  │ Cart  │ to       │  │
              │  │       │ /login   │  │
              │  └───────┴──────────┘  │
              └────────────────────────┘
                           │
                           ▼
              ┌────────────────────────┐
              │  Admin Guard           │
              │  /admin/products       │
              │                        │
              │  ┌──────────────────┐  │
              │  │ Role Check       │  │
              │  ├────────┬─────────┤  │
              │  │ admin  │ user    │  │
              │  │ OR     │ → 404  │  │
              │  │ product│         │  │
              │  │_manager│         │  │
              │  └────────┴─────────┘  │
              └────────────────────────┘
                           │
                           ▼
              ┌────────────────────────┐
              │  Permission Check      │
              │  (component-level)     │
              │                        │
              │  ┌──────────────────┐  │
              │  │ admin:           │  │
              │  │  create  ✓       │  │
              │  │  read    ✓       │  │
              │  │  update  ✓       │  │
              │  │  delete  ✓       │  │
              │  │                  │  │
              │  │ product_manager: │  │
              │  │  create  ✓       │  │
              │  │  read    ✓       │  │
              │  │  update  ✓       │  │
              │  │  delete  ✗       │  │
              │  │                  │  │
              │  │ user:            │  │
              │  │  read    ✓       │  │
              │  │  others  ✗       │  │
              │  └──────────────────┘  │
              └────────────────────────┘

Role ─── maps to ───> Permissions:

  admin           ───> [create, read, update, delete]
  product_manager ───> [create, read, update]
  user            ───> [read]

UI Enforcement:
  canCreate = hasPermission('product:create')  → shows "Add Product" button
  canUpdate = hasPermission('product:update')  → shows "Edit" button
  canDelete = hasPermission('product:delete')  → shows "Delete" button
```

---

## 8. Error Handling Flow

```
┌──────────────────────────────────────────────────────────────────┐
│                     Error Handling Architecture                   │
│                                                                   │
│  ┌──────────────┐                                                 │
│  │  Error Slice  │  (redux/slices/errorSlice.js)                  │
│  │               │                                                 │
│  │  State:       │                                                 │
│  │  ┌─────────┐  │                                                 │
│  │  │queue: []│  │   Each entry:                                   │
│  │  │         │  │   { id: uuid, message: string,                 │
│  │  │         │  │     type: "error"|"success"|"warning",         │
│  │  │         │  │     duration: number (ms) }                    │
│  │  └─────────┘  │                                                 │
│  └──────┬────────┘                                                 │
│         │                                                          │
│         │ actions                                                  │
│         ▼                                                          │
│  ┌──────────────────────────────────────────┐                     │
│  │          Error Handler Utils              │                     │
│  │  (src/utils/errorHandler.js)             │                     │
│  │                                          │                     │
│  │  showError(msg, duration?)  ──► dispatch(setGlobalError)       │
│  │  showSuccess(msg, duration?)──► dispatch(setGlobalError)       │
│  │  showWarning(msg, duration?)──► dispatch(setGlobalError)       │
│  │  dismissError(id)           ──► dispatch(clearGlobalError)    │
│  └──────────────────────────────────────────┘                     │
│                     │                                              │
│                     ▼                                              │
│  ┌──────────────────────────────────────────┐                     │
│  │              ErrorToast Component          │                     │
│  │  (src/components/feedback/ErrorToast.jsx) │                     │
│  │                                          │                     │
│  │  Listens to: errorSlice.queue via        │                     │
│  │  useSelector                              │                     │
│  │                                          │                     │
│  │  Renders: toast notifications with       │                     │
│  │  auto-dismiss timeout per entry          │                     │
│  │                                          │                     │
│  │  Accessibility: aria-live="polite"       │                     │
│  │  role="status"                            │                     │
│  └──────────────────────────────────────────┘                     │
│                                                                   │
│  ┌──────────────────────────────────────────┐                     │
│  │          AppErrorBoundary                  │                     │
│  │  (src/components/AppErrorBoundary.jsx)    │                     │
│  │                                          │                     │
│  │  Catches: unhandled render errors        │                     │
│  │  Prevents: entire app from crashing      │                     │
│  │  Fallback: friendly error UI             │                     │
│  └──────────────────────────────────────────┘                     │
│                                                                   │
│  Error Propagation Flow:                                          │
│                                                                   │
│  API Layer                                        UI Layer        │
│  ┌────────────┐     ┌──────────┐     ┌────────────────────┐      │
│  │ Axios      │────►│ Hooks    │────►│ Components         │      │
│  │ Interceptor│     │ (useAuth,│     │ (try/catch in      │      │
│  │ catches    │     │ useCart) │     │  event handlers)   │      │
│  │ HTTP error │     │ re-throw │     │  │                 │      │
│  └────────────┘     └──────────┘     │  ▼                 │      │
│                                       │ showError(msg)    │      │
│                                       │   │               │      │
│                                       │   ▼               │      │
│                                       │ dispatch() ──►    │      │
│                                       │ errorSlice.queue  │      │
│                                       └────────────────────┘      │
│                                                                   │
│  API Error → Hook catches → Component catches → showError()      │
│  → dispatch to Redux → ErrorToast reads queue → renders toast    │
│  → auto-dismisses after duration                                   │
└──────────────────────────────────────────────────────────────────┘
```

---

## 9. Deployment & Build Pipeline

```
  ┌──────────┐     ┌──────────┐     ┌──────────┐     ┌──────────┐
  │  Dev     │     │  Build   │     │  Deploy  │     │  Serve   │
  │          │     │          │     │          │     │          │
  │ npm run  │────►│ npm run  │────►│ vercel   │────►│  CDN     │
  │ dev      │     │ build    │     │ --prod   │     │  Edge    │
  │          │     │          │     │          │     │          │
  │ Vite Dev │     │ Vite     │     │ Vercel   │     │ Global   │
  │ Server   │     │ Bundles  │     │ Uploads  │     │ Delivery │
  │ Hot      │     │ to dist/ │     │ to Edge  │     │          │
  │ Reload   │     │          │     │ Network  │     │          │
  └──────────┘     └──────────┘     └──────────┘     └──────────┘

  Vite Build Process:
  ┌─────────────────────────────────────────────┐
  │  Entry: index.html                          │
  │     │                                       │
  │     ├── src/main.jsx                        │
  │     │    ├── React + JSX ──► ESNext (bundled)│
  │     │    ├── Tailwind CSS ──► PostCSS       │
  │     │    ├── MUI imports ──► Tree-shaken    │
  │     │    └── Path aliases resolved          │
  │     │         (@/ → src/, @api → src/api/)  │
  │     │                                       │
  │     └── Output: dist/                       │
  │          ├── index.html                     │
  │          ├── assets/                        │
  │          │    ├── index-[hash].js           │
  │          │    ├── vendor-[hash].js          │
  │          │    └── index-[hash].css          │
  │          └── _redirects (Netlify SPA)       │
  └─────────────────────────────────────────────┘

  vercel.json:
  ┌─────────────────────────────────────────────┐
  │  SPA Rewrites: all routes → index.html      │
  │  Build: npm run build                       │
  │  Output: dist                               │
  └─────────────────────────────────────────────┘
```

---

## 10. Data Flow Summary

```
  ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
  │   User       │     │  Component   │     │   Redux      │
  │   Action     │────►│  (onClick,   │────►│   dispatch   │
  │   (click,    │     │   onChange)  │     │   (action)   │
  │   submit)    │     │              │     │              │
  └──────────────┘     └──────────────┘     └──────┬───────┘
                                                   │
                                                   ▼
  ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
  │   Re-render  │◄────│   Store      │◄────│   Reducer    │
  │   (useSelector)    │   (new state)│     │   (pure fn)  │
  └──────────────┘     └──────────────┘     └──────────────┘

  ── OR ── (if API call needed)

  ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
  │   User       │     │  Hook        │     │  API Module  │
  │   Action     │────►│  (useAuth,   │────►│  (Axios call)│
  │              │     │   useCart)   │     │              │
  └──────────────┘     └──────┬───────┘     └──────┬───────┘
                              │                    │
                              │                    ▼
                              │            ┌──────────────┐
                              │            │  Backend     │
                              │            │  Server      │
                              │            └──────┬───────┘
                              │                    │
                              │                    ▼
                              │            ┌──────────────┐
                              │            │  Response    │
                              │            │  (JSON data) │
                              │            └──────┬───────┘
                              │                    │
                              ▼                    ▼
                       ┌──────────────────────────────────┐
                       │  Hook: transform data, dispatch  │
                       │  to Redux or set local state     │
                       └──────────────┬───────────────────┘
                                      │
                                      ▼
                       ┌──────────────────────────────────┐
                       │  Component re-renders with new   │
                       │  data (from Redux or local state)│
                       └──────────────────────────────────┘
```

---

## Directory Structure Reference

```
src/
├── api/                    # Axios instance + 4 API modules
│   ├── axiosInstance.js    # Interceptors, token refresh queue
│   ├── index.js
│   ├── auth/index.js       # signup, verify-email, verify-password, logout
│   ├── products/index.js   # carousel, products, product, filtered
│   ├── cart/index.js       # add, get, get-qty, update-qty, delete
│   └── admin/products.js   # create, update, delete
│
├── redux/                  # State management (8 slices)
│   ├── store.js            # configureStore + persist
│   ├── rootReducer.js
│   └── slices/
│       ├── authSlice.js    # user, isAuthenticated, refreshToken
│       ├── cartSlice.js    # data, totalQuantity
│       ├── errorSlice.js   # queue-based error system
│       ├── loaderSlice.js  # loading boolean
│       ├── sidebarSlice.js # OPEN/CLOSE/NONE
│       ├── overlaySlice.js # isOpen, contentKey
│       ├── locationSlice.js# delivery pincode
│       └── languageSlice.js# selected language
│
├── components/             # Reusable components
│   ├── common/             # overlay, portal, popover, notFound, scrollToTop
│   ├── feedback/           # errorBoundary, errorToast, skeleton
│   └── layout/
│       ├── header/         # mainHeader, secondaryHeader, searchBar, etc.
│       ├── footer/         # topNav, connections, otherServices, terms
│       └── sidebar/        # sidebarNavbar, sidebarCategories
│
├── pages/                  # Feature-based route pages
│   ├── Admin/              # AdminLayout, AdminProducts
│   ├── Auth/               # LoginPage, SignupPage
│   ├── CartPage/
│   ├── HomePage/           # Slider, CardCarousel, CategoryGrid
│   ├── Info/               # aboutUs, privacy, termsConditions
│   ├── ProductPage/        # Product detail
│   └── ProductsPage/       # Product listing, pagination
│
├── hooks/                  # Custom hooks
│   ├── useAuth.js          # login, signup, logout orchestration
│   ├── useCart.js          # Cart CRUD operations
│   ├── useDebounce.js      # 500ms debounce for search
│   └── useHasRole.js       # RBAC: useHasRole, useHasPermission, useUserRole
│
├── config/                 # App config
│   ├── constants.js        # BACKEND_URL, USER_API
│   └── routes.js           # Route path constants
│
├── routes/                 # Router setup
│   ├── appRoutes.jsx       # All route definitions
│   ├── ProtectedRoute.jsx  # Auth guard
│   └── AdminGuard.jsx      # RBAC guard
│
├── utils/                  # Utilities
│   ├── authTokens.js       # In-memory token storage + refresh
│   ├── errorHandler.js     # showError, showSuccess, showWarning
│   ├── commonUtils.js      # getImages, currency formatting
│   └── commonConsts.js     # Sidebar data, languages, categories
│
├── styles/                 # Global styles
├── assets/                 # Static assets
└── test/                   # Test files (vitest)
    ├── setup.js
    ├── authSlice.test.js
    ├── errorSlice.test.js
    ├── errorHandler.test.js
    ├── ErrorToast.test.jsx
    └── NotFound.test.jsx
```
