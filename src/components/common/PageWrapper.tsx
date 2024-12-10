import { Suspense } from 'react'
import { cn } from '@/utils'

export default function PageWrapper({ children, className, ...props }: { children: React.ReactNode; className?: string }) {
    const commonClassName =
        'mx-auto min-h-[calc(100vh-123px)] flex flex-col items-start overflow-auto w-full max-w-[1000px] pb-4 px-4 md:px-6 text-base lg:text-lg'
    return (
        <Suspense
            fallback={
                <div className={commonClassName}>
                    <div className="h-96 w-full animate-pulse rounded-lg bg-very-light-hover" />
                </div>
            }
        >
            <div {...props} className={cn(commonClassName, className)}>
                {children}
            </div>
        </Suspense>
    )
}
