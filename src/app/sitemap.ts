import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/constants/site';

const ROUTES: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  priority: number;
}> = [
  { path: '/', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/cricket', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/affiliate', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/download', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/login', changeFrequency: 'yearly', priority: 0.4 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
