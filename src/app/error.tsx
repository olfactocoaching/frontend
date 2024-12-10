'use client'

import PageWrapper from '@/components/common/PageWrapper'
import JsonField from '@/components/common/JsonField'
import { useEffect } from 'react'
import { extractErrorMessage } from '@/utils'
import IconWrapper from '@/components/common/IconWrapper'
import { IconIds } from '@/enums'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    useEffect(() => console.error(error), [error])
    return (
        <PageWrapper>
            <div className="my-10 flex w-full flex-col items-center gap-6">
                <p className="font-bold">Something went wrong!</p>
                <div className="flex w-full flex-col items-center gap-2 rounded-md border border-light-hover p-4">
                    <p className="text-inactive">Application logs</p>
                    <JsonField className="text-orange-500">{JSON.stringify(extractErrorMessage(error), null, 2)}</JsonField>
                </div>
                <div className="flex w-full flex-col items-center gap-3">
                    <p className="text-sm text-inactive">Please</p>
                    <button onClick={() => reset()} className="cta-link-style flex gap-2 rounded-lg border border-secondary px-2 py-1.5">
                        <p className="font-bold">Reload page</p>
                        <IconWrapper icon={IconIds.UPDATE_NOW} className="size-6" />
                    </button>
                    <p className="text-sm text-inactive">Or</p>
                    <p className="text-sm text-inactive">Send us a screenshot of 'Application logs' above</p>
                </div>
            </div>
        </PageWrapper>
    )
}
