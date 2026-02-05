import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/portfolio';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Category from './pages/portfolio/Category';
import PageLayout from './PageLayout';
import NotFound from './pages/NotFound';
import PetPhotography from './pages/petPhotography';

const isPetSubdomain = window.location.hostname.startsWith('pets.');

export const routes = isPetSubdomain ? (
  <Route element={<PageLayout />}>
    <Route path="/*" element={<PetPhotography />} />
  </Route>
) : (
  <Route element={<PageLayout />}>
    <Route path="/" element={<Home />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/portfolio/:category" element={<Category />} />
    <Route path="/about-me" element={<AboutMe />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<NotFound />} />
  </Route>
);

export default createBrowserRouter(createRoutesFromElements(routes));
