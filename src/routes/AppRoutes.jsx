import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { Signup } from "../pages/Signup";
import { MainHeader } from "./../components/headers/mainHeader/MainHeader";
import { SecondaryHeader } from "./../components/headers/secondaryHeader/SecondaryHeader";
import { Footer } from "./../components/footer/Footer";
import { HomePage } from "../pages/homepage/components/HomePage";
import { ProductsPage } from "../pages/productsgridpage/components/ProductsPage";
import { ProductPage } from "../pages/product/components/ProductPage";
import { Cartpage } from "../pages/cartpage/components/Cartpage";
import { PasswordAuthPage } from "../pages/login/PasswordAuthPage";
import { EmailAuthPage } from "../pages/login/EmailAuthPage";
import { ProtectedRoute } from "./ProtectedRoute";
import { routes } from "./routes";
import { NotFound } from "../components/NotFound";
import { AboutUs } from "../pages/information/AboutUs";
import { Privacy } from "../pages/information/Privacy";
import { TermsConditions } from "../pages/information/TermsConditions";

const Layout = ({ children }) => {
  return (
    <Routes>
      <Route path={routes.signup} element={<Signup />} />
      <Route path={routes.loginEmail} element={<EmailAuthPage />} />
      <Route path={routes.loginPassword} element={<PasswordAuthPage />} />

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
