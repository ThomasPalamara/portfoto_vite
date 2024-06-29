import { useEffect, useState } from 'react';
import { categories, siteTitle } from '../../utils/constants';
import GallerySlide from '../../components/Gallery/GallerySlide';
import GalleryGrid from '../../components/Gallery/GalleryGrid';
import GalleryControl from '../../components/Gallery/GalleryControl';
import { sortPhotos, useIsMobile } from '../../utils/hooks';
import { useParams } from 'react-router';
import { Helmet } from 'react-helmet-async';
import Loader from '../../components/Loader';

const Category = () => {
  const [data, setData] = useState<Photo[] | undefined>(undefined);
  const [isLoading, setLoading] = useState(true);
  const { category: categoryParams } = useParams();
  const isMobile = useIsMobile();
  const [grid, setGrid] = useState(false);
  useEffect(() => {
    setGrid(
      typeof window !== 'undefined'
        ? JSON.parse(localStorage.getItem('grid') || 'false')
        : true
    );
  }, [categoryParams]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}category/` + categoryParams)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [categoryParams]);

  const category =
    categories.find((e) => categoryParams === e.slug) || categories[0];

  const Gallery = grid || isMobile ? GalleryGrid : GallerySlide;

  if (isLoading || !data) return <Loader />;

  return (
    <>
      <Helmet>
        <title>{category.title + ' - ' + siteTitle}</title>
      </Helmet>
      {!isMobile && <GalleryControl grid={grid} setGrid={setGrid} />}

      <Gallery photos={data.sort(sortPhotos)} category={category} />
    </>
  );
};

export default Category;
