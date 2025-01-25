import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top whenever the route changes
    setTimeout(() => {
      window.scroll(0, 0);
    }, 100);
  }, [location.pathname]);
  return null; // This component doesn't render anything
}

export default ScrollToTop;
