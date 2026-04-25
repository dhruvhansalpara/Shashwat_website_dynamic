import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Utility component that scrolls the window to the top whenever the route changes.
 * Essential for SPA (Single Page Application) navigation feel.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
