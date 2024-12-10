'use client'

import IconWrapper from '@/components/common/IconWrapper'
import { APP_PHOTOS } from '@/config/app.config'
import { AppPhotoIds, IconIds } from '@/enums'
import { SessionDeFormation } from '@/interfaces'
import { cn, defaultAlt } from '@/utils'
import Image from 'next/image'

export default function SessionCard({
    session,
    showInscriptionButton = true,
    showInscription,
    setShowInscription,
}: {
    session: SessionDeFormation
    showInscriptionButton?: boolean
    showInscription: boolean
    setShowInscription: (showInscription: boolean) => void
}) {
    return (
        <div className="relative flex size-full flex-col gap-2 py-3 text-base">
            <div className="z-10 flex gap-2">
                <IconWrapper icon={IconIds.CALENDAR} className="size-7 min-w-7 text-primary" />
                <p className="font-bold">{session.date}</p>
            </div>
            <div className="z-10 flex gap-2">
                <IconWrapper icon={IconIds.LOCATION} className="size-7 min-w-7 text-primary" />
                <p className="font-bold">{session.lieu}</p>
            </div>
            {session.horaires.length >= 1 && (
                <div className="z-10 flex gap-2">
                    <IconWrapper icon={IconIds.TIME} className="size-7 min-w-7 text-primary" />
                    <div className="flex flex-col">
                        {session.horaires.map((horaire) => (
                            <p key={horaire} className="">
                                {horaire}
                            </p>
                        ))}
                    </div>
                </div>
            )}
            <div className="z-10 flex gap-2">
                <IconWrapper icon={IconIds.PRICE} className="size-7 min-w-7 text-primary" />
                <p className="">{session.prix}</p>
            </div>
            {showInscriptionButton && (
                <button
                    className={cn('flex w-full items-center justify-center gap-2 rounded-lg px-3 py-2 mt-2 transition-all duration-300 ease-in-out', {
                        'text-white bg-primary': showInscription,
                        'text-primary hover:bg-primary hover:text-white bg-tertiary': !showInscription,
                    })}
                    onClick={() => setShowInscription(!showInscription)}
                >
                    <p className="text-xl font-bold">S'inscrire en 3 étapes</p>
                    <IconWrapper icon={showInscription ? IconIds.CLOSE : IconIds.CHEVRON_RIGHT} className="size-6 min-w-6" />
                </button>
            )}
            <Image
                src={APP_PHOTOS[AppPhotoIds.OLFACTOCOACHING_FLEUR].src}
                width={50}
                height={50}
                className={cn('absolute right-1 z-0 rounded-md object-contain', {
                    'top-2': showInscriptionButton,
                    'bottom-2': !showInscriptionButton,
                })}
                alt={defaultAlt()}
            />
        </div>
    )
}
