import ImageContainer from '../../components/ImageContainer';
import { gutter } from '../../utils/constants';
import HorizontalScroll from 'react-scroll-horizontal';

import { usePopup } from '../Contexts/PopupContext';
import Title from '../Title';

type Props = {
  photos: Photo[];
};

const GallerySlide = ({ photos }: Props) => {
  const { openPopup } = usePopup(photos);

  //TODO
  const page = {
    title: 'lofoten',
    description: 'sadf',
  };

  return (
    <div className=" h-full w-full">
      <HorizontalScroll reverseScroll>
        <div
          className="bg-white py-10 px-8 flex-shrink-0"
          style={{ width: '350px' }}
        >
          <Title title={page?.title || ''} />
          <p className="font-light leading-loose trackertext-sm">
            {page?.description}
          </p>
        </div>

        {photos
          .sort((a, b) => b.customMetadata.order - a.customMetadata.order)
          .map((photo, i) => (
            <ImageContainer
              woWrapper
              photo={photo}
              key={i}
              style={{ margin: `0 ${gutter}px` }}
              onClick={() => openPopup(photo.fileId)}
            />
          ))}
      </HorizontalScroll>
    </div>
  );
};

export default GallerySlide;
