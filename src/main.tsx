import { StrictMode, Suspense, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, useLocation } from 'react-router-dom';

import 'tailwindcss/tailwind.css';
import './index.css';

import router from './router';
import { PopupContextProvider } from './components/Contexts/PopupContext';

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
    <App />
  </StrictMode>
);
