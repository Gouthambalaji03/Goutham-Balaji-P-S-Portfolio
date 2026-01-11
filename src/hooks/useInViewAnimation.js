import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook for intersection observer based animations
 * @param {number} threshold - Visibility threshold (0-1), default 0.2
 * @returns {{ isVisible: boolean, ref: React.RefObject }}
 */
export const useInViewAnimation = (threshold = 0.2) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [threshold]);

  return { isVisible, ref };
};

export default useInViewAnimation;
