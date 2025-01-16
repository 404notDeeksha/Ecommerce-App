import "./App.css";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { HomePage } from "./pages/homepage/components/HomePage";
import { AccountCheck } from "./pages/signin/components/user/AccountCheck";
import { CreateAccountForm } from "./pages/signup/components/CreateAccountForm";
import { Cartpage } from "./pages/cartpage/components/Cartpage";
import { ProductPage } from "./pages/product/components/ProductPage";
import { ProductsPage } from "./pages/productsgridpage/components/ProductsPage";
import { SignInPage } from "./pages/signin/SignInPage";

function App() {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [modalVisibilityClassType, setModalVisibilityClassType] =
    useState(null);
  const [sideBarToggle, setSideBarToggle] = useState(false);
  const [popover, setPopover] = useState(false);

  const handleModalClose = () => {
    setModalVisibility(false);
  };
  const handleModalOpen = () => {
    setModalVisibility(true);
  };
  const handleModalVisibilityClassType = (val) => {
    setModalVisibilityClassType(val);
  };
  const handleSideBarOpen = () => {
    setSideBarToggle(true);
  };
  const handleSideBarClose = () => {
    setSideBarToggle(false);
  };

  const handlePopoverOpen = () => {
    setPopover(true);
  };
  const handlePopoverClose = () => {
    setPopover(false);
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signin/auth" element={<AccountCheck />} />
          <Route path="/signup" element={<CreateAccountForm />} />
          <Route
            path="/"
            element={
              <Layout
                onOpen={handleModalOpen}
                onClose={handleModalClose}
                popover={popover}
                onPopoverOpen={handlePopoverOpen}
                onPopoverClose={handlePopoverClose}
                modalVisibility={modalVisibility}
                modalVisibilityClassType={handleModalVisibilityClassType}
                modalVisibilityClassTypeData={modalVisibilityClassType}
                onOpenSidebar={handleSideBarOpen}
                sideBarToggle={sideBarToggle}
                onCloseSideBar={handleSideBarClose}
              />
            }
          >
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
    </>
  );
}

export default App;
