import { APP_PHOTOS } from '@/config/app.config'
import { AppPhotoIds } from '@/enums'
import { cn, defaultAlt } from '@/utils'
import Image from 'next/image'

export default function ImageWrapper({
    width = 300,
    height = 100,
    ...props
}: {
    id: AppPhotoIds
    width?: number
    height?: number
    className?: string
}) {
    const photoConfig = APP_PHOTOS[props.id]
    return (
        <>
            <div className={cn('rounded-xl overflow-hidden w-full max-w-[800px] mx-auto', props.className)}>
                <Image
                    src={photoConfig.src}
                    placeholder="blur"
                    layout="responsive"
                    blurDataURL={APP_PHOTOS[AppPhotoIds.NEZ_LAVANDE].src}
                    alt={photoConfig.alt ?? defaultAlt()}
                    width={width}
                    height={height}
                />
            </div>
            <p className="mx-auto mt-1 text-center text-xs italic">{photoConfig.alt ?? defaultAlt()}</p>
            <br />
        </>
    )
}
