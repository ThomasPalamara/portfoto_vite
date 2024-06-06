import ImageKitContainer from '../ImageKitContainer';
import { gutter } from '../../utils/constants';
import HorizontalScroll from 'react-scroll-horizontal';

import { usePopup } from '../Contexts/PopupContext';
import Title from '../Title';
import { useState } from 'react';

type Props = { photos?: Photo[]; category: Category };

const GallerySlide = ({ photos, category }: Props) => {
  const [loadedPictures, setLoadedPictures] = useState(0);
  const HScroll = HorizontalScroll as any;
  const { openPopup } = usePopup(photos || []);
  console.log('loadedPictures :', loadedPictures);
  console.log('photos.length :', photos.length);
  const transitionClasses = `${
    loadedPictures === photos?.length ? 'opacity-1' : 'opacity-0'
  } transition-opacity duration-1000 ease-in-out`;

  const galleryElements = () => [
    <div
      key="first"
      className={`${transitionClasses} bg-white py-10 px-8 flex-shrink-0`}
      style={{ width: '350px' }}
    >
      <Title title={category?.title || ''} />
      <p className="font-light leading-loose trackertext-sm">
        {category?.description}
      </p>
    </div>,
    ...(photos
      ? photos
          .sort((a, b) => b.customMetadata.order - a.customMetadata.order)
          .map((photo, i) => (
            <ImageKitContainer
              woWrapper
              photo={photo}
              key={i}
              quality={20}
              style={{ margin: `0 ${gutter}px` }}
              onClick={() => openPopup(photo.fileId)}
              hasLoaded={() => {
                setLoadedPictures((e) => e + 1);
              }}
            />
          ))
      : []),
  ];

  return (
    <div className="h-full w-full">
      {photos && photos.length > 0 && (
        <HScroll reverseScroll>{galleryElements()}</HScroll>
      )}
    </div>
  );
};

export default GallerySlide;
