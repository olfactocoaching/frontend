'use client'

import { APP_METADATA, APP_PAGES } from '@/config/app.config'
import { cn, defaultAlt, isCurrentPath, sleep } from '@/utils'
import LinkWrapper from '../common/LinkWrapper'
import Image from 'next/image'
import IconWrapper from '../common/IconWrapper'
import { IconIds } from '@/enums'
import { useAppStore } from '@/stores/app.store'
import { usePathname, useRouter } from 'next/navigation'
import { useKeyboardShortcut } from '@/hooks/useKeyboardShortcutArgs'
import { useClickOutside } from '@/hooks/useClickOutside'
import { useRef } from 'react'
import { motion } from 'framer-motion'

export default function HeaderMobile(props: { className?: string }) {
    const pathname = usePathname()
    const router = useRouter()
    const modalRef = useRef<HTMLDivElement>(null)
    const { showMobileMenu, actions } = useAppStore()
    useClickOutside(modalRef, async () => {
        await sleep(100)
        actions.showMobileMenu(false)
    })
    useKeyboardShortcut({
        key: 'Escape',
        onKeyPressed: async () => {
            await sleep(100)
            actions.showMobileMenu(false)
        },
    })
    return (
        <div ref={modalRef}>
            <div
                className={cn(
                    'flex items-center w-full p-3 border-b pb-5',
                    { 'bg-white border-transparent': showMobileMenu, 'border-transparent': !showMobileMenu },
                    props.className,
                )}
            >
                <div className="flex grow items-center gap-1">
                    <LinkWrapper href="/" className="z-50">
                        <Image
                            src="https://image.jimcdn.com/app/cms/image/transf/dimension=588x1024:format=jpg/path/sa63dc64c7c62b111/image/i1c1426b846685de1/version/1715434629/image.jpg"
                            width={110}
                            height={110}
                            alt={defaultAlt()}
                            className="rounded-md"
                        />
                    </LinkWrapper>
                </div>
                <button onClick={() => actions.showMobileMenu(!showMobileMenu)} className="z-50">
                    <IconWrapper icon={showMobileMenu ? IconIds.CLOSE : IconIds.MENU} className="size-12 text-default" />
                </button>
                <span />
            </div>

            {showMobileMenu && (
                <motion.div
                    className="fixed inset-0 z-30 flex size-full items-center justify-center overflow-y-auto bg-gray-300/20 px-4 pb-2 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => actions.showMobileMenu(false)}
                >
                    <div className="absolute right-0 top-0 z-40 flex h-fit w-screen flex-col gap-2 rounded-b-lg border-b-4 border-light-hover bg-white">
                        <div className="flex flex-col items-center gap-1 pb-4 pr-6 pt-20">
                            {APP_PAGES.filter((page) => page.public && !page.legal).map((page) => (
                                <button
                                    key={page.path}
                                    onClick={async () => {
                                        await router.push(page.path)
                                        await sleep(300)
                                        actions.showMobileMenu(false)
                                    }}
                                    className="flex w-full justify-end"
                                >
                                    <p
                                        className={cn('text-right text-xl px-2 py-1 rounded-lg', {
                                            'font-bold text-primary bg-tertiary': isCurrentPath(pathname, page.path),
                                            'text-inactive': !isCurrentPath(pathname, page.path),
                                        })}
                                    >
                                        {page.headerName}
                                    </p>
                                </button>
                            ))}
                            <LinkWrapper href={APP_METADATA.SOCIALS.FACEBOOK} className="mb-2 mt-8 flex w-full flex-col items-end">
                                <p className="text-lg text-secondary">Suivez-nous</p>
                                <div className="flex gap-1.5 rounded-xl bg-tertiary px-2.5 py-1.5">
                                    <IconWrapper icon={IconIds.FACEBOOK} className="size-7 text-primary" />
                                    <p className="text-lg font-bold text-primary">Olfactocoaching</p>
                                </div>
                            </LinkWrapper>
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    )
}
