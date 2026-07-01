// ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
    // if hash exists, your existing Home.jsx effect (or a similar one)
    // handles scrolling to that element instead
  }, [pathname, hash]);

  return null;
}