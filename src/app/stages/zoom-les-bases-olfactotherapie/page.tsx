import AnimationPar from '@/components/app/AnimationPar'
import InscriptionSession from '@/components/app/InscriptionSession'
import PageTitle from '@/components/app/PageTitle'
import PreviousOrNextPages from '@/components/app/PreviousOrNextPages'
import ProchainesDates from '@/components/app/ProchainesDates'
import Programme from '@/components/app/Programme'
import LinkWrapper from '@/components/common/LinkWrapper'
import MenuIndications from '@/components/common/MenuIndications'
import PageWrapper from '@/components/common/PageWrapper'
import { APP_METADATA, APP_SESSIONS, LIEN_DE_PAIEMENT } from '@/config/app.config'
import { AppAuthors, AppFormationIds, AppPagePaths } from '@/enums'
import { getPageConfig } from '@/utils'
import { Metadata } from 'next'

const pagePath = AppPagePaths.ZOOM_LES_BASES_OLFACTOTHERAPIE
export const metadata: Metadata = {
    title: `${APP_METADATA.SITE_NAME} | ${getPageConfig(pagePath).headerName}`,
}

export default function Page() {
    return (
        <PageWrapper>
            <MenuIndications paths={[AppPagePaths.STAGES, pagePath]} />
            <PageTitle pagePath={pagePath} />
            <AnimationPar hosts={[AppAuthors.ELISABETH_MOLINA]} />
            <Programme>
                <p className="pl-2">&#x2022; Genèse Olfactothérapie / Olfactocoaching</p>
                <p className="pl-2">&#x2022; Bases de l’énergétique</p>
                <p className="pl-2">&#x2022; Propriétés de l’odorat</p>
                <p className="pl-2">&#x2022; Vibration des odeurs</p>
                <p className="pl-2">&#x2022; Relation des odeurs avec les chakras et les archétypes</p>
                <p className="pl-2">&#x2022; Propriétés des odeurs en Olfactocoaching</p>
            </Programme>
            <ProchainesDates products="Prochaines dates">
                <div className="flex w-full flex-col gap-3">
                    {APP_SESSIONS[AppFormationIds.ZOOM_LES_BASES_OLFACTOTHERAPIE].sessions.length > 0 ? (
                        APP_SESSIONS[AppFormationIds.ZOOM_LES_BASES_OLFACTOTHERAPIE].sessions.map((session) => (
                            <InscriptionSession
                                key={session.date}
                                session={session}
                                prerequisNecessaire={false}
                                pricingDetails={
                                    <>
                                        <p className="text-justify">
                                            Afin de confirmer votre inscription, nous vous demandons de bien vouloir procéder au paiement en cliquant
                                            sur ce
                                            <LinkWrapper target="_blank" href={LIEN_DE_PAIEMENT} className="cta-link-style px-1">
                                                lien.
                                            </LinkWrapper>
                                        </p>
                                        <br />
                                        <p className="font-bold text-quaternary">Tarif pour le stage : {session.prix}</p>
                                    </>
                                }
                            />
                        ))
                    ) : (
                        <p className="text-inactive">Aucun annoncé pour le moment</p>
                    )}
                </div>
            </ProchainesDates>
            <PreviousOrNextPages previous={AppPagePaths.VOYAGE_OLFACTIF_DU_HEROS} next={AppPagePaths.AGENDA} />
        </PageWrapper>
    )
}
