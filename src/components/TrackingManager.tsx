import { useEffect, useRef } from "react";
import { useLocation } from "@tanstack/react-router";
import { trackPageView, trackScrollDepth } from "@/lib/analytics";

export function TrackingManager() {
  const location = useLocation();
  const firedRef = useRef({ 50: false, 90: false });

  useEffect(() => {
    firedRef.current = { 50: false, 90: false };
    trackPageView(location.pathname);

    const handleScroll = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop;
      const totalHeight = doc.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;

      const percent = (scrollTop / totalHeight) * 100;

      if (percent >= 50 && !firedRef.current[50]) {
        firedRef.current[50] = true;
        trackScrollDepth(50, location.pathname);
      }

      if (percent >= 90 && !firedRef.current[90]) {
        firedRef.current[90] = true;
        trackScrollDepth(90, location.pathname);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return null;
}
