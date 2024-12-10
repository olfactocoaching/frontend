'use client'

import { cn, defaultAlt } from '@/utils'
import LinkWrapper from '../common/LinkWrapper'
import { APP_PAGES, APP_PHOTOS } from '@/config/app.config'
import Image from 'next/image'
import { AppPhotoIds } from '@/enums'
import dayjs from 'dayjs'

export default function Footer(props: { className?: string }) {
    return (
        <div className={cn('relative w-full flex justify-between items-end gap-4 text-sm px-4 py-2 z-50 pt-6', props.className)}>
            <div className="z-50 flex w-full flex-col pb-2 text-sm">
                <div className="flex flex-col gap-1">
                    <p className="bg-white/50">&#x2022; Site officiel d'Olfactocoaching ®</p>
                    <p className="bg-white/50">&#x2022; Marque déposée par Elisabeth Molina et Gilles Fournil - Tous droits réservés</p>
                    <p className="bg-white/50">
                        &#x2022; Pour toute reproduction totale ou partielle, veuillez prendre contact avec Elisabeth Molina ou Gilles Fournil
                    </p>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1 pt-4">
                    {APP_PAGES.filter((page) => page.legal).map((legalPage) => (
                        <LinkWrapper key={legalPage.headerName} href={legalPage.path}>
                            <p className="default-link-style">{legalPage.headerName}</p>
                        </LinkWrapper>
                    ))}
                </div>
                <p className="mt-2 font-bold text-quaternary">Version du site: v1 déployée le {dayjs('2024-03-01').format('MM/DD/YYYY')}</p>
            </div>
            <Image
                src={APP_PHOTOS[AppPhotoIds.OLFACTOCOACHING_FLEUR].src}
                width={60}
                height={60}
                className="absolute bottom-2 right-2 z-0 rounded-md object-contain pr-2"
                alt={defaultAlt()}
            />
        </div>
    )
}
