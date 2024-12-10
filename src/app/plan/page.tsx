import PageTitle from '@/components/app/PageTitle'
import MenuIndication from '@/components/common/MenuIndication'
import PageWrapper from '@/components/common/PageWrapper'
import { APP_METADATA } from '@/config/app.config'
import { AppPagePaths } from '@/enums'
import { getPageConfig } from '@/utils'
import { Metadata } from 'next'

const pagePath = AppPagePaths.PLAN
export const metadata: Metadata = {
    title: `${APP_METADATA.SITE_NAME} | ${getPageConfig(pagePath).headerName}`,
}

export default function Page() {
    return (
        <PageWrapper>
            <MenuIndication secondaryPath={pagePath} />
            <PageTitle pagePath={pagePath} />
            <p className="text-inactive">Todo</p>
        </PageWrapper>
    )
}
