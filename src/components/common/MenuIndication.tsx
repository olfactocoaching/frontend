import { AppPagePaths, IconIds } from '@/enums'
import { getPageConfig } from '@/utils'
import IconWrapper from './IconWrapper'
import LinkWrapper from './LinkWrapper'

export default function MenuIndication(props: { secondaryPath: AppPagePaths }) {
    return (
        <nav className="mb-6 mt-2 flex items-center gap-1 text-sm lg:hidden">
            <LinkWrapper href={getPageConfig(AppPagePaths.ACCUEIL).path} className="default-link-style">
                <p className="truncate">Accueil</p>
            </LinkWrapper>
            <IconWrapper icon={IconIds.CHEVRON_RIGHT} className="size-5 min-w-5 text-inactive" />
            <LinkWrapper href={getPageConfig(props.secondaryPath).path} className="default-link-style">
                <p className="text-wrap">{getPageConfig(props.secondaryPath).headerName}</p>
            </LinkWrapper>
        </nav>
    )
}
