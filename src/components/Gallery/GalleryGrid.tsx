import React from 'react';
import ImageContainer from '../../components/ImageContainer';
import { gutter } from '../../utils/constants';
import Masonry from '@mui/lab/Masonry';
import Title from '../Title';
import { usePopup } from '../Contexts/PopupContext';

type Props = { photos: Photo[] };

const Category: React.FC<Props> = ({ photos }) => {
  const { openPopup } = usePopup(photos);
  //TODO
  const page = {
    title: 'lofoten',
    description: 'sadf',
  };

  return (
    <Masonry columns={4} spacing={2}>
      <div className="bg-white pt-8 pb-12 px-7 " style={{ width: '32%' }}>
        <Title title={page?.title || ''} />
        <p className="font-light trackertext-sm">{page?.description}</p>
      </div>
      {photos.map((photo) => (
        <div
          key={photo.fileId}
          style={{
            width: '32%',
            marginBottom: gutter,
          }}
        >
          <ImageContainer
            photo={photo}
            onClick={() => openPopup(photo.fileId)}
          />
        </div>
      ))}
    </Masonry>
  );
};

export default Category;
