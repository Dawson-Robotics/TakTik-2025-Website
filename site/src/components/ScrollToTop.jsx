import { useEffect, useState } from 'react';
import './ScrollToTop.css';

export function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScrollToTopButtonVisibility = () => {
      window.scrollY > 200 ? setShowButton(true) : setShowButton(false);
    };

    window.addEventListener("scroll", handleScrollToTopButtonVisibility);
    
    handleScrollToTopButtonVisibility();

    return () => {
      window.removeEventListener("scroll", handleScrollToTopButtonVisibility);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showButton && (
        <div className="scrollToTop">
          <button
            className="scrollToTopBtn"
            onClick={handleScrollToTop}
            aria-label="Scroll to top"
          >
            ↑
          </button>
        </div>
      )}
    </>
  );
};