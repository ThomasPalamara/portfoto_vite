import { ProGallery } from 'pro-gallery';
import 'pro-gallery/dist/statics/main.css';
import { useRef } from 'react';

type Props = { photos?: Photo[]; category: Category };

export const GalleryGrid2 = ({ photos }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

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

  // The eventsListener will notify you anytime something has happened in the gallery.
  const eventsListener = (eventName: string, eventData: any) =>
    console.log({ eventName, eventData });

  // The scrollingElement is usually the window, if you are scrolling inside another element, suplly it here
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
