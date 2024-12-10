import PageTitle from '@/components/app/PageTitle'
import PreviousOrNextPages from '@/components/app/PreviousOrNextPages'
import PageWrapper from '@/components/common/PageWrapper'
import { AppPagePaths } from '@/enums'

export default function NotFound() {
    return (
        <PageWrapper>
            <PageTitle pagePath={AppPagePaths.NOT_FOUND} />
            <p>La page souhaitée n'existe malheureusement pas (ou plus), ou une faute de frappe empêche la page de s'ouvrir.</p>
            <br />
            <PreviousOrNextPages previous={AppPagePaths.ACCUEIL} />
        </PageWrapper>
    )
}
