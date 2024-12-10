import LinkWrapper from '@/components/common/LinkWrapper'
import { AppPagePaths } from '@/enums'
import { getPageConfig } from '@/utils'
import SectionTitle from './SectionTitle'

export default function PrerequisFormation() {
    return (
        <>
            <SectionTitle title="Prérequis" />
            <p className="text-justify">
                Cette formation prévoit en prérequis l'un des Zooms qui ont pour thème:{' '}
                <LinkWrapper href={AppPagePaths.ZOOM_LES_BASES_OLFACTOTHERAPIE} className="cta-link-style px-1">
                    {getPageConfig(AppPagePaths.ZOOM_LES_BASES_OLFACTOTHERAPIE).headerName}
                </LinkWrapper>
                ou
                <LinkWrapper href={AppPagePaths.PREMIER_DEGRE_OLFACTOTHERAPIE} className="cta-link-style px-1">
                    {getPageConfig(AppPagePaths.PREMIER_DEGRE_OLFACTOTHERAPIE).headerName}
                </LinkWrapper>
                ; qu'il est de votre responsabilité d'avoir effectué pour la bonne compréhension du programme.{' '}
            </p>
            <br />
        </>
    )
}
