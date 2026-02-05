import i18n from '../i18n';

export const siteTitle = 'Thomas Palamara Photography';
export const gutter = 15;

const slugs = [
  'lofoten',
  'london-parks',
  'scottish-highlands',
  'british-coastline',
  'new-zealand',
];

export const categories: Category[] = slugs.map((slug) => ({
  title: i18n.t(`categories:${slug}.title`),
  slug,
  description: i18n.t(`categories:${slug}.description`),
}));

export const navItems = [
  {
    title: 'home',
    slug: '/',
  },
  {
    title: 'portfolio',
    slug: '/portfolio',
    isDropdown: false,
  },
  {
    title: 'about',
    slug: '/about-me',
  },
  {
    title: 'contact',
    slug: '/contact',
  },
];

export const petNavItems = [
  {
    title: 'home',
    slug: '/',
  },
  {
    title: 'gallery',
    slug: '/gallery',
  },
  {
    title: 'contact',
    slug: '/contact',
  },
];
