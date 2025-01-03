import PageTitle from '@/components/app/PageTitle'
import PreviousOrNextPages from '@/components/app/PreviousOrNextPages'
import Quote from '@/components/app/Quote'
import SectionTitle from '@/components/app/SectionTitle'
import ImageWrapper from '@/components/common/ImageWrapper'
import LinkWrapper from '@/components/common/LinkWrapper'
import MenuIndication from '@/components/common/MenuIndication'
import PageWrapper from '@/components/common/PageWrapper'
import { AppAuthors, AppPagePaths, AppPhotoIds } from '@/enums'
import { generatePageMetadata } from '@/utils'

const pagePath = AppPagePaths.EQUIPE
export const metadata = generatePageMetadata(pagePath)

export default function Page() {
    return (
        <PageWrapper>
            <MenuIndication secondaryPath={pagePath} />
            <PageTitle pagePath={pagePath} />
            <p className="text-inactive">Co créateurs & animateurs de l'Olfactocoaching</p>
            <br />
            {/* section */}
            <SectionTitle title={AppAuthors.ELISABETH_MOLINA} />
            <p className="pl-2 text-justify">
                &#x2022; De formation pluridisciplinaire (IEP Aix et 3ème Cycle en management des RH), après 15 années de développement des ressources
                humaines en grande entreprise industrielle internationale chez Airbus Helicopters, elle décide de se lancer dans l’accompagnement des
                personnes en 2006.
            </p>
            <p className="pl-2 text-justify">
                &#x2022; Certifiée Coach and Team Vincent Lenhardt, maître-praticien en Programmation Neurolinguistique, formée et diplômée en
                Olfactothérapie® par Gilles Fournil et en Yoga traditionnel, elle approfondit l’écoute du corps au travers des enseignements du yoga
                du Cachemire (Eric Baret) et de la voie du senti (Luis Ansa)
            </p>
            <p className="pl-2 text-justify">
                &#x2022; Persuadée de l’intérêt de l’intégration de la dimension corporelle en coaching, elle crée
                <LinkWrapper href={AppPagePaths.ACCUEIL} className="cta-link-style px-1">
                    l'Olfactocoaching ®
                </LinkWrapper>
                , avec Gilles Fournil.
            </p>
            <p className="pl-2 text-justify">
                &#x2022; Vit actuellement près de Grasse avec son compagnon Ronald au
                <LinkWrapper href="https://www.domainedestilleulsdor.com/" className="cta-link-style px-1">
                    Domaine des Tilleuls d’Or
                </LinkWrapper>
                , lieu de ressourcement autour des odeurs.
            </p>
            <br />
            <ImageWrapper id={AppPhotoIds.OLFACTOCOACHING_ELISABETH} />
            <Quote
                quote={`"Il est des parfums frais comme des chairs d’enfants, doux comme les hautbois, verts comme les prairies, et d’autres, corrompus, riches et triomphants, ayant l’expansion des choses infinies, comme l’ambre, le musc, le benjoin et l’encens, qui chantent les transports de l’esprit et des sens."`}
                author="Charles Baudelaire"
            />
            {/* section */}
            <SectionTitle title={AppAuthors.GILLES_FOURNIL} />
            <p className="pl-2 text-justify">
                &#x2022; Passionné par l'évolution de la Conscience, il explore depuis quarante années les causes profondes de la souffrance humaine
                et ses résolutions.
            </p>
            <p className="pl-2 text-justify">&#x2022; Il est thérapeute transpersonnel, énergéticien, somatologue.</p>
            <p className="pl-2 text-justify">
                &#x2022; Un clinicat, puis les expériences en cabinet des nombreux praticiens de santé formés par la suite à la méthode, confirment le
                bien fondé de cette approche novatrice.
            </p>
            <p className="pl-2 text-justify">
                &#x2022; Outre les cycles de formation, il anime aussi des séminaires de développement personnel où les odeurs sont omniprésentes.
            </p>
            <p className="pl-2 text-justify">
                &#x2022; Persuadé de l’efficacité de sa méthode, désirant réaliser un pont avec le monde de l’entreprise qu’il connait par ailleurs
                pour avoir été pendant plus de 30 ans dispatcher principal à EDF. Il crée
                <LinkWrapper href={AppPagePaths.ACCUEIL} className="cta-link-style px-1">
                    l'Olfactocoaching ®
                </LinkWrapper>
                , avec {AppAuthors.ELISABETH_MOLINA}.
            </p>{' '}
            <br />
            <ImageWrapper id={AppPhotoIds.OLFACTOCOACHING_EQUIPE} />
            <PreviousOrNextPages previous={AppPagePaths.DEFINITION} next={AppPagePaths.STAGES} />
        </PageWrapper>
    )
}
