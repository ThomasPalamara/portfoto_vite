import Title from '../components/Title';
import { useIsMobile } from '../utils/hooks';
import { siteTitle } from '../utils/constants';
import { Helmet } from 'react-helmet-async';
import ImageWithTransition from '../components/ImageWithTransition';
import { useTranslation } from 'react-i18next';

const AboutMe = () => {
  const isMobile = useIsMobile();
  const { t } = useTranslation('aboutMe');

  const paragraphs: string[] = t('paragraphs', { returnObjects: true });
  return (
    <>
      <Helmet>
        <title>{t('title') + ' - ' + siteTitle}</title>
        <link
          rel="preload"
          as="image"
          href="https://ik.imagekit.io/uiw3np2kr8ww/about_me.jpg"
        />
      </Helmet>
      <div
        className={isMobile ? '' : 'flex flex-col md:flex-row'}
        style={{ minHeight: isMobile ? 'unset' : '80%' }}
      >
        <div
          className={`w-full relative overflow-hidden ${
            isMobile ? 'h-44' : ''
          }`}
        >
          <ImageWithTransition
            src="https://ik.imagekit.io/uiw3np2kr8ww/about_me.jpg"
            alt="picture of Thomas"
            width={0}
            height={0}
            className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
              isMobile ? 'w-full top-2/3' : 'w-auto h-full top-1/2'
            }`}
            style={{ maxWidth: 'unset' }}
          />
        </div>
        <div className="bg-dark-gray px-8 py-12 text-base tracking-wide font-extralight text-white leading-normal flex flex-col justify-center overflow-scroll">
          <Title color="white" title="About me" />
          {paragraphs.map((paragraph, i) => (
            <p key={i} className="pb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutMe;
