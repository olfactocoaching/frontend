import { create } from 'zustand'
import { InterfaceAppLink } from '../interfaces'
import { APP_PAGES } from '../config/app.config'

export const useAppStore = create<{
    version: string
    env: string
    links: InterfaceAppLink[]
    showMobileMenu: boolean
    actions: {
        showMobileMenu: (showMobileMenu: boolean) => void
    }
}>((set) => ({
    version: '0.0.0',
    env: String(process.env.NEXT_PUBLIC_APP_ENV),
    links: APP_PAGES,
    showMobileMenu: false,
    actions: {
        showMobileMenu: (showMobileMenu) => set(() => ({ showMobileMenu })),
    },
}))
