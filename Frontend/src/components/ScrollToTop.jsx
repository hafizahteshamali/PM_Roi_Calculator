import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // jab bhi path change hoga, scroll 0 ho jayega

  return null;
};

export default ScrollToTop;
