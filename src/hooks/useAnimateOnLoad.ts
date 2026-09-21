import { useEffect } from 'react';

export const useAnimateOnLoad = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const animateElements = document.querySelectorAll('.animate');
      animateElements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add('show');
        }, index * 100);
      });
    }, 50);

    return () => clearTimeout(timer);
  }, []);
};
