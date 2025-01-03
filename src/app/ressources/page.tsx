import PageTitle from '@/components/app/PageTitle'
import MenuIndication from '@/components/common/MenuIndication'
import PageWrapper from '@/components/common/PageWrapper'
import { AppPagePaths } from '@/enums'
import { generatePageMetadata } from '@/utils'

const pagePath = AppPagePaths.RESSOURCES
export const metadata = generatePageMetadata(pagePath)

export default function Page() {
    return (
        <PageWrapper>
            <MenuIndication secondaryPath={pagePath} />
            <PageTitle pagePath={pagePath} />
            <p className="text-inactive">Todo</p>
        </PageWrapper>
    )
}
