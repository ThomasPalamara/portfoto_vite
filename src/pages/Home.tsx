// import Head from 'next/head';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import { siteTitle } from '../utils/constants';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation('common');
  return (
    <>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={t('siteDescription')} />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <Hero />
    </>
  );
};

export default Home;
