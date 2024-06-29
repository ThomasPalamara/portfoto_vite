import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Hero = () => {
  const titleClasses = 'font-semibold letter-wide text-white';
  const dashClasses = 'hero__dash bg-white w-10 h-0.5 mx-4';
  const { t } = useTranslation('hero');

  return (
    <Link
      to="/portfolio"
      className="h-full w-full bg-center bg-cover hero"
      style={{
        backgroundImage: "url('/hero.jpg')",
      }}
    >
      <div className="md:opacity-0 flex justify-center items-center text-center flex-col h-full hero__title">
        <h4 className={titleClasses}>{t('heading1')}</h4>
        <div className="flex items-center hero__link">
          <div className={dashClasses} />
          <h2 className={titleClasses + ' text-3xl'}>{t('heading2')}</h2>
          <div className={dashClasses} />
        </div>
      </div>
    </Link>
  );
};

export default Hero;
