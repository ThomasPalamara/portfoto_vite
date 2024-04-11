import { StrictMode, Suspense, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import 'tailwindcss/tailwind.css';
import './index.css';

import router from './router';
import { PopupContextProvider } from './components/Contexts/PopupContext';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function App() {
  useEffect(() => {
    //Wake up the API
    fetch(import.meta.env.VITE_API_URL).catch((err) => {
      console.error(err);
    });
  }, []);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <PopupContextProvider>
        <RouterProvider router={router} />
      </PopupContextProvider>
    </Suspense>
  );
}

const app = createRoot(document.getElementById('root')!);

app.render(
  <StrictMode>
    <HelmetProvider>
      <Helmet>
        <link rel="dns-prefetch preconnect" href="https://ik.imagekit.io" />
        <link
          rel="dns-prefetch preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="dns-prefetch preconnect"
          href="https://portfoto-api.onrender.com"
        />
      </Helmet>
      <App />
    </HelmetProvider>
  </StrictMode>
);
