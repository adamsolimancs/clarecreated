// app/sitemap.ts
import type { MetadataRoute } from 'next';

const LAST_MODIFIED = new Date()

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://clarecreated.com',
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://clarecreated.com/about',
      lastModified: LAST_MODIFIED,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://clarecreated.com/recipes',
      lastModified: LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];
}
