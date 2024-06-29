import { ImgHTMLAttributes, useState } from 'react';
import { getFadeInClasses } from '../utils/hooks';

const ImageContainer = ({
  className,
  ...other
}: ImgHTMLAttributes<HTMLImageElement>) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <img
      className={`${className} ${getFadeInClasses(loaded, 0.5)}`}
      width={0}
      height={0}
      onLoad={() => {
        setLoaded(true);
      }}
      loading="lazy"
      {...other}
    />
  );
};

export default ImageContainer;
