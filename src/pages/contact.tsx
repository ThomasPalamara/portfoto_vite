import React from 'react';
import Title from '../components/Title';
import emailjs from '@emailjs/browser';
import { Alert } from '@mui/material';
import { useIsMobile } from '../utils/hooks';
import { siteTitle } from '../utils/constants';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const form = React.useRef<HTMLFormElement>(null);
  const [done, setDone] = React.useState(false);
  const [error, setError] = React.useState(false);
  const isMobile = useIsMobile();
  const { t } = useTranslation('contact');


  const sendEmail = (e: any) => {
    setError(false);
    setDone(false);
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          'service_bby2g87',
          'template_iwu8059',
          form.current,
          import.meta.env.VITE_EMAILJS_PUBLIC
        )
        .then(
          () => {
            setDone(true);
          },
          (e) => {
            setError(true);
            console.log('error :', e);
          }
        );
    } else setError(true);
  };

  return (
    <>
      <Helmet>
        <title>{t('title') + ' - ' + siteTitle}</title>
        <link
          rel="preload"
          as="image"
          href="https://ik.imagekit.io/uiw3np2kr8ww/contact.jpg"
        />
      </Helmet>
      <div
        className={
          isMobile ? 'flex flex-col-reverse' : 'flex flex-col md:flex-row'
        }
      >
        <div className="bg-white pr-10 pl-12 text-base font-extralight overflow-scroll flex flex-col justify-center pt-24 pb-9 md:py-9">
          <Title title="Contact" />
          <p className="pb-2">{t('paragraph1')}</p>
          <p className="pb-8">
            {t('paragraph2')}{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 font-normal"
              href="https://www.instagram.com/tomapalamara/"
              aria-label="Instagram account"
            >
              @tomapalamara
            </a>
            .
          </p>

          {error && (
            <Alert severity="error" className="mb-4">
              {t('error')}{' '}
              <span
                className="font-bold"
                onClick={() =>
                  navigator.clipboard.writeText('palamara.thomas@gmail.com')
                }
              >
                palamara.thomas@gmail.com
              </span>
            </Alert>
          )}
          {done ? (
            <Alert className="mt-6" severity="success">
              {t('success')}
            </Alert>
          ) : (
            <form ref={form} onSubmit={sendEmail}>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/2">
                  <input
                    className="bg-gray-100 appearance-none border-b border-gray-100 w-full py-2 px-4 text-gray-700 font-light"
                    id="name"
                    type="text"
                    name="name"
                    placeholder={t('form.name')}
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/2">
                  <input
                    className="bg-gray-100 appearance-none border-b border-gray-100 w-full py-2 px-4 text-gray-700 font-light"
                    id="email"
                    type="email"
                    name="email"
                    placeholder={t('form.email')}
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-11/12">
                  <textarea
                    className="bg-gray-100 appearance-none border-b border-gray-100 w-full py-2 px-4 text-gray-700 font-light"
                    name="message"
                    placeholder={t('form.message')}
                    style={{ height: '100px' }}
                  />
                </div>
              </div>
              <button
                className="bg-gray-700 hover:bg-gray-400 text-white py-2 px-8 inline-flex items-center"
                type="submit"
              >
                {t('form.send')}
              </button>
            </form>
          )}
        </div>
        <div
          className={`w-full relative overflow-hidden ${
            isMobile ? 'hidden' : ''
          }`}
        >
          <div
            className="w-full h-full relative overflow-hidden bg-cover bg-center"
            style={{
              maxWidth: '700px',
              backgroundImage:
                'url("https://ik.imagekit.io/uiw3np2kr8ww/contact.jpg")',
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
