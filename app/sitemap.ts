import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://techrobotes.io';

  const routes = [
    '',
    '/features',
    '/how-it-works',
    '/pricing',
    '/contact',
    '/privacy',
    '/terms',
    '/solutions/clinics', // <--- Added new niche page here
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}