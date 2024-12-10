import AjouterAuPanier from '@/components/app/AjouterAuPanier'
import PageTitle from '@/components/app/PageTitle'
import ImageWrapper from '@/components/common/ImageWrapper'
import MenuIndications from '@/components/common/MenuIndications'
import PageWrapper from '@/components/common/PageWrapper'
import { APP_METADATA } from '@/config/app.config'
import { AppPagePaths, AppPhotoIds } from '@/enums'
import { getPageConfig } from '@/utils'
import { Metadata } from 'next'

const pagePath = AppPagePaths.MATERIEL_LES_16_ODEURS_DE_BASE_EN_RECHARGE
export const metadata: Metadata = {
    title: `${APP_METADATA.SITE_NAME} | ${getPageConfig(pagePath).headerName}`,
}
export default function Page() {
    return (
        <PageWrapper>
            <MenuIndications paths={[AppPagePaths.MATERIEL, pagePath]} />
            <PageTitle pagePath={pagePath} />
            <p className="text-justify">Coffret en pin contenant 16 HE pures et naturelles d'une contenance de 1ml et 2,5ml.</p>
            <br />
            <p className="text-justify">
                Cèdre, Girofle, Ylang-Ylang, Santal(1ml), Lavande, Romarin, Myrrhe, Bergamote, Rose,(1ml) Géranium, Eucalyptus radiata, Sauge, Menthe
                verte, Menthe poivrée, Jasmin(1ml), Encens.
            </p>
            <br />
            <ImageWrapper id={AppPhotoIds.OC_MATERIEL_16_HE} />
            <p className="text-2xl font-bold text-primary">168,00 €</p>
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
