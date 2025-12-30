import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

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
      className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-accent border-none flex items-center justify-center cursor-pointer z-50 shadow-[0_4px_20px_rgba(245,166,35,0.4)] transition-all duration-300 hover:bg-accent-hover ${
        isVisible
          ? 'opacity-100 visible translate-y-0'
          : 'opacity-0 invisible translate-y-5'
      }`}
      aria-label="Scroll to top"
    >
      <ChevronUp size={28} className="text-dark" strokeWidth={3} />
    </button>
  );
};

export default ScrollToTop;
