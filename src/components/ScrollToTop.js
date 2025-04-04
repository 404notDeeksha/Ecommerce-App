import { useEffect } from "react";
import { useLocation } from "react-router-dom";

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
