import PageTitle from '@/components/app/PageTitle'
import PreviousOrNextPages from '@/components/app/PreviousOrNextPages'
import Quote from '@/components/app/Quote'
import SectionTitle from '@/components/app/SectionTitle'
import ImageWrapper from '@/components/common/ImageWrapper'
import LinkWrapper from '@/components/common/LinkWrapper'
import PageWrapper from '@/components/common/PageWrapper'
import { APP_METADATA, APP_PAGES } from '@/config/app.config'
import { AppPagePaths, AppPhotoIds } from '@/enums'
import { getPageConfig } from '@/utils'
import { Metadata } from 'next'

const pagePath = AppPagePaths.ACCUEIL
export const metadata: Metadata = {
    title: `${APP_METADATA.SITE_NAME} | ${getPageConfig(pagePath).headerName}`,
}

export default function Page() {
    return (
        <PageWrapper>
            <PageTitle pagePath={pagePath} />

            <p className="text-justify">
                L'Olfactocoaching propose d'accompagner la personne dans son projet en s'assurant qu'il est porteur d'épanouissement personnel et
                collectif.
            </p>
            <br />
            <p className="text-justify">
                L'intégration de cette dimension passe par l'utilisation des propriétés exceptionnelles des odeurs et vibrations de certaines Huiles
                Essentielles.
            </p>
            <br />
            <p className="text-justify">
                L'Olfactocoaching s'adresse donc à toute personne désireuse d'intégrer cet outil dans sa pratique professionnelle, ainsi qu'aux
                personnes qui souhaitent avancer sur leur(s) projet(s).
            </p>
            <br />
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
            <p className="text-justify">La participation aux 3 stages donne l'obtention d'un certificat.</p>
            <br />
            <p className="font-bold">Prérequis pour s'inscrire en Olfactocoaching</p>
            <div className="flex items-center gap-2">
                <p className="pl-2 text-secondary">&#x2022;</p>
                <LinkWrapper href={AppPagePaths.ZOOM_LES_BASES_OLFACTOTHERAPIE} className="cta-link-style">
                    <p className="pl-2 text-secondary">{getPageConfig(AppPagePaths.ZOOM_LES_BASES_OLFACTOTHERAPIE).pageTitle}</p>
                </LinkWrapper>
            </div>
            <p>Ou</p>
            <div className="flex items-center gap-2">
                <p className="pl-2 text-secondary">&#x2022;</p>
                <LinkWrapper href={AppPagePaths.PREMIER_DEGRE_OLFACTOTHERAPIE} className="cta-link-style">
                    <p className="pl-2 text-secondary">{getPageConfig(AppPagePaths.ZOOM_LES_BASES_OLFACTOTHERAPIE).pageTitle}</p>
                </LinkWrapper>
            </div>
            <br />
            <ImageWrapper id={AppPhotoIds.OLFACTOCOACHING_ETAPE_2} />
            <p className="text-justify text-sm italic">
                Les formations Olfactocoaching prennent appui sur un travail individuel sur un projet de vie avec une dimension intérieure (émotions
                …). Elles peuvent impliquer un travail sur soi. Il est alors conseillé d'entreprendre ou de continuer un accompagnement thérapeutique
                pendant les sessions. Elles ne se substituent en aucun cas à une thérapie.
            </p>
            <br />

            {/* section */}
            <SectionTitle title="Quelle est la différence entre Olfactothérapie et Olfactocoaching ?" />
            <p className="text-justify">
                Une des réponses : L'Olfactothérapie forme des thérapeutes qui agissent entre autre sur la guérison des blessures du passé des
                consultants, l'Olfactocoaching propose, via les odeurs et des outils de coaching une aide à la réussite des projets des clients ...
                Les autres différences sont posées durant les différents stages d'Olfactocoaching . L'OC et l'Olfacto sont complémentaires et les
                stagiaires ayant suivi le cursus Olfactothérapie gagnent en concrétisation de leur projet en faisant Olfactocoaching tout en
                retrouvant l'ambiance garantie par Gilles ...
            </p>
            <br />
            <Quote
                quote={`"En dressant l'inventaire des parfums qui nous émeuvent – ce que j'ai fait pour moi, ce que chacun peut faire pour lui-même –, on voyage librement dans une vie. Le bagage est léger. On respire et on se laisse aller. Le temps n'existe plus : car c'est aussi cela la magie des parfums que de nous retirer du courant qui nous emporte, et nous donner l'illusion que nous sommes toujours ce que nous avons été, ou que nous fûmes ce que nous nous apprêtons à être. Alors la tête nous tourne délicieusement"`}
                author="Philippe Claudel"
            />
            <p className="text-justify">
                Les stagiaires qui travaillent dans des institutions ou entreprises commencent souvent par la formation Olfactocoaching et
                approfondissent les notions avec la formation Olfactothérapie par la suite (s'ils le souhaitent). Mais il n'est pas obligatoire de
                suivre les 2 formations, chacune peut être suivie indépendamment de l'autre.
            </p>
            <br />
            <p className="text-justify">L'OC s'adresse également à toute personne désireuse d'avancer sur ses projets (personnels, travail).</p>
            <br />

            {/* rubriques */}
            <SectionTitle title="Rubriques" />
            {APP_PAGES.filter((page) => page.path !== AppPagePaths.ACCUEIL && !page.legal).map((page) => (
                <div key={page.path} className="flex items-center gap-2">
                    <p className="pl-2 text-secondary">&#x2022;</p>
                    <LinkWrapper href={page.path} className="cta-link-style">
                        <p className="pl-2 text-secondary">{getPageConfig(page.path).headerName}</p>
                    </LinkWrapper>
                </div>
            ))}
            <br />
            <ImageWrapper id={AppPhotoIds.NEZ_LAVANDE} />

            {/* section */}
            <PreviousOrNextPages next={AppPagePaths.DEFINITION} />
        </PageWrapper>
    )
}
