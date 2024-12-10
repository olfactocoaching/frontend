import { APP_METADATA } from '@/config/app.config'
import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        description: APP_METADATA.SITE_DESCRIPTION,
        lang: 'en',
        start_url: '/',
    }
}
