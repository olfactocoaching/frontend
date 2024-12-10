import AjouterAuPanier from '@/components/app/AjouterAuPanier'
import PageTitle from '@/components/app/PageTitle'
import ImageWrapper from '@/components/common/ImageWrapper'
import MenuIndications from '@/components/common/MenuIndications'
import PageWrapper from '@/components/common/PageWrapper'
import { APP_METADATA } from '@/config/app.config'
import { AppPagePaths, AppPhotoIds } from '@/enums'
import { getPageConfig } from '@/utils'
import { Metadata } from 'next'

const pagePath = AppPagePaths.MATERIEL_UN_SUPPORT_POUR_LES_TOUCHES_A_SENTIR
export const metadata: Metadata = {
    title: `${APP_METADATA.SITE_NAME} | ${getPageConfig(pagePath).headerName}`,
}
export default function Page() {
    return (
        <PageWrapper>
            <MenuIndications paths={[AppPagePaths.MATERIEL, pagePath]} />
            <PageTitle pagePath={pagePath} />
            <p className="text-justify">Support touches à sentir en Bois.</p>
            <br />
            <p className="text-justify">Composé de ses 24 fentes, il classera et accueillera vos touches à sentir lors des séances.</p>
            <br />
            <p className="text-justify">
                Le support étant une pièce unique, fabriqué par un artisan ébéniste, la couleur n'est pas contractuelle. Le bois étant parfois plus
                clair ou plus foncé.
            </p>
            <br />
            <ImageWrapper id={AppPhotoIds.OC_MATERIEL_SUPPORT_TOUCHES_A_SENTIR_1} />
            <p className="text-2xl font-bold text-primary">48,00 €</p>
            <p className="text-sm">
                Prix final, <span className="underline">frais de port non compris</span>
            </p>
            <p className="text-sm">TVA non applicable article 293 B du CGI.</p>
            <p className="text-sm">Livraison 5 à 10 jours*</p>
            <AjouterAuPanier />
            <br />
            <p className="text-sm italic">
                * Ce délai de livraison n'est qu'indicatif, si vous êtes pressé renseignez vous sur le délai réel avant de commander svp.
            </p>
            <br />
            <ImageWrapper id={AppPhotoIds.OC_MATERIEL_SUPPORT_TOUCHES_A_SENTIR_2} />
        </PageWrapper>
    )
}
