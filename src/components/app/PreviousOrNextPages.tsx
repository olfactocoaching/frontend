import { AppPagePaths, IconIds } from '@/enums'
import { cn, getPageConfig } from '@/utils'
import IconWrapper from '../common/IconWrapper'
import LinkWrapper from '../common/LinkWrapper'

export default function PreviousOrNextPages(props: { previous?: AppPagePaths; next?: AppPagePaths }) {
    return (
        <div
            className={cn('mt-4 grid w-full gap-3 text-base md:gap-4 lg:', {
                'grid-cols-2': props.previous && props.next,
                'grid-cols-1': !props.previous || !props.next,
            })}
        >
            {props.previous && (
                <LinkWrapper
                    href={props.previous}
                    className="group flex flex-col items-start gap-1 rounded-xl border border-light-hover p-3 hover:border-secondary md:px-5"
                >
                    <div className="flex items-center justify-start gap-1">
                        <IconWrapper icon={IconIds.DOUBLE_CHEVRON_LEFT} className="size-6 text-inactive" />
                        <p className="text-inactive">Page précédente</p>
                    </div>
                    <p className="text-lg text-secondary decoration-2 underline-offset-4 group-hover:underline lg:text-xl">
                        {getPageConfig(props.previous).headerName}
                    </p>
                </LinkWrapper>
            )}
            {props.next && (
                <LinkWrapper
                    href={props.next}
                    className="group flex flex-col items-end gap-1 rounded-xl border border-light-hover p-3 hover:border-secondary md:px-5"
                >
                    <div className="flex items-center justify-end gap-1">
                        <p className="text-inactive">Page suivante</p>
                        <IconWrapper icon={IconIds.DOUBLE_CHEVRON_RIGHT} className="size-6 text-inactive" />
                    </div>
                    <p className="text-right text-lg text-secondary decoration-2 underline-offset-4 group-hover:underline lg:text-xl">
                        {getPageConfig(props.next).headerName}
                    </p>
                </LinkWrapper>
            )}
        </div>
    )
}
