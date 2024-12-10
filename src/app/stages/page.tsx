import PageTitle from '@/components/app/PageTitle'
import PreviousOrNextPages from '@/components/app/PreviousOrNextPages'
import SectionTitle from '@/components/app/SectionTitle'
import LinkWrapper from '@/components/common/LinkWrapper'
import MenuIndication from '@/components/common/MenuIndication'
import PageWrapper from '@/components/common/PageWrapper'
import { APP_METADATA } from '@/config/app.config'
import { AppPagePaths } from '@/enums'
import { getPageConfig } from '@/utils'
import { Metadata } from 'next'

const pagePath = AppPagePaths.STAGES
export const metadata: Metadata = {
    title: `${APP_METADATA.SITE_NAME} | ${getPageConfig(pagePath).headerName}`,
}

export default function Page() {
    return (
        <PageWrapper>
            <MenuIndication secondaryPath={pagePath} />
            <PageTitle pagePath={pagePath} />

            <SectionTitle title="La magie des odeurs pour les projets" />
            <p className="">
                Par
                <LinkWrapper href={AppPagePaths.EQUIPE} className="cta-link-style px-1">
                    Elisabeth Molina
                </LinkWrapper>
                et
                <LinkWrapper href={AppPagePaths.EQUIPE} className="cta-link-style px-1">
                    Gilles Fournil
                </LinkWrapper>
            </p>
            <br />
            <p className="text-justify">
                L'Olfactocoaching est une formation qui utilise certains outils du coaching dans l'esprit Olfacto, mais n'est pas une formation au
                coaching.
            </p>
            <br />

            <SectionTitle title="Programme" />
            <p>3 stages à thème indépendants les uns des autres, accessibles avec le prérequis*</p>
            <div className="flex items-center gap-2">
                <p className="pl-2 text-secondary">&#x2022;</p>
                <LinkWrapper href={AppPagePaths.ACCOMPAGNEMENT_INDIVIDUEL} className="cta-link-style">
                    <p className="pl-2 text-secondary">{getPageConfig(AppPagePaths.ACCOMPAGNEMENT_INDIVIDUEL).pageTitle}</p>
                </LinkWrapper>
            </div>
            <div className="flex items-center gap-2">
                <p className="pl-2 text-secondary">&#x2022;</p>
                <LinkWrapper href={AppPagePaths.ANIMER_DES_GROUPES_AVEC_DES_ODEURS} className="cta-link-style">
                    <p className="pl-2 text-secondary">{getPageConfig(AppPagePaths.ANIMER_DES_GROUPES_AVEC_DES_ODEURS).pageTitle}</p>
                </LinkWrapper>
            </div>
            <div className="flex items-center gap-2">
                <p className="pl-2 text-secondary">&#x2022;</p>
                <LinkWrapper href={AppPagePaths.VOYAGE_OLFACTIF_DU_HEROS} className="cta-link-style">
                    <p className="pl-2 text-secondary">{getPageConfig(AppPagePaths.VOYAGE_OLFACTIF_DU_HEROS).pageTitle}</p>
                </LinkWrapper>
            </div>
            <br />
            <p className="mb-6 text-justify">La participation aux 3 stages donne l'obtention d'un certificat.</p>

            <SectionTitle title="Prérequis" />
            <div className="flex items-center gap-2">
                <p className="pl-2 text-secondary">&#x2022;</p>
                <LinkWrapper href={AppPagePaths.ZOOM_LES_BASES_OLFACTOTHERAPIE} className="cta-link-style">
                    <p className="pl-2 text-secondary">{getPageConfig(AppPagePaths.ZOOM_LES_BASES_OLFACTOTHERAPIE).pageTitle}</p>
                </LinkWrapper>
            </div>
            <p>ou</p>
            <div className="flex items-center gap-2">
                <p className="pl-2 text-secondary">&#x2022;</p>
                <LinkWrapper href={AppPagePaths.PREMIER_DEGRE_OLFACTOTHERAPIE} className="cta-link-style">
                    <p className="pl-2 text-secondary">{getPageConfig(AppPagePaths.PREMIER_DEGRE_OLFACTOTHERAPIE).pageTitle}</p>
                </LinkWrapper>
            </div>

            <br />
            <p className="mb-6 text-justify text-sm italic">
                Les formations Olfactocoaching prennent appui sur un travail individuel sur un projet de vie avec une dimension intérieure (émotions
                …). Elles peuvent impliquer un travail sur soi. Il est alors conseillé d'entreprendre ou de continuer un accompagnement thérapeutique
                pendant les sessions. Elles ne se substituent en aucun cas à une thérapie.
            </p>

            {/* section */}
            <PreviousOrNextPages previous={AppPagePaths.EQUIPE} next={AppPagePaths.ACCOMPAGNEMENT_INDIVIDUEL} />
        </PageWrapper>
    )
}
