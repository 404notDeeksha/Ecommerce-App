import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Overlay from "./components/Overlay";
import ScrollToTop from "./components/ScrollToTop";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <AppRoutes />
      </Router>
      <Overlay />
    </>
  );
}

export default App;
