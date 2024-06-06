import { ImgHTMLAttributes, useState } from 'react';

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
      className={`${className} transition-opacity duration-500 ease-in-out ${
        loaded ? 'opacity-100' : 'opacity-0'
      }`}
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
