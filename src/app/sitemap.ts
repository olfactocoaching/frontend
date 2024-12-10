import { APP_METADATA } from '@/config/app.config'
import { AppPagePaths } from '@/enums'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: `${APP_METADATA.SITE_URL}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${APP_METADATA.SITE_URL}${AppPagePaths.EQUIPE}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.95,
        },
        {
            url: `${APP_METADATA.SITE_URL}${AppPagePaths.DEFINITION}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${APP_METADATA.SITE_URL}${AppPagePaths.STAGES}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
    ]
}
