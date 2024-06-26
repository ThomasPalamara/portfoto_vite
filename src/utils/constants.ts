import i18n from '../i18n';

export const siteTitle = 'Thomas Palamara Photography';
export const gutter = 15;

const slugs = [
  'lofoten',
  'london-parks',
  'scottish-highlands',
  'british-coastline',
];

export const categories: Category[] = slugs.map((slug) => ({
  title: i18n.t(`categories:${slug}.title`),
  slug,
  description: i18n.t(`categories:${slug}.description`),
}));
