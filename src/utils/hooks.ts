import { useEffect, useState } from 'react';

const getIsMobile = () =>
  typeof window !== 'undefined' && window ? window.innerWidth <= 768 : false;

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(getIsMobile());

  useEffect(() => {
    const onResize = () => {
      setIsMobile(getIsMobile());
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return isMobile;
}

export const getFadeInClasses = (trigger: boolean, duration: number = 0.5) => {
  return `transition-opacity duration-${duration * 1000} ease-in-out opacity-${
    trigger ? '100' : '0'
  }`;
};
