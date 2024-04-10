import { Outlet, useLocation } from 'react-router-dom';

import 'tailwindcss/tailwind.css';
import './index.css';

import Nav from './components/Navigation/Nav';
import Footer from './components/Navigation/Footer';
import PageTitle from './components/Navigation/PageTitle';

const PageLayout = () => {
  const navHeight = 100;
  const footerHeight = 60;

  let location = useLocation();
  console.log('location :', location);

  const arrPath = location.pathname.split('/');
  const pageName = arrPath[arrPath.length - 1].replace('-', ' ');

  return (
    <div className="body h-full min-h-screen px-16">
      <Nav height={navHeight} />
      <PageTitle title={pageName === '' ? 'home' : pageName} />
      <div
        className="w-full p-0 m-0 overflow-x-hidden flex"
        style={{ height: `calc(99vh - ${navHeight + footerHeight}px)` }}
      >
        <Outlet />
      </div>
      <Footer height={footerHeight} />
    </div>
  );
};
export default PageLayout;
