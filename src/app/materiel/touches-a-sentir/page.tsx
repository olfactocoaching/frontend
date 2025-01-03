import AjouterAuPanier from '@/components/app/AjouterAuPanier'
import PageTitle from '@/components/app/PageTitle'
import ImageWrapper from '@/components/common/ImageWrapper'
import MenuIndications from '@/components/common/MenuIndications'
import PageWrapper from '@/components/common/PageWrapper'
import { AppPagePaths, AppPhotoIds } from '@/enums'
import { generatePageMetadata } from '@/utils'

const pagePath = AppPagePaths.MATERIEL_UN_LOT_DE_TOUCHES_A_SENTIR
export const metadata = generatePageMetadata(pagePath)
export default function Page() {
    return (
        <PageWrapper>
            <MenuIndications paths={[AppPagePaths.MATERIEL, pagePath]} />
            <PageTitle pagePath={pagePath} />
            <p className="text-justify">
                100 Touches à sentir. Touches de parfumeur professionnelles pour s'adapter à tous les cols de flacons, même les plus étroits.
            </p>
            <br />
            <ImageWrapper id={AppPhotoIds.OC_MATERIEL_UN_LOT_DE_TOUCHES_A_SENTIR} />
            <p className="text-2xl font-bold text-primary">6,00 €</p>
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
