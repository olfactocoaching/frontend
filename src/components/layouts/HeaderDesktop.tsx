'use client'

import { APP_METADATA, APP_PAGES } from '@/config/app.config'
import { cn, defaultAlt, isCurrentPath } from '@/utils'
import LinkWrapper from '../common/LinkWrapper'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { AppAuthors, IconIds } from '@/enums'
import IconWrapper from '../common/IconWrapper'

export default function HeaderDesktop(props: { className?: string }) {
    const pathname = usePathname()
    return (
        <div className={cn('flex justify-around items-center w-full px-2 py-5 mb-2', props.className)}>
            {/* left */}
            <div className="flex items-center gap-1">
                <LinkWrapper href="/">
                    <Image
                        src="https://image.jimcdn.com/app/cms/image/transf/dimension=588x1024:format=jpg/path/sa63dc64c7c62b111/image/i1c1426b846685de1/version/1715434629/image.jpg"
                        width={140}
                        height={100}
                        alt={defaultAlt()}
                        className="rounded-md"
                    />
                </LinkWrapper>
            </div>

            {/* center */}
            <div className="flex flex-col gap-5">
                <p className="w-full text-center text-base text-quaternary">
                    " Les odeurs sont volatiles et dansent comme la vie en nous. Elles sont une aide pour mieux se rencontrer. "
                    <span className="pl-1 font-bold"> {AppAuthors.ELISABETH_MOLINA}</span>
                </p>
                <div className="flex items-end gap-4 xl:gap-5">
                    {APP_PAGES.filter((page) => page.public && !page.legal).map((page) => (
                        <LinkWrapper key={page.path} href={page.path}>
                            <p
                                className={cn('truncate text-center text-sm xl:text-base 2xl:text-xl hover:text-primary', {
                                    'underline decoration-4 underline-offset-4 text-primary': isCurrentPath(pathname, page.path),
                                })}
                            >
                                {page.headerName}
                            </p>
                        </LinkWrapper>
                    ))}
                </div>
            </div>

            {/* right */}
            <div className="hidden flex-col items-center xl:flex">
                <p className="text-sm text-inactive">Suivez-nous</p>
                <LinkWrapper
                    target="_blank"
                    href={APP_METADATA.SOCIALS.FACEBOOK}
                    className="flex items-center gap-2 rounded-xl bg-tertiary px-2.5 py-1.5 text-primary hover:underline"
                >
                    <IconWrapper icon={IconIds.FACEBOOK} className="size-6" />
                    <p className="text-lg font-bold">Olfactocoaching</p>
                </LinkWrapper>
            </div>
        </div>
    )
}
