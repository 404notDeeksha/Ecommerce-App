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

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={routes.signup} element={<Signup />} />
      <Route path={routes.loginEmail} element={<EmailAuthPage />} />
      <Route path={routes.loginPassword} element={<PasswordAuthPage />} />
      <Route element={<ProtectedRoute />}>
        <Route
          path="/"
          element={
            <>
              <MainHeader />
              <SecondaryHeader />
              <Outlet />
              <Footer />
            </>
          }
        >
          <Route index element={<Navigate to={routes.home} />} />
          <Route path={routes.home} element={<HomePage />} />
          <Route path={routes.products} element={<ProductsPage />} />
          <Route path={routes.product} element={<ProductPage />} />
          <Route path={routes.cart} element={<Cartpage />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
