'use client'

import SessionCard from '@/components/app/SessionCard'
import { APP_SESSIONS } from '@/config/app.config'
import { getPageConfig } from '@/utils'
import LinkWrapper from '../common/LinkWrapper'

export default function AgendaContent() {
    return Object.entries(APP_SESSIONS)
        .filter((entry) => entry[1].sessions.length > 0)
        .map(([sessionId, config]) => (
            <div key={sessionId} className="flex w-full flex-col gap-2 py-2">
                <LinkWrapper href={config.path} className="cta-link-style">
                    <p className="pl-2 text-secondary">{getPageConfig(config.path).pageTitle}</p>
                </LinkWrapper>
                <div key={sessionId} className="grid grid-cols-2 gap-3">
                    {config.sessions.map((session) => (
                        <LinkWrapper
                            href={config.path}
                            key={session.date}
                            className="col-span-2 flex w-full flex-col rounded-xl border-2 px-3 hover:border-primary lg:col-span-1"
                        >
                            <SessionCard
                                key={session.date}
                                session={session}
                                showInscriptionButton={false}
                                showInscription={false}
                                setShowInscription={(placeholder: boolean) => {
                                    console.log({ placeholder })
                                }}
                            />
                        </LinkWrapper>
                    ))}
                </div>
            </div>
        ))
}
