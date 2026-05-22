import { useEffect, useState, useRef } from 'react';

export const useScrollAnimation = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (options.once !== false) {
          observer.unobserve(entry.target);
        }
      } else if (options.once === false) {
        setIsVisible(false);
      }
    }, {
      threshold: 0.1,
      ...options
    });

    observer.observe(currentElement);

    return () => {
      if (currentElement && options.once !== false) {
        // If it observed already and once is true, it is unobserved. 
        // We clean up just in case
        try {
          observer.unobserve(currentElement);
        } catch (e) {
          // ignore
        }
      }
    };
  }, [options]);

  return [elementRef, isVisible];
};
