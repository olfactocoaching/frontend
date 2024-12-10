import AgendaContent from '@/components/app/AgendaContent'
import PageTitle from '@/components/app/PageTitle'
import PreviousOrNextPages from '@/components/app/PreviousOrNextPages'
import ImageWrapper from '@/components/common/ImageWrapper'
import MenuIndication from '@/components/common/MenuIndication'
import PageWrapper from '@/components/common/PageWrapper'
import { APP_METADATA } from '@/config/app.config'
import { AppPagePaths, AppPhotoIds } from '@/enums'
import { getPageConfig } from '@/utils'
import { Metadata } from 'next'

const pagePath = AppPagePaths.AGENDA
export const metadata: Metadata = {
    title: `${APP_METADATA.SITE_NAME} | ${getPageConfig(pagePath).headerName}`,
}

export default function Page() {
    return (
        <PageWrapper>
            <MenuIndication secondaryPath={pagePath} />
            <PageTitle pagePath={pagePath} />
            <AgendaContent />
            <br />
            <ImageWrapper id={AppPhotoIds.OLFACTOCOACHING_ETAPE_1} />
            <PreviousOrNextPages previous={AppPagePaths.STAGES} next={AppPagePaths.TEMOIGNAGES} />
        </PageWrapper>
    )
}
