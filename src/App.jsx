import "@styles/globals.css";
import { BrowserRouter as Router } from "react-router-dom";
import Overlay from "@components/common/overlay.jsx";
import ScrollToTop from "@components/common/scrollToTop.jsx";
import { AppRoutes } from "./routes/appRoutes.jsx";

function App() {
  return (
    <>
      <Router
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <ScrollToTop />
        <AppRoutes />
      </Router>
      <Overlay />
    </>
  );
}

export default App;
