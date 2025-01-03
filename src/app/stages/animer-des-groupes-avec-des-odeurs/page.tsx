import AnimationPar from '@/components/app/AnimationPar'
import InscriptionSession from '@/components/app/InscriptionSession'
import PageTitle from '@/components/app/PageTitle'
import PrerequisFormation from '@/components/app/PrerequisFormation'
import PreviousOrNextPages from '@/components/app/PreviousOrNextPages'
import ProchainesDates from '@/components/app/ProchainesDates'
import Programme from '@/components/app/Programme'
import ImageWrapper from '@/components/common/ImageWrapper'
import LinkWrapper from '@/components/common/LinkWrapper'
import MenuIndications from '@/components/common/MenuIndications'
import PageWrapper from '@/components/common/PageWrapper'
import { APP_SESSIONS, LIEN_DE_PAIEMENT } from '@/config/app.config'
import { AppAuthors, AppFormationIds, AppPagePaths, AppPhotoIds } from '@/enums'
import { generatePageMetadata } from '@/utils'

const pagePath = AppPagePaths.ANIMER_DES_GROUPES_AVEC_DES_ODEURS
export const metadata = generatePageMetadata(pagePath)

export default function Page() {
    return (
        <PageWrapper>
            <MenuIndications paths={[AppPagePaths.STAGES, pagePath]} />
            <PageTitle pagePath={pagePath} />
            <AnimationPar hosts={[AppAuthors.ELISABETH_MOLINA]} />
            <ImageWrapper id={AppPhotoIds.ANIMER_GROUPE_AVEC_ODEURS} />
            <PrerequisFormation />
            <Programme>
                <p className="text-justify">Chaque session alternera des apports méthodologiques, des exemples et des questions /réponses</p>
                <br />
                <p className="text-justify">Session 1</p>
                <div className="mt-2 flex flex-col border-l-4 border-tertiary pl-2">
                    <p className="pl-2">&#x2022; Colonne vertébrale de toute animation avec les odeurs</p>
                    <p className="pl-2">&#x2022; Inclusion et prendre sa place dans le groupe</p>
                </div>
                <br />
                <p className="text-justify">Session 2</p>
                <div className="mt-2 flex flex-col border-l-4 border-tertiary pl-2">
                    <p className="pl-2">&#x2022; La carte des odeurs pour lancer une dynamique de groupe</p>
                    <p className="pl-2">&#x2022; Atelier découverte et ateliers à thème</p>
                </div>
                <br />
                <p className="text-justify">Session 3</p>
                <div className="mt-2 flex flex-col border-l-4 border-tertiary pl-2">
                    <p className="pl-2">&#x2022; S’appuyer sur des odeurs en groupe pour réfléchir ensemble</p>
                    <p className="pl-2">&#x2022; 4 fonctions et rôles (animateur / régulateur)</p>
                    <p className="pl-2">&#x2022; Trame d’animation</p>
                    <p className="pl-2">&#x2022; Intelligence collective</p>
                    <p className="pl-2">&#x2022; Bienveillance : coopération versus compétition</p>
                    <p className="pl-2">&#x2022; Les clés de l’intelligence collective</p>
                </div>
            </Programme>
            <ProchainesDates products="Prochains stages">
                <div className="flex w-full flex-col gap-3">
                    {APP_SESSIONS[AppFormationIds.STAGE_ZOOM_ANIMER_DES_GROUPES_AVEC_DES_ODEURS].sessions.length > 0 ? (
                        APP_SESSIONS[AppFormationIds.STAGE_ZOOM_ANIMER_DES_GROUPES_AVEC_DES_ODEURS].sessions.map((session) => (
                            <InscriptionSession
                                key={session.date}
                                session={session}
                                prerequisNecessaire={true}
                                pricingDetails={
                                    <>
                                        <p className="text-justify">
                                            Afin de confirmer votre inscription, nous vous demandons de bien vouloir procéder au paiement en cliquant
                                            sur ce
                                            <LinkWrapper href={LIEN_DE_PAIEMENT} target="_blank" className="cta-link-style px-1">
                                                lien.
                                            </LinkWrapper>
                                        </p>
                                        <br />
                                        <p className="text-justify font-bold">
                                            Le paiement est un forfait valable pour les 3 sessions ensemble (en cas d'absence sur une session,
                                            paiement non détaillable). Cette somme sera non remboursable en cas d'absence non justifiée au moins 2
                                            jours avant la première session
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
            <PreviousOrNextPages previous={AppPagePaths.ACCOMPAGNEMENT_INDIVIDUEL} next={AppPagePaths.VOYAGE_OLFACTIF_DU_HEROS} />
        </PageWrapper>
    )
}
