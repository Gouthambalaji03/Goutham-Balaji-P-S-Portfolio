import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 w-12 h-12 rounded-xl scroll-top-btn flex items-center justify-center cursor-pointer z-50 transition-all duration-300 ${
        isVisible
          ? 'opacity-100 visible translate-y-0'
          : 'opacity-0 invisible translate-y-5'
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp size={22} className="text-dark" strokeWidth={2.5} />
    </button>
  );
};

export default ScrollToTop;
