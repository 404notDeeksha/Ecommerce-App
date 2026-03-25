import { Routes, Route } from "react-router-dom";
import { routes } from "@config/routes.js";
import ProtectedRoute from "./protectedRoute.jsx";
import { MainHeader, SecondaryHeader } from "@components/layout/header/index.js";
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
import { EmailAuthPage, PasswordAuthPage } from "@pages/Auth/LoginPage/index.js";
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
        <Route
          path={routes.signup}
          element={<SignupPage />}
        />
        <Route
          path={routes.loginEmail}
          element={<EmailAuthPage />}
        />
        <Route
          path={routes.loginPassword}
          element={<PasswordAuthPage />}
        />
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
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </>
  );
};
