// app/sitemap.ts
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: 'https://clarecreated.com',
      lastModified: '2025-08-23',
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://clarecreated.com/about',
      lastModified: '2025-08-23',
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://clarecreated.com/recipes',
      lastModified: '2025-08-23',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];
}