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

export const sortPhotos = (a: Photo, b: Photo) => {
  const x = a.customMetadata.Order;
  const y = b.customMetadata.Order;
  if (x === undefined) {
    return 1;
  }
  if (y === undefined) {
    return -1;
  }
  return x - y;
};
