// import Head from 'next/head';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Thomas Palamara</title>
        <meta name="description" content="My photograpy portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <Hero />
    </>
  );
};

export default Home;
