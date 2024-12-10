import { APP_PHOTOS } from '@/config/app.config'
import { AppPhotoIds } from '@/enums'
import { defaultAlt } from '@/utils'
import PageWrapper from '../common/PageWrapper'
import Image from 'next/image'

export default function DefaultFallback() {
    return (
        <div className="h-full overflow-scroll">
            <PageWrapper>
                <div className="flex h-96 w-full animate-pulse items-center justify-center rounded-lg">
                    <p className="text-xl font-bold text-primary">Chargement du site...</p>
                    <Image
                        src={APP_PHOTOS[AppPhotoIds.OLFACTOCOACHING_FLEUR].src}
                        width={60}
                        height={60}
                        className="mx-auto mt-4 rounded-md object-contain"
                        alt={defaultAlt()}
                    />
                </div>
            </PageWrapper>
        </div>
    )
}
