import { Routes, Route, Navigate } from "react-router-dom";
import { routes } from "@config/routes.js";
import ProtectedRoute from "./ProtectedRoute.jsx";
import AdminGuard from "./AdminGuard.jsx";
import { useSelector } from "react-redux";

// Root route: redirects "/" to "/home" when user session is active
const RootRoute = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return <Navigate to={routes.home} replace />;
};
import {
  MainHeader,
  SecondaryHeader,
} from "@components/layout/header/index.js";
import { Footer } from "@components/layout/footer/index.jsx";
import { Sidebar } from "@components/layout/sidebar/index.jsx";
import { NotFound } from "@components/common/notFound.jsx";
import { HomePage } from "@pages/HomePage/index.jsx";
import { ProductsPage } from "@pages/ProductsPage/index.jsx";
import { ProductPage } from "@pages/ProductPage/index.jsx";
import { CartPage } from "@pages/CartPage/index.jsx";
import { AboutUs } from "@pages/Info/aboutUs.jsx";
import { Privacy } from "@pages/Info/privacy.jsx";
import { TermsConditions } from "@pages/Info/termsConditions.jsx";
import {
  EmailAuthPage,
  PasswordAuthPage,
} from "@pages/Auth/LoginPage/index.js";
import { SignupPage } from "@pages/Auth/SignupPage/index.jsx";

const Layout = ({ children }) => {
  return (
    <>
      <MainHeader />
      <div className="hidden lg:block">
        <SecondaryHeader />
      </div>
      <Sidebar />
      {children}
      <Footer />
    </>
  );
};

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootRoute />} />
        <Route path={routes.signup} element={<SignupPage />} />
        <Route path={routes.loginEmail} element={<EmailAuthPage />} />
        <Route path={routes.loginPassword} element={<PasswordAuthPage />} />
        <Route
          path={routes.home}
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path={routes.products}
          element={
            <Layout>
              <ProductsPage />
            </Layout>
          }
        />
        <Route
          path={routes.product}
          element={
            <Layout>
              <ProductPage />
            </Layout>
          }
        />
        <Route
          path={routes.cart}
          element={
            <ProtectedRoute>
              <Layout>
                <CartPage />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path={routes.aboutUs}
          element={
            <Layout>
              <AboutUs />
            </Layout>
          }
        />
        <Route
          path={routes.privacy}
          element={
            <Layout>
              <Privacy />
            </Layout>
          }
        />
        <Route
          path={routes.terms}
          element={
            <Layout>
              <TermsConditions />
            </Layout>
          }
        />
        <Route
          path={routes.adminProducts}
          element={
            <AdminGuard>
              <div className="p-6">
                <h1 className="text-2xl font-bold">Admin Products</h1>
                <p className="mt-2 text-gray-600">Admin panel coming soon...</p>
              </div>
            </AdminGuard>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
