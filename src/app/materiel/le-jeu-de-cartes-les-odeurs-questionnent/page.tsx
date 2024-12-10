import AjouterAuPanier from '@/components/app/AjouterAuPanier'
import PageTitle from '@/components/app/PageTitle'
import ImageWrapper from '@/components/common/ImageWrapper'
import MenuIndications from '@/components/common/MenuIndications'
import PageWrapper from '@/components/common/PageWrapper'
import { APP_METADATA } from '@/config/app.config'
import { AppPagePaths, AppPhotoIds } from '@/enums'
import { getPageConfig } from '@/utils'
import { Metadata } from 'next'

const pagePath = AppPagePaths.MATERIEL_LE_JEU_DE_CARTES_LES_ODEURS_QUESTIONNENT
export const metadata: Metadata = {
    title: `${APP_METADATA.SITE_NAME} | ${getPageConfig(pagePath).headerName}`,
}
export default function Page() {
    return (
        <PageWrapper>
            <MenuIndications paths={[AppPagePaths.MATERIEL, pagePath]} />
            <PageTitle pagePath={pagePath} />
            <p className="text-justify">Un jeu facile à s’approprier en complément de la formation Olfactocoaching.</p>
            <br />
            <p className="text-justify">- à̀ utiliser en tant que professionnel de l’accompagnement pour enrichir sa pratique.</p>
            <br />
            <p className="text-justify">
                - à utiliser pour soi-même pour s’accoutumer au langage des odeurs avant même d’avoir suivi la formation grâce à un mode d’emploi très
                simple.
            </p>
            <br />
            <ImageWrapper id={AppPhotoIds.OC_MATERIEL_JEU_ODEURS_QUESTIONNENT_1} />
            <ImageWrapper id={AppPhotoIds.OC_MATERIEL_JEU_ODEURS_QUESTIONNENT_2} />
            <ImageWrapper id={AppPhotoIds.OC_MATERIEL_JEU_ODEURS_QUESTIONNENT_3} />
            <p className="text-2xl font-bold text-primary">35,00 €</p>
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
