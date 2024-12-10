'use client'

import { SessionDeFormation } from '@/interfaces'
import { ReactNode, useState } from 'react'
import FormulaireInscription from './FormulaireInscription'
import CoordonneesBancaires from './CoordonneesBancaires'
import MailDeNotificationDeVirement from './MailDeNotificationDeVirement'
import SessionCard from './SessionCard'
import { cn } from '@/utils'

export default function InscriptionSession({
    session,
    pricingDetails,
    prerequisNecessaire,
}: {
    session: SessionDeFormation
    pricingDetails: ReactNode
    prerequisNecessaire: boolean
}) {
    const [showInscription, setShowInscription] = useState(false)
    return (
        <div
            key={session.date}
            className={cn('flex w-full flex-col rounded-xl border-2 px-3 hover:border-primary', { 'border-primary': showInscription })}
        >
            <SessionCard session={session} showInscription={showInscription} setShowInscription={setShowInscription} />
            {showInscription && (
                <div className="my-2 flex w-full flex-col px-3">
                    <FormulaireInscription cursus={session.formation} dates={session.date} prerequisNecessaire={prerequisNecessaire} />
                    <CoordonneesBancaires pricingDetails={pricingDetails} />
                    <MailDeNotificationDeVirement />
                </div>
            )}
        </div>
    )
}
