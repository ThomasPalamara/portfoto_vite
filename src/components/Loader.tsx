import { useEffect, useState } from 'react';
import { getFadeInClasses } from '../utils/hooks';

const ImageContainer = () => {
  const [isTakingAges, setIsTakingAges] = useState(false);
  const [isSpeed, setIsSpeed] = useState(true);

  // If the loading is fast, don't show the loader at all. This is to prevent the loader from flashing on the screen.
  // If the loading is slow, show the text after 4 seconds. This is to inform the user that the application is still loading.
  const textFadeInClasses = getFadeInClasses(isTakingAges, 0.5);
  const loaderFadeInClasses = getFadeInClasses(!isSpeed, 0.5);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTakingAges(true);
    }, 4000);

    const timer2 = setTimeout(() => {
      setIsSpeed(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div
      className={`h-full w-full md:space-x-8 rtl:space-x-reverse md:flex md:justify-center md:items-center flex-col ${loaderFadeInClasses}`}
    >
      <div className="loader animate-pulse" />
      <div className={`text-center ${textFadeInClasses}`}>
        <p className="mb-4 mt-8 text-lg font-light text-gray-500 dark:text-gray-400">
          This application server is hosted for free, the first loading might
          take longer. <br /> Things should be faster after the first load.
        </p>
        <p className="mb-4 text-lg font-bold text-gray-500 dark:text-gray-400">
          Thank you for your patience
        </p>
      </div>
    </div>
  );
};

export default ImageContainer;
