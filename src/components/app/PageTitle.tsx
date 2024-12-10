import { AppPagePaths } from '@/enums'
import { getPageConfig } from '@/utils'

export default function PageTitle(props: { pagePath: AppPagePaths }) {
    return <h1 className="mb-4 w-fit rounded-xl bg-tertiary px-3 py-2 text-2xl font-bold text-primary">{getPageConfig(props.pagePath).pageTitle}</h1>
}
