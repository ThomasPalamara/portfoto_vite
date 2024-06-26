import {
  Outlet,
  createRoutesFromElements,
  matchRoutes,
  useLocation,
} from 'react-router-dom';

import 'tailwindcss/tailwind.css';
import './index.css';

import Nav from './components/Navigation/Nav';
import Footer from './components/Navigation/Footer';
import PageTitle from './components/Navigation/PageTitle';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { routes } from './router';
import { useIsMobile } from './utils/hooks';
import { useTranslation } from 'react-i18next';

const PageLayout = () => {
  const isMobile = useIsMobile();
  const { t } = useTranslation('nav');
  const navHeight = 100;
  const footerHeight = 60;

  let location = useLocation();
  const match = matchRoutes(
    createRoutesFromElements(routes),
    location.pathname
  );
  const is404 = match && match[match.length - 1].route.path === '*';

  const arrPath = location.pathname.split('/');
  const pageName = arrPath[arrPath.length - 1].replace('-', ' ');

  const pageNameString = is404 ? '404' : pageName === '' ? t('home') : pageName;

  return (
    <div className="body h-full min-h-screen px-2 md:px-16">
      <Nav height={navHeight} />

      <PageTitle title={pageNameString} />

      <TransitionGroup component={null}>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <div
            className="w-full p-0 m-0 md:overflow-x-hidden flex justify-center"
            style={{
              height:
                !isMobile || location.pathname === '/'
                  ? `calc(99vh - ${navHeight + footerHeight}px)`
                  : 'unset',
            }}
          >
            <Outlet />
          </div>
        </CSSTransition>
      </TransitionGroup>
      <Footer height={footerHeight} />
    </div>
  );
};
export default PageLayout;
