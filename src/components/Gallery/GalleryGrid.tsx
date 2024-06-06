import ImageContainer from '../../components/ImageContainer';
import { gutter } from '../../utils/constants';
import Masonry from '@mui/lab/Masonry';
import Title from '../Title';
import { usePopup } from '../Contexts/PopupContext';
import { useIsMobile } from '../../utils/hooks';

type Props = { photos?: Photo[]; category: Category };

const GalleryGrid = ({ photos, category }: Props) => {
  const { openPopup } = usePopup(photos || []);
  const isMobile = useIsMobile();
  const colSize = isMobile ? '49%' : '32%';
  return (
    <Masonry columns={4} spacing={2}>
      <div className="bg-white pt-8 pb-12 px-7 " style={{ width: colSize }}>
        <Title title={category?.title || ''} />
        <p className="font-light trackertext-sm">{category?.description}</p>
        <div
          className="inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-warning opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
          role="status"
        >
          <span className="absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>

      {photos &&
        photos.length > 0 &&
        photos.map((photo) => (
          <div
            key={photo.fileId}
            style={{
              width: colSize,
              marginBottom: gutter,
            }}
          >
            <ImageContainer
              photo={photo}
              quality={80}
              onClick={() => openPopup(photo.fileId)}
            />
          </div>
        ))}
      <div style={{ width: colSize }}>&nbsp;</div>
      <div style={{ width: colSize }}>&nbsp;</div>
    </Masonry>
  );
};

export default GalleryGrid;
