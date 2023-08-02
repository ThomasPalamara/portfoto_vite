import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';

import 'tailwindcss/tailwind.css';
import './index.css';

import routes from '~react-pages';
import { PopupContextProvider } from './components/Contexts/PopupContext';
import Nav from './components/Navigation/Nav';
import Footer from './components/Navigation/Footer';

// eslint-disable-next-line no-console
console.log(routes);

function App() {
  const navHeight = 100;
  const footerHeight = 60;

  // const arrPath = router.asPath.split('/');
  // const pageName = arrPath[arrPath.length - 1].replace('-', ' ');
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {/* <IKContext
        publicKey={process.env.NEXT_PUBLIC_IK_PUBLIC_KEY}
        urlEndpoint={process.env.NEXT_PUBLIC_IK_URL_ENDPOINT}
        transformationPosition="path"
        authenticationEndpoint="http://www.yourserver.com/auth"
      > */}
      <PopupContextProvider>
        <div className="body h-full min-h-screen px-16">
          <Nav height={navHeight} />
          {/* <PageTitle title={pageName === '' ? 'home' : pageName} /> */}
          <div
            className="w-full p-0 m-0 overflow-x-hidden flex"
            style={{ height: `calc(99vh - ${navHeight + footerHeight}px)` }}
          >
            {useRoutes(routes)}
          </div>

          <Footer height={footerHeight} />
        </div>
      </PopupContextProvider>
      {/* </IKContext> */}
    </Suspense>
  );
}

const app = createRoot(document.getElementById('root')!);

app.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);
