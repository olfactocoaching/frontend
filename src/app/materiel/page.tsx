import PageTitle from '@/components/app/PageTitle'
import PreviousOrNextPages from '@/components/app/PreviousOrNextPages'
import Quote from '@/components/app/Quote'
import SectionTitle from '@/components/app/SectionTitle'
import ImageWrapper from '@/components/common/ImageWrapper'
import LinkWrapper from '@/components/common/LinkWrapper'
import MenuIndication from '@/components/common/MenuIndication'
import PageWrapper from '@/components/common/PageWrapper'
import { APP_METADATA } from '@/config/app.config'
import { AppPagePaths, AppPhotoIds } from '@/enums'
import { getPageConfig } from '@/utils'
import { Metadata } from 'next'

const pagePath = AppPagePaths.MATERIEL
export const metadata: Metadata = {
    title: `${APP_METADATA.SITE_NAME} | ${getPageConfig(pagePath).headerName}`,
}
export default function Page() {
    return (
        <PageWrapper>
            <MenuIndication secondaryPath={pagePath} />
            <PageTitle pagePath={pagePath} />
            <Quote quote={`"Tout mon génie est dans mes narines."`} author="Friedrich Nietzsche" />
            <SectionTitle title="Pour s'entraîner puis pratiquer" />
            <p>De manière générale pour s'entraîner puis pratiquer il faudra :</p>
            <div className="flex flex-wrap items-center gap-x-2">
                <LinkWrapper
                    target="_blank"
                    href="https://www.olfactotherapie.com/olfactocoaching/matériel-olfactocoaching/"
                    className="text-secondary"
                >
                    <p>
                        <span className="pl-2 pr-4">&#x2022;</span>
                        <span className="cta-link-style">
                            {getPageConfig(AppPagePaths.MATERIEL_LE_COFFRET_DE_BASE_AVEC_LES_8_SYNERGIES).headerName}
                        </span>
                    </p>
                </LinkWrapper>
            </div>
            <div className="flex flex-wrap items-center gap-x-2">
                <LinkWrapper
                    target="_blank"
                    href="https://www.olfactotherapie.com/olfactocoaching/matériel-olfactocoaching/"
                    className="text-secondary"
                >
                    <p>
                        <span className="pl-2 pr-4">&#x2022;</span>
                        <span className="cta-link-style">{getPageConfig(AppPagePaths.MATERIEL_UN_LOT_DE_TOUCHES_A_SENTIR).headerName}</span>
                    </p>
                </LinkWrapper>
            </div>
            <div className="flex flex-wrap items-center gap-x-2">
                <LinkWrapper
                    target="_blank"
                    href="https://www.olfactotherapie.com/olfactocoaching/matériel-olfactocoaching/"
                    className="text-secondary"
                >
                    <p>
                        <span className="pl-2 pr-4">&#x2022;</span>
                        <span className="cta-link-style">{getPageConfig(AppPagePaths.MATERIEL_UN_SUPPORT_POUR_LES_TOUCHES_A_SENTIR).headerName}</span>
                    </p>
                </LinkWrapper>
                <p>est recommandé car très pratique</p>
            </div>
            <br />
            <p>Également</p>
            <div className="flex flex-wrap items-center gap-x-2">
                <LinkWrapper
                    target="_blank"
                    href="https://www.olfactotherapie.com/la-boutique-olfactive/le-jeu-les-odeurs-questionnent"
                    className="text-secondary"
                >
                    <p>
                        <span className="pl-2 pr-4">&#x2022;</span>
                        <span className="cta-link-style">
                            {getPageConfig(AppPagePaths.MATERIEL_LE_JEU_DE_CARTES_LES_ODEURS_QUESTIONNENT).headerName}
                        </span>
                    </p>
                </LinkWrapper>
            </div>
            <br />
            <ImageWrapper id={AppPhotoIds.OC_MATERIEL_COFFRET_24} />
            <SectionTitle title="Pour les stages en présentiel" />
            <p className="text-justify">
                Durant les stages en présentiel, nous fonctionnons par prêt. Celles et ceux qui ont déjà leur coffrets sont invités à les apporter.
                Pour les nouveaux, il n'est pas indispensable d'investir avant d'avoir expérimenté les protocoles.
            </p>
            <br />
            <SectionTitle title="Pour les sessions en ligne" />
            <p className="text-justify">Pour les séances en ligne, si ce n'est pas possible d'investir tout de suite, se procurer :</p>
            <div className="flex flex-wrap items-center gap-x-2">
                <LinkWrapper
                    target="_blank"
                    href="https://www.olfactotherapie.com/la-boutique-olfactive/s%C3%A9rie-des-16-huiles-essentielles"
                    className="text-secondary"
                >
                    <p>
                        <span className="px-2">&#x2022;</span>
                        <span className="px-2 text-default">A minima</span>
                        <span className="cta-link-style">{getPageConfig(AppPagePaths.MATERIEL_LES_16_ODEURS_DE_BASE_EN_RECHARGE).pageTitle}</span>
                    </p>
                </LinkWrapper>
            </div>
            <div className="flex items-start gap-2">
                <p className="pl-2 text-secondary">&#x2022;</p>
                <p className="pl-2">
                    Ou encore plus a minima quelques HE pure à acheter par vos soins : lavande vraie, romarin verbenone, bergamote, histoire de
                    participer lorsqu'il vous sera demandé de choisir une odeur.
                </p>
            </div>
            <br />
            <ImageWrapper id={AppPhotoIds.ANIMER_GROUPE_AVEC_ODEURS} />
            <PreviousOrNextPages previous={AppPagePaths.TEMOIGNAGES} />
        </PageWrapper>
    )
}
