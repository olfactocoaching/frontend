import PageTitle from '@/components/app/PageTitle'
import PreviousOrNextPages from '@/components/app/PreviousOrNextPages'
import SectionTitle from '@/components/app/SectionTitle'
import ImageWrapper from '@/components/common/ImageWrapper'
import LinkWrapper from '@/components/common/LinkWrapper'
import MenuIndication from '@/components/common/MenuIndication'
import PageWrapper from '@/components/common/PageWrapper'
import { APP_METADATA } from '@/config/app.config'
import { AppPagePaths, AppPhotoIds } from '@/enums'
import { getPageConfig } from '@/utils'
import { Metadata } from 'next'

const pagePath = AppPagePaths.DEFINITION
export const metadata: Metadata = {
    title: `${APP_METADATA.SITE_NAME} | ${getPageConfig(pagePath).headerName}`,
}

export default function Page() {
    return (
        <PageWrapper>
            <MenuIndication secondaryPath={pagePath} />
            <PageTitle pagePath={pagePath} />
            <p className="text-justify ">
                Une formation innovante pour apprendre à intégrer la magie des odeurs dans l’accompagnement d’un objectif individuel ou d’un travail
                de groupe en cohérence avec la quête de paix propre à chacun.
            </p>
            <br />
            <p className="text-justify ">
                Une formation co-créée en 2013 et enseignée par
                <LinkWrapper href={AppPagePaths.EQUIPE} className="cta-link-style px-1">
                    Elisabeth Molina
                </LinkWrapper>
                coach professionnel formée à l’Olfactothérapie et
                <LinkWrapper href={AppPagePaths.EQUIPE} className="cta-link-style px-1">
                    Gilles Fournil
                </LinkWrapper>
                , créateur de l’Olfactothérapie.
            </p>
            <ImageWrapper id={AppPhotoIds.OLFACTOCOACHING_BANDEAU} />

            {/* section */}
            <SectionTitle title="En pratique" />
            <p className="">
                Dans le cadre des séances d’Olfactocoaching, les personnes sont invitées à sentir des odeurs ciblées et à exprimer ce qu’elles
                ressentent.
            </p>
            <p>
                <LinkWrapper href="/" className="cta-link-style px-1">
                    Lire la suite
                </LinkWrapper>
            </p>
            <br />

            {/* section */}
            <SectionTitle title="Les enjeux de l’Olfactocoaching" />
            <p className="">
                Parce qu’il permet d’aborder différents niveaux de défense et de changement, l’Olfactocoaching est au service d’une transformation
                profonde et durable des personnes.
            </p>
            <p>
                <LinkWrapper href="/" className="cta-link-style px-1">
                    Lire la suite
                </LinkWrapper>
            </p>
            <br />

            {/* section */}
            <SectionTitle title="Fondements" />
            <p className="">
                La force de l’Olfactocoaching s’appuie sur la combinaison des propriétés de l’odorat, des vertus des huiles essentielles sélectionnées
                ainsi que du langage corporel au travers des ressentis exprimés.
            </p>
            <p>
                <LinkWrapper href="/" className="cta-link-style px-1">
                    Lire la suite
                </LinkWrapper>
            </p>
            <br />

            {/* section */}
            <SectionTitle title="Pour qui ?" />
            <p className="">Les professionnels de la relation d’aide en situation d’accompagnement de projets ou de personnes</p>
            <p className="">Les professionnels du coaching individuel</p>
            <p className="">Les animateurs de groupes, consultants, formateurs qui veulent enrichir leur palette d’interventions</p>
            <p>
                <LinkWrapper href="/" className="cta-link-style px-1">
                    Lire la suite
                </LinkWrapper>
            </p>
            <br />

            {/* section */}
            <SectionTitle title="Les spécificités de cette formation" />
            <p className="">Une formation action autour des projets réels et concrets des participants !</p>
            <p className="">Des feed-back individuels par les animateurs</p>
            <p>
                <LinkWrapper href="/" className="cta-link-style px-1">
                    Lire la suite
                </LinkWrapper>
            </p>
            <br />

            {/* section */}
            <PreviousOrNextPages previous={AppPagePaths.ACCUEIL} next={AppPagePaths.EQUIPE} />
        </PageWrapper>
    )
}
