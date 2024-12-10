import AjouterAuPanier from '@/components/app/AjouterAuPanier'
import PageTitle from '@/components/app/PageTitle'
import ImageWrapper from '@/components/common/ImageWrapper'
import MenuIndications from '@/components/common/MenuIndications'
import PageWrapper from '@/components/common/PageWrapper'
import { APP_METADATA } from '@/config/app.config'
import { AppPagePaths, AppPhotoIds } from '@/enums'
import { getPageConfig } from '@/utils'
import { Metadata } from 'next'

const pagePath = AppPagePaths.MATERIEL_LE_COFFRET_DE_BASE_AVEC_LES_8_SYNERGIES
export const metadata: Metadata = {
    title: `${APP_METADATA.SITE_NAME} | ${getPageConfig(pagePath).headerName}`,
}
export default function Page() {
    return (
        <PageWrapper>
            <MenuIndications paths={[AppPagePaths.MATERIEL, pagePath]} />
            <PageTitle pagePath={pagePath} />
            <p className="text-justify">Composition alchimique qui se superpose à l'élaboration mathématique initiale.</p>
            <br />
            <p className="text-justify">8 flacons de 2ml :</p>
            <p className="pl-2">&#x2022; 1 synergie pure par chakra</p>
            <p className="pl-2">&#x2022; Octessence pure, mariage des 7 autres synergies</p>
            <br />
            <ImageWrapper id={AppPhotoIds.OC_MATERIEL_8_SYNERGIES} />
            <p className="text-2xl font-bold text-primary">145,00 €</p>
            <p className="text-sm">
                Prix final, <span className="underline">frais de port non compris</span>
            </p>
            <p className="text-sm">TVA non applicable article 293 B du CGI.</p>
            <p className="text-sm">Livraison 5 à 10 jours*</p>
            <AjouterAuPanier />
            <p className="text-sm italic">
                * Ce délai de livraison n'est qu'indicatif, si vous êtes pressé renseignez vous sur le délai réel avant de commander svp.
            </p>
            <br />
        </PageWrapper>
    )
}
