import { useState } from 'react';

type Props = {
  photo: Partial<Photo> & { filePath: string };
  quality?: number;
  woWrapper?: boolean;
  onClick?: (arg0: any) => void;
  [key: string]: any;
};

const ImageContainer = ({
  photo,
  quality = 20,
  woWrapper = false,
  onClick,
  ...other
}: Props) => {
  const [loaded, setLoaded] = useState(false);
  console.log('loaded :', loaded);
  const comp = (
    <img
      onClick={() => onClick && onClick(photo)}
      src={
        `https://ik.imagekit.io/uiw3np2kr8ww/tr:q-${quality}` + photo.filePath
      }
      alt=""
      width={0}
      height={0}
      onLoad={() => {
        setLoaded(true);
      }}
      className={`h-full w-auto cursor-pointer transition-opacity duration-1000 ease-in-out ${
        loaded ? 'opacity-100' : 'opacity-0'
      }`}
      loading="lazy"
      data-id={photo.fileId}
      {...other}
    />
  );
  if (woWrapper) return comp;
  return <figure className="h-full w-auto text-center">{comp}</figure>;
};

export default ImageContainer;
