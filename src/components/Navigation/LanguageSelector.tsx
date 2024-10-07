import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useIsMobile } from '../../utils/hooks';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const languageOptions = ['en', 'fr'];

  const isMobile = useIsMobile();

  const [showOptions, setShowOptions] = useState(false);

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
    setShowOptions(false);
  };

  return (
    <div className="relative">
      <div
        className={`cursor-pointer ${isMobile && 'hidden'}`}
        onClick={() => setShowOptions(!showOptions)}
      >
        <img
          style={{ maxWidth: '20px' }}
          src={`flags/${currentLanguage}.svg`}
        />
        <span>{currentLanguage.toUpperCase()}</span>
      </div>

      <div
        className={`${showOptions || isMobile ? '' : 'hidden'}  ${
          !isMobile && 'absolute left-1/2 transform -translate-x-1/2 shadow'
        } flex gap-7 bg-white pt-2 pb-1 px-5 shadow rounded-full`}
      >
        {languageOptions.map((language) => (
          <button onClick={() => handleLanguageChange(language)}>
            <img src={`flags/${language}.svg`} />
            <span>{language.toUpperCase()}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
