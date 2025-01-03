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

const pagePath = AppPagePaths.ACCOMPAGNEMENT_INDIVIDUEL
export const metadata = generatePageMetadata(pagePath)

export default function Page() {
    return (
        <PageWrapper>
            <MenuIndications paths={[AppPagePaths.STAGES, pagePath]} />
            <PageTitle pagePath={pagePath} />
            <AnimationPar hosts={[AppAuthors.ELISABETH_MOLINA]} />
            <ImageWrapper id={AppPhotoIds.ACCOMPAGNEMENT_INDIVIDUEL} />
            <PrerequisFormation />
            <Programme>
                <p className="text-justify">
                    Vous aurez l’occasion d’expérimenter des protocoles d’accompagnement individuel avec les 24 odeurs de base d’Olfactothérapie. Ces
                    protocoles seront appliqués sur un projet personnel d’ordre professionnel ou privé ou une direction de vie plus ou moins précise.
                </p>
                <br />
                <p className="text-justify">Il sera vu que le chemin compte autant que la direction.</p>
                <br />
                <p className="text-justify">
                    Les protocoles visent à remettre la personne dans son axe naturel et lui permettre d’être en accord profond avec sa vraie nature.
                    Ainsi la vie peut soutenir le projet et le faire fleurir.
                </p>
                <br />
                <p className="text-justify">La session inclue de nombreux partages en groupe et des entrainements en binômes.</p>
                <br />
                <p className="text-justify">
                    A l’issue du module, vous serez en capacité de pratiquer, (en vous entraînant d’abord), un processus de 8 rendez-vous
                    d’Olfactocoaching. Ce processus utilise des outils de coaching ainsi que la méthodologie des odeurs de l’Olfactothérapie mais ce
                    n’est pas une formation au coaching.
                </p>
                <br />
                <p className="text-justify">
                    Vous serez également en capacité de proposer des accompagnement sur une seule séance découverte ou spécifique en dehors de ce
                    processus grâce à deux autres protocoles.
                </p>
                <br />
                <div className="mt-2 flex flex-col border-l-4 border-tertiary pl-2">
                    <p className="pl-2">&#x2022; Bases de l’accompagnement en Olfactocoaching : cadre, spécificités et notions clés</p>
                    <p className="pl-2">&#x2022; Définition d’un projet personnel grâce aux odeurs et feed-back individuel par l’animatrice</p>
                    <p className="pl-2">
                        &#x2022; Présentation des protocoles pour faire émerger les motivations, les désirs souvent inconscients de la personne.
                    </p>
                    <p className="pl-2">
                        &#x2022; Présentation d’un protocole pour relier le projet au déploiement de l’intelligence du cœur, en cohérence avec les
                        niveaux identité et sens de vie de la personne.
                    </p>
                    <p className="pl-2">&#x2022; Synthèse autour de la roue du changement</p>
                    <p className="pl-2">
                        &#x2022; Protocole séance découverte <span className="text-primary">(*)</span>
                    </p>
                    <p className="pl-2">
                        &#x2022; Protocole "envisager une situation redoutée" <span className="text-primary">(*)</span>
                    </p>
                    <p className="pl-2">
                        &#x2022; Protocoles de bouclage <span className="text-primary">(*)</span>
                    </p>
                </div>
                <br />
                <p className="text-inactive">
                    <span className="text-primary">(*)</span> Uniquement pour les stages en résidentiel
                </p>
            </Programme>
            <ProchainesDates products="Prochains stages">
                <div className="flex w-full flex-col gap-3">
                    {APP_SESSIONS[AppFormationIds.STAGE_ACCOMPAGNEMENT_INDIVIDUEL].sessions.map((session) => (
                        <InscriptionSession
                            key={session.date}
                            session={session}
                            prerequisNecessaire={true}
                            pricingDetails={
                                <>
                                    <p className="text-justify">
                                        Afin de confirmer votre inscription, nous vous demandons de bien vouloir procéder au virement des{' '}
                                        {session.acompte.montantEnEuros} € d'acompte en cliquant sur ce
                                        <LinkWrapper target="_blank" href={LIEN_DE_PAIEMENT} className="cta-link-style px-1">
                                            lien.
                                        </LinkWrapper>
                                    </p>
                                    <br />
                                    <p className="text-justify font-bold">
                                        En cas de désistement à plus d'un mois du démarrage de la formation, cette somme vous sera remboursée. Au delà
                                        de cette date, les {session.acompte.montantEnEuros} € d'acompte ne seront pas remboursés, ceci pour couvrir
                                        les frais d'organisation et de dédommagement.
                                    </p>
                                    <br />
                                    <p className="text-justify">
                                        De notre côté, nous reviendrons vers vous pour vous confirmer que le stage aura bien lieu aux vues du nombre
                                        suffisant de participants à plus d' 1 mois avant la date de démarrage. Merci d'en tenir compte dans vos
                                        réservations hébergement et transports. Les modalités de règlement vous seront précisées sachant que les
                                        virements ne seront possibles qu’avant le stage.
                                    </p>
                                    <br />
                                    <p className="font-bold text-quaternary">Acompte : 80€</p>
                                    <p className="font-bold text-quaternary">Tarif pour le stage : {session.prix}</p>
                                </>
                            }
                        />
                    ))}
                </div>
            </ProchainesDates>
            <PreviousOrNextPages previous={AppPagePaths.STAGES} next={AppPagePaths.ANIMER_DES_GROUPES_AVEC_DES_ODEURS} />
        </PageWrapper>
    )
}
