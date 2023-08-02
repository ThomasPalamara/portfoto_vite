import ImageKit from 'imagekit';
import { GetStaticPaths, GetStaticProps } from 'next';
import React, { useEffect, useState } from 'react';
import GallerySlide from '../../components/Gallery/GallerySlide';
import GalleryGrid from '../../components/Gallery/GalleryGrid';
import GalleryControl from '../../components/Gallery/GalleryControl';
import axios from 'axios';
import { Cloudinary } from '@cloudinary/url-gen';

type Props = { photos: Photo[]; meta: any };

const Category: React.FC<Props> = ({ photos }) => {
  const cld = new Cloudinary({ cloud: { cloudName: 'dun6mqvor' } });
  const [grid, setGrid] = useState(
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('grid') || 'false')
      : false
  );
  const [results, setResults] = useState<any>([]);

  let category = 'lofoten';
  // let category = params?.category;
  if (Array.isArray(category)) {
    category = category[0];
  }

  useEffect(() => {
    const getPhotos = async () => {
      // return await axios
      //   .get(
      //     'http://api.imagekit.io/v1/files/?skip=0&limit=100&path=london_parks',
      //     {
      //       // headers: { 'Access-Control-Allow-Origin': '*' },
      //       withCredentials: false,
      //       params: {
      //         // access_token: SECRET_TOKEN,
      //       },
      //     }
      //   )
      //   .then((response) => {
      //     console.log(response.data);
      //     console.log(response.status);
      //     console.log(response.statusText);
      //     console.log(response.headers);
      //     console.log(response.config);
      //   });
      const imagekit = new ImageKit({
        publicKey: import.meta.env.VITE_IK_PUBLIC_KEY || '',
        privateKey: import.meta.env.VITE_IK_PRIVATE_KEY || '',
        urlEndpoint: 'https://ik.imagekit.io/uiw3np2kr8ww/',
      });
      return await imagekit.listFiles({
        skip: 0,
        limit: 100,
        path: category?.replace('-', '_'),
      });
    };
    setResults(getPhotos());
  }, [category]);

  console.log('results :', results);
  return (
    <>
      <GalleryControl grid={grid} setGrid={setGrid} />
      {/* {grid && results ? (
        <GalleryGrid photos={results} />
      ) : (
        <GallerySlide photos={results} />
      )} */}
    </>
  );
};

export default Category;

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   // var imagekit = new ImageKit({
//   //   publicKey: process.env.NEXT_PUBLIC_IK_PUBLIC_KEY || '',
//   //   privateKey: process.env.IK_PRIVATE_KEY || '',
//   //   urlEndpoint: process.env.NEXT_PUBLIC_IK_URL_ENDPOINT || '',
//   // });
//   // let category = params?.category;
//   // if (Array.isArray(category)) {
//   //   category = category[0];
//   // }
//   // const result = await imagekit.listFiles({
//   //   skip: 0,
//   //   limit: 100,
//   //   path: category?.replace('-', '_'),
//   // });
//   // return { props: { photos: result } };
// };

// export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
//   return {
//     paths: [], //indicates that no page needs be created at build time
//     fallback: 'blocking', //indicates the type of fallback
//   };
// };
