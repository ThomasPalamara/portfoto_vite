import { ProGallery } from 'pro-gallery';
import 'pro-gallery/dist/statics/main.css';
import { useRef } from 'react';
import { usePopup } from '../Contexts/PopupContext';

type Props = { photos?: Photo[]; category: Category };

export const GalleryGrid2 = ({ photos }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { openPopup } = usePopup(photos || []);
  const items = photos || [];

  const itemsWithMediaUrl = items.map((item) => ({
    itemId: item.fileId,
    metaData: item,
    mediaUrl: item.url,
  }));

  // The size of the gallery container. The images will fit themselves in it
  // The options of the gallery (from the playground current state)
  const options = {
    layoutParams: {
      structure: {
        galleryLayout: 0,
      },
      groups: {
        groupSize: 3,
        numberOfGroupsPerRow: 1,
        density: 0.4,
      },
    },
  };
  // The size of the gallery container. The images will fit themselves in it
  const container = {
    width: containerRef.current?.offsetWidth || window.innerWidth,
  };


  const eventsListener = (eventName: string, eventData: any) => {

    if(eventName === 'ITEM_ACTION_TRIGGERED') {
      openPopup(eventData.id);
      console.log('eventData :', eventData);
    }
  }


  const scrollingElement = window;

  return (
    <div ref={containerRef} className="h-full w-full">
      <ProGallery
        items={itemsWithMediaUrl}
        options={options}
        container={container}
        eventsListener={eventsListener}
        scrollingElement={scrollingElement}
        
      />
    </div>
  );
};

export default GalleryGrid2;
