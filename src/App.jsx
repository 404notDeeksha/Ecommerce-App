import "./App.css";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { HomePage } from "./pages/homepage/HomePage";
import { SignIn } from "./pages/signin/SignIn";
import { AccountCheck } from "./pages/signin/components/user/AccountCheck";
import { CreateAccountForm } from "./pages/signup/components/CreateAccountForm";
import { Cartpage } from "./pages/cartpage/components/Cartpage";

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
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signin/auth" element={<AccountCheck />} />
          <Route path="/create" element={<CreateAccountForm />} />
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
            <Route path="/cart" element={<Cartpage />} />
          </Route>
          <Route path="*" element={<Navigate to="/signin" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
