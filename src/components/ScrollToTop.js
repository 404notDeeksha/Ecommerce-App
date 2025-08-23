import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/* Function to show Top part of Page to user, whenever navigated */
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scroll(0, 0);
    }, 100);
  }, [location.pathname]);
  return null;
}

export default ScrollToTop;
