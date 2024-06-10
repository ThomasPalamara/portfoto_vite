import { ImgHTMLAttributes, useState } from 'react';
import { getFadeInClasses } from '../utils/hooks';

type Props = {
  photo: Partial<Photo> & { filePath: string };
  quality?: number;
  onClick?: (arg0: any) => void;
  [key: string]: any;
};

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
