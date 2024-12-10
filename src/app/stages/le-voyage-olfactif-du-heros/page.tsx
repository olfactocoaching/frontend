import AnimationPar from '@/components/app/AnimationPar'
import InscriptionSession from '@/components/app/InscriptionSession'
import PageTitle from '@/components/app/PageTitle'
import PrerequisFormation from '@/components/app/PrerequisFormation'
import PreviousOrNextPages from '@/components/app/PreviousOrNextPages'
import ProchainesDates from '@/components/app/ProchainesDates'
import Programme from '@/components/app/Programme'
import Quote from '@/components/app/Quote'
import ImageWrapper from '@/components/common/ImageWrapper'
import LinkWrapper from '@/components/common/LinkWrapper'
import MenuIndications from '@/components/common/MenuIndications'
import PageWrapper from '@/components/common/PageWrapper'
import { APP_METADATA, APP_SESSIONS, LIEN_DE_PAIEMENT } from '@/config/app.config'
import { AppAuthors, AppFormationIds, AppPagePaths, AppPhotoIds } from '@/enums'
import { getPageConfig } from '@/utils'
import { Metadata } from 'next'

const pagePath = AppPagePaths.VOYAGE_OLFACTIF_DU_HEROS
export const metadata: Metadata = {
    title: `${APP_METADATA.SITE_NAME} | ${getPageConfig(pagePath).headerName}`,
}

export default function Page() {
    return (
        <PageWrapper>
            <MenuIndications paths={[AppPagePaths.STAGES, pagePath]} />
            <PageTitle pagePath={pagePath} />
            <p className="text-justify italic">Une Odyssée initiatique à travers les archétypes.</p>
            <br />
            <AnimationPar hosts={[AppAuthors.ELISABETH_MOLINA, AppAuthors.GILLES_FOURNIL]} />
            <ImageWrapper id={AppPhotoIds.VOYAGE_OLFACTIF_DU_HEROS} />
            <PrerequisFormation />
            <Quote quote={`"Quand les résistances deviennent motivantes !"`} author={AppAuthors.GILLES_FOURNIL} />
            <Programme>
                <p className="text-justify">
                    Parfois la vie nous met à l'épreuve et les obstacles semblent barrer la route à nos projets les plus chers.
                </p>
                <br />
                <p className="text-justify">
                    Ce stage a pour objectif de vous aider à les transformer en contactant vos forces essentiellement grâce à une mise en situation
                    théâtrale inédite avec les odeurs, bien sûr des explorations olfactives, le tout sous forme d’Odyssée initiatique.
                </p>
                <br />
                <p className="text-justify">
                    Grâce aux protocoles détaillés et aux accompagnements en binômes, vous pourrez par la suite proposer ce voyage à votre public
                </p>
                <br />
                <div className="mt-2 flex flex-col border-l-4 border-tertiary pl-2">
                    <p className="pl-2">&#x2022; Introduction au Voyage du héros et origine</p>
                    <p className="pl-2">
                        &#x2022; Mise en situation et exploration avec odeurs autour d’une quête individuelle, devenir davantage soi-même ou réaliser
                        un rêve, ou réussir un projet personnel ou professionnel , ou dépasser une difficulté, ou mise à l'épreuve avec deux voyages
                        exploratoires en groupe
                    </p>
                    <p className="pl-2">&#x2022; Accompagnement en binômes</p>
                    <p className="pl-2">&#x2022; Symbolique des éléments du voyage et des Archétypes</p>
                    <p className="pl-2">&#x2022; Présentation de la grille des ressources et des résistances, « les trésors cachés »</p>
                    <p className="pl-2">&#x2022; Apprivoiser ses dragons, transformer ses freins en leviers et Découvrir de nouveaux potentiels</p>
                </div>
            </Programme>
            <ProchainesDates products="Prochains stages">
                <div className="flex w-full flex-col gap-3">
                    {APP_SESSIONS[AppFormationIds.STAGE_VOYAGE_OLFACTIF_DU_HEROS].sessions.length > 0 ? (
                        APP_SESSIONS[AppFormationIds.STAGE_VOYAGE_OLFACTIF_DU_HEROS].sessions.map((session) => (
                            <InscriptionSession
                                key={session.date}
                                session={session}
                                prerequisNecessaire={true}
                                pricingDetails={
                                    <>
                                        <p className="text-justify">
                                            Afin de confirmer votre inscription, nous vous demandons de bien vouloir procéder au virement des{' '}
                                            {session.acompte.montantEnEuros} € d'acompte en cliquant sur ce
                                            <LinkWrapper href={LIEN_DE_PAIEMENT} target="_blank" className="cta-link-style px-1">
                                                lien.
                                            </LinkWrapper>
                                        </p>
                                        <br />
                                        <p className="text-justify font-bold">
                                            En cas de désistement à plus d'un mois du démarrage de la formation, cette somme vous sera remboursée. Au
                                            delà de cette date, les {session.acompte.montantEnEuros} € d'acompte ne seront pas remboursés, ceci pour
                                            couvrir les frais d'organisation et de dédommagement.
                                        </p>
                                        <br />
                                        <p className="text-justify">
                                            De notre côté, nous reviendrons vers vous pour vous confirmer que le stage aura bien lieu aux vues du
                                            nombre suffisant de participants à plus d' 1 mois avant la date de démarrage. Merci d'en tenir compte dans
                                            vos réservations hébergement et transports. Les modalités de règlement vous seront précisées sachant que
                                            les virements ne seront possibles qu’avant le stage.
                                        </p>
                                        <br />
                                        <p className="font-bold text-quaternary">Acompte : 80€</p>
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
            <PreviousOrNextPages previous={AppPagePaths.ANIMER_DES_GROUPES_AVEC_DES_ODEURS} next={AppPagePaths.ZOOM_LES_BASES_OLFACTOTHERAPIE} />
        </PageWrapper>
    )
}
