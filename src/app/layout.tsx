import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import { APP_METADATA, APP_PHOTOS } from '../config/app.config'
import { cn, defaultAlt } from '../utils'
import { Suspense } from 'react'
import { ThemeProvider } from 'next-themes'
import { AppPhotoIds, AppThemes } from '@/enums'
import DefaultFallback from '@/components/layouts/DefaultFallback'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/layouts/Footer'
import HeaderDesktop from '@/components/layouts/HeaderDesktop'
import HeaderMobile from '@/components/layouts/HeaderMobile'

// https://fonts.google.com/
const font = DM_Sans({ weight: ['400', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
    title: APP_METADATA.SITE_NAME,
    description: APP_METADATA.SITE_DESCRIPTION,
    applicationName: APP_METADATA.SITE_NAME,
    metadataBase: new URL(APP_METADATA.SITE_URL),
    manifest: '/manifest.json',
    appleWebApp: {
        title: APP_METADATA.SITE_NAME,
        capable: true,
        statusBarStyle: 'black-translucent',
    },
    openGraph: {
        type: 'website',
        title: APP_METADATA.SITE_NAME,
        siteName: APP_METADATA.SITE_NAME,
        description: APP_METADATA.SITE_DESCRIPTION,
        url: APP_METADATA.SITE_URL,
        images: [
            {
                url: APP_PHOTOS[AppPhotoIds.OLFACTOCOACHING_BANDEAU].src,
                alt: defaultAlt(),
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: APP_METADATA.SITE_NAME,
        images: [APP_PHOTOS[AppPhotoIds.OLFACTOCOACHING_BANDEAU].src],
        description: APP_METADATA.SITE_DESCRIPTION,
    },
}

// todo: https://nextjs.org/docs/app/building-your-application/optimizing/metadata#json-ld
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cn(font.className, 'h-screen w-screen bg-white text-default')}>
                <ThemeProvider attribute="class" disableTransitionOnChange themes={[AppThemes.LIGHT]} defaultTheme={AppThemes.LIGHT}>
                    <main className="relative flex size-full flex-col text-lg transition-all">
                        <HeaderMobile className="lg:hidden" />
                        <HeaderDesktop className="hidden lg:flex" />
                        <Suspense fallback={<DefaultFallback />}>{children}</Suspense>
                        <Footer />
                        <Toaster position="bottom-center" reverseOrder={true} />
                    </main>
                </ThemeProvider>
            </body>
        </html>
    )
}
