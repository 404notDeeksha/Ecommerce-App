import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { HomePage } from "./pages/homepage/components/HomePage";
import { AccountCheck } from "./pages/signin/components/AccountCheck";
import { CreateAccountForm } from "./pages/signup/components/CreateAccountForm";
import { Cartpage } from "./pages/cartpage/components/Cartpage";
import { ProductPage } from "./pages/product/components/ProductPage";
import { ProductsPage } from "./pages/productsgridpage/components/ProductsPage";
import { SignInPage } from "./pages/signin/SignInPage";
import Overlay from "./components/Overlay";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signin/auth" element={<AccountCheck />} />
          <Route path="/signup" element={<CreateAccountForm />} />
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/products/:filter?" element={<ProductsPage />} />
            <Route
              path="/products/product/:productId?"
              element={<ProductPage />}
            />
            <Route path="/cart" element={<Cartpage />} />
          </Route>
          <Route path="*" element={<Navigate to="/signin" />} />
        </Routes>
      </Router>
      <Overlay />
    </>
  );
}

export default App;
