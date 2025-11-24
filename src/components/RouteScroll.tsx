import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * RouteScroll
 * - Listens for location changes and scrolls to the most appropriate header element on the page.
 * - Priority: location.hash -> element with id `page-header` -> first `main h1` or `h2` -> window.scrollTo(0,0)
 */
const RouteScroll: React.FC = () => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // run after navigation; small timeout allows new content to render
    const idToScroll = hash ? decodeURIComponent(hash.replace(/^#/, "")) : null;

    const timer = window.setTimeout(() => {
      try {
        if (idToScroll) {
          const el = document.getElementById(idToScroll);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
            el.focus?.({ preventScroll: true } as any);
            return;
          }
        }

        // Default behavior: always scroll to top on navigation
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch (e) {
        // fail silently and fallback to top
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 40);

    return () => clearTimeout(timer);
    // include key so it runs after navigation even when pathname same but key differs
  }, [pathname, hash, key]);

  return null;
};

export default RouteScroll;
