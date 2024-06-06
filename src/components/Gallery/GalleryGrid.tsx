import ImageKitContainer from '../ImageKitContainer';
import { gutter } from '../../utils/constants';
import Masonry from '@mui/lab/Masonry';
import Title from '../Title';
import { usePopup } from '../Contexts/PopupContext';
import { useIsMobile } from '../../utils/hooks';
import { useState } from 'react';

type Props = { photos?: Photo[]; category: Category };

const GalleryGrid = ({ photos, category }: Props) => {
  const [loadedPictures, setLoadedPictures] = useState(0);
  const { openPopup } = usePopup(photos || []);
  const isMobile = useIsMobile();
  const colSize = isMobile ? '49%' : '32%';

  const transitionClasses = `${
    loadedPictures === photos?.length ? 'opacity-1' : 'opacity-0'
  } transition-opacity duration-1000 ease-in-out`;

  return (
    <Masonry columns={4} spacing={2}>
      <div
        className={`${transitionClasses} bg-white pt-8 pb-12 px-7`}
        style={{ width: colSize }}
      >
        <Title title={category?.title || ''} />
        <p className="font-light trackertext-sm">{category?.description}</p>
      </div>

      {photos &&
        photos.length > 0 &&
        photos.map((photo) => (
          <div
            key={photo.fileId}
            className={transitionClasses}
            style={{
              width: colSize,
              marginBottom: gutter,
            }}
          >
            <ImageKitContainer
              photo={photo}
              quality={80}
              onClick={() => openPopup(photo.fileId)}
              hasLoaded={() => {
                setLoadedPictures((e) => e + 1);
              }}
            />
          </div>
        ))}
    </Masonry>
  );
};

export default GalleryGrid;
