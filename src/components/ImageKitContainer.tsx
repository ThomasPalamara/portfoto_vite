import { useState } from 'react';
import { getFadeInClasses } from '../utils/hooks';

type Props = {
  photo: Partial<Photo> & { filePath: string };
  quality?: number;
  woWrapper?: boolean;
  onClick?: (arg0: any) => void;
  hasLoaded?: () => void;
  [key: string]: any;
};

const ImageContainer = ({
  photo,
  quality = 20,
  woWrapper = false,
  onClick,
  hasLoaded = () => {},
  ...other
}: Props) => {
  const [loaded, setLoaded] = useState(false);

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
        hasLoaded();
      }}
      className={`h-full w-auto cursor-pointer ${getFadeInClasses(
        loaded,
        0.5
      )}`}
      loading="lazy"
      data-id={photo.fileId}
      {...other}
    />
  );
  if (woWrapper) return comp;
  return <figure className="h-full w-auto text-center flex justify-center items-center">{comp}</figure>;
};

export default ImageContainer;
