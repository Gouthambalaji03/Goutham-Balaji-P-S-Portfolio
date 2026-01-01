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
      className={`fixed bottom-5 right-5 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg sm:rounded-xl scroll-top-btn flex items-center justify-center cursor-pointer z-50 transition-all duration-300 ${
        isVisible
          ? 'opacity-100 visible translate-y-0'
          : 'opacity-0 invisible translate-y-5'
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp size={18} className="text-dark sm:w-5 sm:h-5 md:w-[22px] md:h-[22px]" strokeWidth={2.5} />
    </button>
  );
};

export default ScrollToTop;
