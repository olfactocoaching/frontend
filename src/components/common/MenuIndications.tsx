import IconWrapper from '@/components/common/IconWrapper'
import LinkWrapper from '@/components/common/LinkWrapper'
import { AppPagePaths, IconIds } from '@/enums'
import { cn, getPageConfig } from '@/utils'

export default function MenuIndications(props: { paths: AppPagePaths[]; className?: string }) {
    return (
        <>
            <nav className={cn('flex flex-col items-start lg:flex-row lg:items-center gap-1 text-lg', props.className)}>
                <LinkWrapper href={getPageConfig(AppPagePaths.ACCUEIL).path} className="default-link-style">
                    <p className="truncate">Accueil</p>
                </LinkWrapper>
                {props.paths.length >= 1 && (
                    <div className="flex items-center gap-1">
                        <IconWrapper icon={IconIds.CHEVRON_RIGHT} className="w-5 text-inactive" />
                        <LinkWrapper href={getPageConfig(props.paths[0]).path} className="default-link-style">
                            <p className="text-wrap">{getPageConfig(props.paths[0]).headerName}</p>
                        </LinkWrapper>
                    </div>
                )}
                {props.paths.length >= 2 && (
                    <div className="flex items-center gap-1">
                        <IconWrapper icon={IconIds.CHEVRON_RIGHT} className="w-5 text-inactive" />
                        <LinkWrapper href={getPageConfig(props.paths[1]).path} className="default-link-style">
                            <p className="text-wrap">{getPageConfig(props.paths[1]).headerName}</p>
                        </LinkWrapper>
                    </div>
                )}
                {props.paths.length >= 3 && (
                    <div className="flex items-center gap-1">
                        <IconWrapper icon={IconIds.CHEVRON_RIGHT} className="w-5 text-inactive" />
                        <LinkWrapper href={getPageConfig(props.paths[2]).path} className="default-link-style">
                            <p className="text-wrap">{getPageConfig(props.paths[2]).headerName}</p>
                        </LinkWrapper>
                    </div>
                )}
            </nav>
            <br />
        </>
    )
}
