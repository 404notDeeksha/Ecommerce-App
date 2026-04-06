# Ecommerce-App (Amazon Inspired)

![Version](https://img.shields.io/badge/version-1.0.0-blue)
[![MIT License](https://img.shields.io/github/license/404notDeeksha/Ecommerce-App?style=flat-square)](https://github.com/404notDeeksha/Ecommerce-App/blob/main/License)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/404notDeeksha/Ecommerce-App/pulls)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/404notDeeksha/Ecommerce-App)

A responsive e-commerce web application inspired by Amazon. It allows users to browse and filter products, manage their cart, and securely log in to access personalized features.

> ⚡ Built with React, Vite, TailwindCSS & Redux Toolkit — deployed on Vercel

## 📋 Table of Contents

- [Live Demo](#-live-demo)
- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [Screenshots](#-screenshots)
- [Getting Started](#-getting-started)
- [Environment Setup](#-environment-setup)
- [Available Scripts](#-available-scripts)
- [Project Structure](#-project-structure)
- [What I Built & Learned](#-what-i-built--learned)
- [Upcoming Features](#-upcoming-features)
- [Contributing](#-contributing)
- [FAQ](#-faq)
- [License](#-license)
- [Connect With Me](#--connect-with-me)

---

## 🔗 Live Demo

Frontend: [https://ecommerceapp-demo.vercel.app](https://ecommerceapp-demo.vercel.app)  
Backend: [https://ecommerce-dep-techwithdeekksha.vercel.app](https://ecommerce-dep-techwithdeekksha.vercel.app/api/test)

<br/>

## 🎬 Quick Demo
![Demo](demo.gif)

## 📂 Backend Repository
[![Ecommerce-App-Backend](https://img.shields.io/badge/Ecommerce--App--Backend-808080?style=for-the-badge&logo=github&logoColor=white)](https://github.com/404notDeeksha/Ecommerce-App-Backend)


</br>

## 🚀 Tech Stack

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-593D88?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![MUI](https://img.shields.io/badge/Material_UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)](https://mui.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-FF0054?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)](https://axios-http.com/)
[![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)](https://vitest.dev/)

<br/>

## ✨ Features

- 🛒 **Cart System** – Add, update, and remove items from the cart
- 🔍 **Product Filtering** – Browse by categories & sub categories
- 👤 **User Authentication** – Secure login and signup with JWT
- 📱 **Responsive Design** – Looks great on all devices
- ⚡️ **Vite Powered** – Fast development and optimized builds
- 🧼 **Clean UI** – Minimal, elegant, and user-focused
- 🔐 **Secure Backend** – CORS configured and ready for integration
- 🚨 **Error Boundaries** – Graceful error handling with fallbacks
- 🔔 **Toast Notifications** – Real-time feedback to users
- 📦 **State Persistence** – Redux Persist keeps auth state across sessions
- ✨ **Animations** – Smooth transitions with Framer Motion
- 🧪 **Tested** – Vitest for unit and integration tests

<br/>

## 🖼️ Screenshots

| 🏠 Home Page                        | 🧾 Product Page                          |
| ----------------------------------- | ---------------------------------------- |
| ![Home Page](./screenshots/home.png) | ![Product Page](./screenshots/product.png) |

| 🗂️ Products Grid Page                         | 📚 Sidebar Modal                          |
| --------------------------------------------- | ----------------------------------------- |
| ![Products Grid](./screenshots/productsgrid.png) | ![Sidebar Modal](./screenshots/sidebar.png) |

| 🛒 Cart Page |
| ------------ |
| ![Cart Page](./screenshots/cart.png) |


<br/>

## 🚀 Getting Started

To run this project locally:

```bash
# 1. Clone the repo
git clone https://github.com/404notDeeksha/Ecommerce-App.git

# 2. Navigate to the project folder
cd Ecommerce-App

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```

## 🔧 Environment Setup

Create a `.env` file based on `.env.example`:

```bash
# Development
VITE_BASE_URL=http://localhost:8000/api

# Production
VITE_BASE_URL=https://your-backend.vercel.app/api
```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview production build |
| `npm run test` | Run tests (watch mode) |
| `npm run test:run` | Run tests once |

## 🏗️ Project Structure

```
src/
├── api/           # API endpoints & axios setup
├── components/    # Reusable UI components
│   ├── common/    # Generic components (Loader, Portal, etc.)
│   ├── feedback/ # Toasts, notifications
│   └── layout/    # Header, Footer, Sidebar
├── config/        # App configuration
├── hooks/         # Custom React hooks
├── pages/         # Page components
│   ├── Auth/      # Login, Signup
│   ├── CartPage/  # Shopping cart
│   ├── HomePage/  # Landing page
│   └── ProductsPage/ # Product listing
├── redux/         # State management
│   └── slices/    # auth, cart, error, loader, etc.
├── routes/        # Route definitions
├── styles/        # Global styles
└── utils/         # Helper functions
```

## 🎓 What I Built & Learned

- **State Management** – Redux Toolkit with slices pattern for cart, auth, errors, and UI state
- **Server Integration** – Axios client with interceptors for API communication
- **Error Handling** – React Error Boundary for graceful failure recovery
- **Responsive Design** – Mobile-first approach with Tailwind CSS
- **Authentication Flow** – JWT-based login/signup with protected routes
- **Performance** – Vite-powered fast builds with code splitting
- **Testing** – Unit tests with Vitest and React Testing Library
- **Deployment** – CI/CD pipeline on Vercel with environment configuration

## 🚀 Upcoming Features

- [ ] Cart state persistence (save cart across sessions)
- [ ] Additional product filters (brands, price range, discounts)
- [ ] Checkout flow with payment integration
- [ ] Order history and tracking
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Expanded test coverage for CI/CD
- [ ] 🌐 **i18n (Multi-language support)** – Redux slice ready, UI integration in progress

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## ❓ FAQ

**Q: What is the backend API URL?**  
A: Set `VITE_BASE_URL` in your `.env` file. In development, use `http://localhost:8000/api`.

**Q: How do I run tests?**  
A: Run `npm run test` for watch mode or `npm run test:run` for a single run.

**Q: Why isn't my cart data persisting?**  
A: Currently, only auth state is persisted via Redux Persist. Cart data resets on page reload (see Upcoming Features).

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| CORS errors | Ensure backend has correct CORS configuration for your frontend URL |
| API not connecting | Check `VITE_BASE_URL` in `.env` matches your backend URL |
| Build fails | Run `npm install` to ensure all dependencies are installed |
| Tests failing | Ensure test dependencies (`vitest`, `@testing-library/*`) are installed |

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](/LICENSE.md) file for details.

## 👋 Connect With Me

- Email: deeksha.developer@proton.me
- GitHub: [@404notDeeksha](https://github.com/404notDeeksha)
- LinkedIn: [My LinkedIn Profile](https://www.linkedin.com/in/deek1995)
