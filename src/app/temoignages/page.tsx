import PageTitle from '@/components/app/PageTitle'
import PreviousOrNextPages from '@/components/app/PreviousOrNextPages'
import ImageWrapper from '@/components/common/ImageWrapper'
import MenuIndication from '@/components/common/MenuIndication'
import PageWrapper from '@/components/common/PageWrapper'
import { AppPagePaths, AppPhotoIds } from '@/enums'
import { generatePageMetadata } from '@/utils'

const pagePath = AppPagePaths.TEMOIGNAGES
export const metadata = generatePageMetadata(pagePath)

export default function Page() {
    const quoteStyle = 'border-l-4 border-tertiary pl-3 italic'
    return (
        <PageWrapper>
            <MenuIndication secondaryPath={pagePath} />
            <PageTitle pagePath={pagePath} />
            <ImageWrapper id={AppPhotoIds.OLFACTOCOACHING_TEMOIGNAGE} />

            {/* 1 */}
            <p className="font-bold text-secondary">
                Témoignage de Marie suite aux sessions zoom "animer des groupes avec les odeurs" du 27- 28 janvier et 10 février 2024
            </p>
            <p className={quoteStyle}>
                "Merci beaucoup du fond du cœur pour cet accompagnement et ce que tu as proposé plein de ressources et issues de ta riche expérience
                et connaissances. Il y a des portes qui se réouvrent et parfois même au détour de visios zoom pratico-pratique. Même si cela aurait
                précieux que ces rencontres se passent en présentiel, il semble que pour moi ce fut le fameux "EUREKA", la clef de voûte pour que la
                "magie" reprenne au coeur même de la méthode comme quoi tout peut arriver. Je te remercie pour le partage de tes outils pratiques et
                toutes les suggestions que tu as pu faire. "
            </p>
            <br />

            {/* 2 */}
            <p className="font-bold text-secondary">Témoignage de Danièle Chenevier Paris, septembre 2021</p>
            <p className={quoteStyle}>
                Ce qui m’a amené vers l’olfactocoaching, c’était cette envie d’utiliser ce magnifique outil qu’est le coaching mais en le rendant plus
                ‘humain’, plus spirituel. Après une année de formation dans une école de coaching, j’en étais ressortie en sentant un décalage entre
                mes propres valeurs (en particulier d’accompagnement dans la douceur et le respect de l’autre) et celles du coaching ou j’avais
                l’impression qu’on me reprochait de ne pas assez ‘secouer’ mes coachés et ça je n’y arrivais pas; ce n’était pas moi. Avec les niveaux
                logiques, j’ai découvert comment les odeurs pouvaient faciliter l’émergence des 3 dernières marches (Valeurs/Croyances, Identité/Sens,
                Appartenance/Spirituel). Qui sont non visibles et donc souvent jamais abordées et difficilement accessibles pour des personnes qui ne
                sont pas dans le développement personnel ou qui ne sont tout simplement pas dans l’introspection. Sans les odeurs, j’ai vu des coachés
                sécher. Et des coachs galérer…. Une des choses que j’ai apprise en coaching classique: 'Le coach ne doit pas chercher à comprendre
                (pour lui)', m’a paru encore plus vrai. Parce qu’avec l’olfacto, tout et n’importe quoi peut émerger. Donc, ne pas s’en étonner et ne
                pas chercher à comprendre. Soit le coaché comprend et s’il ne comprend pas non plus, ça viendra plus tard. Donc en tant
                qu’accompagnant, il faut être encore plus dans le lâcher prise. Accueillir et accepter ce qui vient, Faire confiance au processus. Et
                pour moi, contrairement au coaching classique, ne pas forcement ‘recadrer’, voir peut être dans certains cas, ne surtout pas recadrer
                (tout en restant dans le cadre). Il y a beaucoup plus de souplesse, de créativité et d’adaptabilité en olfactocoaching. Et ça me va
                très bien :) Autre point que j’ai pu expérimenter avec la notion de choix. En coaching classique, quand on arrive avec plusieurs
                sujets possibles, on va au final travailler sur un de ces sujets. Voila ce qui m’est arrivé au début de l’exercice des niveaux
                logiques. Ma direction était : développer mon activité professionnelle, aussi bien chez moi, dans mon atelier qu’a l’extérieur, auprès
                d’associations, comme je le fais déjà. Et sur la case environnement, je commençais déjà à me dire ‘Bon il faut que je choisisse si je
                suis dans mon atelier ou à l’extérieur dans des associations.’ Et à la seconde ou j’ai senti l’odeur, je me suis vue dans une salle
                d’activité, dans un hôpital ! Et j’ai su que c’était juste. Que c’était ça que je voulais développer. Franchement, je suis certaine
                qu’avec le coaching classique je n’en serai pas arrivée à cette conclusion. Je serai partie plutôt sur mon atelier pour lequel j’ai
                fait des travaux d’aménagement cet été et j’aurai monté tout les niveaux avec ce postula mais qui n’était pas le meilleur pour moi.
                Pour finir, une dernière grosse différence que j’ai pu observer avec Pierino et Elena, c’est cette acceptation et cet accueil de la
                non action. En coaching classique, il y a cet notion de faire absolument ‘avancer' la personne en l’invitant à poser des actions
                concrètes en fin de séance et en vérifiant si elles ont bien été faites à la séance suivante. Je ressentais ça comme une véritable
                obligation qui ne convenait pas forcement à tout le monde et qui n’aurait pas convenu à Pierino et son rocher et à Elena adossée à son
                arbre dans la simple contemplation du paysage. Pour moi l’olfactocoaching respecte vraiment les temps de chacun.
            </p>
            <br />

            {/* 3 */}
            <p className="font-bold text-secondary">Témoignage du stage d'olfactocoaching à Paris Nov. 2016</p>
            <p className={quoteStyle}>
                Comment imaginer qu'après avoir passé des années à chercher à se connaître et à déterminer sa voie, personnelle et professionnelle, il
                reste encore tellement à trouver? J'oserais dire "l'essentiel" sans jeu de mot puisque c'est bien de l'utilisation strictement
                olfactive des huiles essentielles qu'il s'agit. Je me suis intéressée à cette discipline récente pour disposer d'outil performant et
                ludique dans l'accompagnement de projet de vie. Connaissant au départ (par ma pratique personnelle et ma formation de Conseil en
                aromathérapie) uniquement l'effet thérapeutique des huiles essentielles sur le corps et sur la psyché, c'est la découverte de son
                efficacité et de son aspect ludique qui m'amène à partager cette connaissance avec vous. Pour arriver à ce pas de géant final qui nous
                met en contact avec notre projet "idéal" en nous le faisant vivre en image et en ressenti corporel et mental, nous faisons tout un
                cheminement qui est une arborescence de choix guidé par les odeurs. L'intérêt majeur est d'engager le corps d'abord par le système
                olfactif pour atteindre la sensation et l'émotion de notre ressenti interne qui est une de nos vérités souvent peu entendue. Ensuite,
                c'est l'image qui est créée dans notre mental et qui fait appel à une autre vérité de notre identité et de notre fonctionnement
                psychique. Tout un protocole est suivi sous forme de parcours ludique qui nous mène du passé-présent au futur en se servant de
                l'impact de l'odeur des huiles essentielles. L'investissement du coaché est fort mais cela se fait naturellement par succession
                logique des stages. Le résultat est étonnant de justesse et d'adéquation homme-projet et le fait de le matérialiser dans une situation
                de "visualisation créative" lui donne beaucoup de force de motivation. La compétence et la bienveillance active de l'olfactocoaching®
                est bien entendu déterminante pour la réussite de cet accompagnement de projet. L'Olfactocoaching® est une méthode originale co-créée
                et enseignée par Gilles Fournil, créateur de l'Olfactothérapie® (1992) et Elisabeth Molina, coach professionnel formée à
                l'Olfactothérapie. Illustration : https://pixabay.com/fr/lavande-provence-france-1522722/ TUDAL Catherine Boulogne-sur-Gesse
                (Haute-Garonne)
            </p>
            <br />

            {/* 4 */}
            <p className="font-bold text-secondary">Témoignage du stage d'olfactocoaching à Aix Nov. 2015</p>
            <p className={quoteStyle}>
                Bonjour Elisabeth et Bonjour Gilles, Cela fait une semaine que nous avons terminé le stage "Olfacto-Co"... et je ne peux m'empêcher de
                revenir vers vous afin de vous remercier encore. Ces trois jours, en eveil, fut pour moi une réelle invitation vers un autre chemin.
                Et même si mon cursus personnel et professionnel m'a déjà invité à passer par des méandres et autres singularités de la vie, je dois
                dire que la porte qui s'ouvre devant moi est autre, belle...autrement belle. Vous avez su mêler deux fortes activités complémentaires.
                J'entrevois votre professionnalisme au service de nous tous, nous faisant basculer ainsi d'une activité à une profession en devenir...
                Pourquoi pas ? Olfacto-Coaching... est une porte vers nous, grand public. Un premier pas pour ouvrir tout un chacun vers ce qu'il a de
                plus beau en lui, vers une autre dimension de sa personne. Se mettre en marche vers soi-même et oser se révéler est un travail à temps
                plein et dont "l'Olfacto-Co" est un levier. Je le perçois ainsi car vécu ainsi durant ces trois jours. Votre formation ne s'arrête pas
                à de la théorie et à une application rigoureuse de protocoles. Elle est remplie d'amour de l'autre et de bienveillance. C'est ce qui
                fait le liant, l'alchimie comme dit Gilles. Comment aller vers soi sans passer par l'échange avec l'autre, l'humain, la nature, le
                subtil ? Alors Votre formation devient la Mienne. Et je me nourris de cette Alliance de Coeur. Aujourd'hui je suis heureuse. Ma
                semaine écoulée vient de me dire : voilà un autre chemin ! prends le ! Je ne sais pas si nos anges gardiens se connaissent mais il
                doit y avoir de ça... En tous les cas, le mien a bien su me guider vers vous... Merci à vous, merci à la vie. Je vous embrasse bien
                chaleureusement. Claire Hourcade
            </p>
            <br />

            {/* 5 */}
            <p className="font-bold text-secondary">Témoignages du stage d'olfactocoaching à Aix juin 2014</p>
            <p className={quoteStyle}>
                Chère Elisabeth, Cher Gilles, Vraiment un grand merci depuis mon joli bureau de 3 M2 à St Germain de Près. J'ai passé un excellent
                week end à vos côtés et beaucoup appris. Et pour vous remercier, mon petit témoignage... " Je tiens à remercier très sincèrement
                Elisabeth et Gilles pour ce stage sur l'Olfactocoaching. La proposition qui nous a été faite vient enrichir ma pratique de coach d'un
                outil précieux. En effet l'apport des odeurs dans une démarche de coaching permet d'éclairer autrement le projet en passant par le
                re-senti tout en restant dans le cadre. Merci encore pour vos recherches riches d'enseignements, dispensées dans la bienveillance et
                dans le respect de nos pratiques variées". A bientôt... Thierry
            </p>
            <br />

            {/* 6 */}
            <p className={quoteStyle}>
                "Merci à vous deux de cette belle alchimie , deux univers qui paraissent tellement différents ... L'univers olfactif en mettant le
                doigt au cœur de nos pulsions, désirs , peurs ...et l'univers du coaching qui nous ancre dans le concret : qui, quoi, comment .
                Challenge réussi que ce beau mariage au travers des protocoles de ces 3 jours , bonheur de vivre , sentir , ressentir que tout est
                là". "C'est une méthode percutante et suis convaincue de son avenir prometteur. » Fredée
            </p>
            <br />

            {/* 7 */}
            <p className={quoteStyle}>
                « Merci à tous les deux pour cette belle expérience vécue à ce stage en olfacto -coaching. Formée en parallèle à l'olfactotherapie et
                à certaines méthodes de coaching (PNL), j'avais du mal à en trouver le lien. Eh bien, c'est maintenant chose faite! Le pouvoir des
                odeurs connecte si merveilleusement l'être à ses propres solutions qu'il est extraordinaire de l'associer à une méthode de coaching. »
                Marie-Françoise
            </p>
            <br />

            {/* 8 */}
            <p className={quoteStyle}>
                « Ce séminaire olfactocoaching était pour moi au début juste un complément d'information, et je me rend compte que c'est bien plus que
                cela, c'est carrément une autre façon d'accompagner les personnes, avec les huiles essentielles. Ce qui me plait le plus dans cette
                nouvelle démarche différente de l'olfactothérapie, c'est de pouvoir utiliser les huiles essentielles pour un autre public. Cette
                démarche d'aller chercher les ressources de la personne pour son objectif ou son projet et non pas de travailler en allant chercher
                les émotions. Et une fois de plus je suis bluffée par les résultats de cette technique. Merci à vous deux pour ce travail de qualité
                qui me permet d'avoir un nouvel outil a proposer aux consultants. Rendez vous pour le deuxième séminaire qui je sais sera encore très
                riche. Je vous embrasse avec toute mon affection. » Anne
            </p>
            <br />

            <PreviousOrNextPages previous={AppPagePaths.AGENDA} next={AppPagePaths.MATERIEL} />
        </PageWrapper>
    )
}
