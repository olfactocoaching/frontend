import { AppAuthors, AppFormationIds, AppPagePaths, AppPhotoIds, AppThemes, IconIds } from '@/enums'
import { InterfaceAppLink, SessionDeFormation } from '@/interfaces'
import dayjs from 'dayjs'

export const APP_METADATA = {
    SITE_AUTHOR: 'Olfactocoaching',
    SITE_NAME: 'Olfactocoaching',
    SITE_DESCRIPTION:
        "La magie des odeurs pour les projets. L'Olfactocoaching est une formation qui utilise certains outils du coaching dans l'esprit Olfacto, mais n'est pas une formation au coaching. 3 stages à thème accessibles avec le prérequis et indépendants les uns des autres.",
    SITE_URL: 'https://www.olfactocoaching.com',
    SITE_MAILS: ['monalisacoaching@orange.fr', 'gilles.fournil@orange.fr'],
    SOCIALS: {
        FACEBOOK: 'https://www.facebook.com/olfactocoaching',
    },
}
export const root = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : APP_METADATA.SITE_URL
export const debug = false
export const APP_THEMES: Partial<Record<AppThemes, { index: number; iconId: IconIds }>> = {
    [AppThemes.LIGHT]: { index: 0, iconId: IconIds.THEME_LIGHT },
    [AppThemes.DARK]: { index: 1, iconId: IconIds.THEME_DARK },
}
export const LIEN_DE_PAIEMENT = 'https://www.olfactotherapie.com/olfactocoaching/dates-tarifs-inscriptions-programmes/paiement-olfactocoaching/'
export const APP_PAGES: InterfaceAppLink[] = [
    // default
    {
        headerName: 'Accueil',
        pageTitle: 'Accueil',
        path: AppPagePaths.ACCUEIL,
        public: true,
        legal: false,
        sublinks: [],
    },

    // rubriques
    {
        headerName: "Qu'est ce que l'Olfactocoaching ?",
        pageTitle: "Qu'est ce que l'Olfactocoaching ?",
        path: AppPagePaths.DEFINITION,
        public: true,
        legal: false,
        sublinks: [],
    },
    {
        headerName: 'Qui sommes nous ?',
        pageTitle: `${AppAuthors.ELISABETH_MOLINA} & ${AppAuthors.GILLES_FOURNIL}`,
        path: AppPagePaths.EQUIPE,
        public: true,
        legal: false,
        sublinks: [],
    },
    {
        headerName: 'Les stages',
        pageTitle: 'Les stages',
        path: AppPagePaths.STAGES,
        public: true,
        legal: false,
        sublinks: [
            {
                headerName: 'Accompagnement individuel en Olfactocoaching',
                pageTitle: 'Accompagnement individuel en Olfactocoaching',
                path: AppPagePaths.ACCOMPAGNEMENT_INDIVIDUEL,
                public: true,
                legal: false,
                sublinks: [],
            },
            {
                headerName: 'Animer des groupes avec les odeurs',
                pageTitle: 'Animer des groupes avec les odeurs',
                path: AppPagePaths.ANIMER_DES_GROUPES_AVEC_DES_ODEURS,
                public: true,
                legal: false,
                sublinks: [],
            },
            {
                headerName: 'Le Voyage Olfactif du Héros',
                pageTitle: 'Le Voyage Olfactif du Héros',
                path: AppPagePaths.VOYAGE_OLFACTIF_DU_HEROS,
                public: true,
                legal: false,
                sublinks: [],
            },
            {
                headerName: `Les bases de l'Olfactothérapie`,
                pageTitle: `Zoom : les bases de l'Olfactothérapie`,
                path: AppPagePaths.ZOOM_LES_BASES_OLFACTOTHERAPIE,
                public: true,
                legal: false,
                sublinks: [],
            },
            {
                headerName: `Premiers degrés d'Olfactothérapie`,
                pageTitle: `Zoom : Premiers degrés d'Olfactothérapie`,
                path: AppPagePaths.PREMIER_DEGRE_OLFACTOTHERAPIE,
                public: true,
                legal: false,
                sublinks: [],
            },
        ],
    },
    {
        headerName: 'Agenda',
        pageTitle: 'Agenda',
        path: AppPagePaths.AGENDA,
        public: true,
        legal: false,
        sublinks: [],
    },
    {
        headerName: 'Témoignages',
        pageTitle: 'Témoignages',
        path: AppPagePaths.TEMOIGNAGES,
        public: true,
        legal: false,
        sublinks: [],
    },
    {
        headerName: 'Matériel',
        pageTitle: 'Matériel à prévoir',
        path: AppPagePaths.MATERIEL,
        public: true,
        legal: false,
        sublinks: [
            {
                headerName: 'Le coffret de base avec les 8 synergies',
                pageTitle: 'Le coffret de base avec les 8 synergies',
                path: AppPagePaths.MATERIEL_LE_COFFRET_DE_BASE_AVEC_LES_8_SYNERGIES,
                public: true,
                legal: false,
                sublinks: [],
            },
            {
                headerName: 'Des touches à sentir',
                pageTitle: 'Des touches à sentir',
                path: AppPagePaths.MATERIEL_UN_LOT_DE_TOUCHES_A_SENTIR,
                public: true,
                legal: false,
                sublinks: [],
            },
            {
                headerName: 'Un support pour les touches à sentir',
                pageTitle: 'Un support pour les touches à sentir',
                path: AppPagePaths.MATERIEL_UN_SUPPORT_POUR_LES_TOUCHES_A_SENTIR,
                public: true,
                legal: false,
                sublinks: [],
            },
            {
                headerName: 'Le jeu de cartes "Les Odeurs questionnent"',
                pageTitle: 'Jeu "Les Odeurs Questionnent"',
                path: AppPagePaths.MATERIEL_LE_JEU_DE_CARTES_LES_ODEURS_QUESTIONNENT,
                public: true,
                legal: false,
                sublinks: [],
            },
            {
                headerName: 'Les 16 odeurs de base en recharge',
                pageTitle: 'Les 16 odeurs de base en recharge',
                path: AppPagePaths.MATERIEL_LES_16_ODEURS_DE_BASE_EN_RECHARGE,
                public: true,
                legal: false,
                sublinks: [],
            },
        ],
    },

    // legal
    {
        headerName: 'Mentions légales',
        pageTitle: 'Mentions légales',
        path: AppPagePaths.MENTION_LEGALES,
        public: true,
        legal: true,
        sublinks: [],
    },
    {
        headerName: 'Conditions de livraison et de paiement',
        pageTitle: 'Conditions de livraison et de paiement',
        path: AppPagePaths.CONDITIONS,
        public: true,
        legal: true,
        sublinks: [],
    },
    {
        headerName: 'Confidentialité',
        pageTitle: 'Confidentialité',
        path: AppPagePaths.CONFIDENTIALITE,
        public: true,
        legal: true,
        sublinks: [],
    },
    {
        headerName: 'Cookies',
        pageTitle: 'Cookies',
        path: AppPagePaths.COOKIES,
        public: true,
        legal: true,
        sublinks: [],
    },
    {
        headerName: 'Plan du site',
        pageTitle: 'Plan du site',
        path: AppPagePaths.PLAN,
        public: true,
        legal: true,
        sublinks: [],
    },
    {
        headerName: 'Page non trouvée',
        pageTitle: 'Page non trouvée',
        path: AppPagePaths.NOT_FOUND,
        public: true,
        legal: false,
        sublinks: [],
    },
]

const GITHUB_MEDIAS = 'https://raw.githubusercontent.com/olfactocoaching/medias/36e71294b6645e2180f846aaa6c0be64c6a42dea/public'
export const APP_PHOTOS: Record<AppPhotoIds, { src: string; alt?: string }> = {
    [AppPhotoIds.ACCOMPAGNEMENT_INDIVIDUEL]: {
        src: `${GITHUB_MEDIAS}/oc-1-raw.jpg`,
    },
    [AppPhotoIds.ANIMER_GROUPE_AVEC_ODEURS]: {
        src: `${GITHUB_MEDIAS}/oc-2-raw.jpg`,
    },
    [AppPhotoIds.NEZ_LAVANDE]: {
        src: `${GITHUB_MEDIAS}/oc-3-raw.jpg`,
    },
    [AppPhotoIds.OLFACTOCOACHING_BANDEAU]: {
        src: `${GITHUB_MEDIAS}/oc-4-raw.jpg`,
    },
    [AppPhotoIds.OLFACTOCOACHING_ETAPE_1]: {
        src: `${GITHUB_MEDIAS}/oc-5-raw.jpg`,
    },
    [AppPhotoIds.OLFACTOCOACHING_ETAPE_2]: {
        src: `${GITHUB_MEDIAS}/oc-6-raw.jpg`,
    },
    [AppPhotoIds.OLFACTOCOACHING_FLEUR]: {
        src: `${GITHUB_MEDIAS}/oc-7-raw.png`,
    },
    [AppPhotoIds.OLFACTOCOACHING_LES_ENJEUX]: {
        src: `${GITHUB_MEDIAS}/oc-8-raw.jpg`,
    },
    [AppPhotoIds.OLFACTOCOACHING_LES_SPECIFICITES]: {
        src: `${GITHUB_MEDIAS}/oc-9-raw.jpg`,
    },
    [AppPhotoIds.OLFACTOCOACHING_LOGO_INTRO]: {
        src: `${GITHUB_MEDIAS}/oc-10-raw.jpg`,
    },
    [AppPhotoIds.OLFACTOCOACHING_POST_FACEBOOK]: {
        src: `${GITHUB_MEDIAS}/oc-11-raw.jpg`,
    },
    [AppPhotoIds.OLFACTOCOACHING_POUR_QUI]: {
        src: `${GITHUB_MEDIAS}/oc-12-raw.jpg`,
    },
    [AppPhotoIds.OLFACTOCOACHING_TEMOIGNAGE]: {
        src: `${GITHUB_MEDIAS}/oc-13-raw.jpg`,
    },
    [AppPhotoIds.VOYAGE_OLFACTIF_DU_HEROS]: {
        src: 'https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ',
    },

    // equipe
    [AppPhotoIds.OLFACTOCOACHING_ELISABETH]: {
        src: `${GITHUB_MEDIAS}/oc-equipe-1-raw.jpg`,
    },
    [AppPhotoIds.OLFACTOCOACHING_EQUIPE]: {
        src: `${GITHUB_MEDIAS}/oc-equipe-2-raw.png`,
    },

    // materiel
    [AppPhotoIds.OC_MATERIEL_8_SYNERGIES]: {
        src: `${GITHUB_MEDIAS}/oc-materiel-1-raw.jpg`,
    },
    [AppPhotoIds.OC_MATERIEL_16_HE]: {
        src: `${GITHUB_MEDIAS}/oc-materiel-2-raw.jpg`,
    },
    [AppPhotoIds.OC_MATERIEL_COFFRET_24]: {
        src: `${GITHUB_MEDIAS}/oc-materiel-3-raw.jpg`,
    },
    [AppPhotoIds.OLFACTOCOACHING_ODEURS_QUESTIONNENT]: {
        src: `${GITHUB_MEDIAS}/oc-materiel-4-raw.png`,
    },
    [AppPhotoIds.OC_MATERIEL_JEU_ODEURS_QUESTIONNENT_1]: {
        src: `${GITHUB_MEDIAS}/oc-materiel-5-raw.png`,
    },
    [AppPhotoIds.OC_MATERIEL_JEU_ODEURS_QUESTIONNENT_2]: {
        src: `${GITHUB_MEDIAS}/oc-materiel-6-raw.png`,
    },
    [AppPhotoIds.OC_MATERIEL_JEU_ODEURS_QUESTIONNENT_3]: {
        src: `${GITHUB_MEDIAS}/oc-materiel-7-raw.png`,
    },
    [AppPhotoIds.OC_MATERIEL_SUPPORT_TOUCHES_A_SENTIR_1]: {
        src: `${GITHUB_MEDIAS}/oc-materiel-8-raw.jpg`,
    },
    [AppPhotoIds.OC_MATERIEL_SUPPORT_TOUCHES_A_SENTIR_2]: {
        src: `${GITHUB_MEDIAS}/oc-materiel-9-raw.jpg`,
    },
    [AppPhotoIds.OC_MATERIEL_UN_LOT_DE_TOUCHES_A_SENTIR]: {
        src: `${GITHUB_MEDIAS}/oc-materiel-10-raw.jpg`,
    },
}
export const APP_SESSIONS: Record<
    AppFormationIds,
    {
        path: AppPagePaths
        sessions: SessionDeFormation[]
    }
> = {
    [AppFormationIds.STAGE_ACCOMPAGNEMENT_INDIVIDUEL]: {
        path: AppPagePaths.ACCOMPAGNEMENT_INDIVIDUEL,
        sessions: [
            {
                formation: AppFormationIds.STAGE_ACCOMPAGNEMENT_INDIVIDUEL,
                commencement: dayjs('2025-03-22').unix(),
                date: '22 / 23 mars 2025 et 29 / 30 mars 2025',
                lieu: 'Paris 75014 Bd. Raspail',
                horaires: [
                    'Samedi 22 mars: 9h30 - 18h00',
                    'Dimanche 23 mars : 9h30 - 16h',
                    'Samedi 29 mars: 9h30 - 18h00',
                    'Dimanche 30 mars : 9h30 - 16h',
                ],
                prix: '350 € pour les 4 jours',
                acompte: {
                    suffitPourInscription: true,
                    montantEnEuros: 80,
                },
            },
            {
                formation: AppFormationIds.STAGE_ACCOMPAGNEMENT_INDIVIDUEL,
                commencement: dayjs('2025-11-27').unix(),
                date: '27 au 30 novembre 2025',
                lieu: 'Domaine du Taillé (Ardèche)',
                horaires: ['Début: Jeudi 27 novembre 15h', 'Fin: Dimanche 30 novembre 16h'],
                prix: '395 € pour les 4 jours et 3 soirées (résidentiel)',
                acompte: {
                    suffitPourInscription: true,
                    montantEnEuros: 80,
                },
            },
        ],
    },
    [AppFormationIds.STAGE_ZOOM_ANIMER_DES_GROUPES_AVEC_DES_ODEURS]: {
        path: AppPagePaths.ANIMER_DES_GROUPES_AVEC_DES_ODEURS,
        sessions: [
            {
                formation: AppFormationIds.STAGE_ZOOM_ANIMER_DES_GROUPES_AVEC_DES_ODEURS,
                commencement: dayjs('2025-01-25').unix(),
                date: '25 / 26 janvier 2025 et 8 février 2025',
                lieu: 'Zoom',
                horaires: ['de 9h30 à 12h15 avec 15mn de pause'],
                prix: '152 € pour les 3 sessions de 2H30',
                acompte: {
                    suffitPourInscription: false,
                    montantEnEuros: -1,
                },
            },
            {
                formation: AppFormationIds.STAGE_ZOOM_ANIMER_DES_GROUPES_AVEC_DES_ODEURS,
                commencement: dayjs('2025-05-17').unix(),
                date: '17 / 18 mai 2025 et 14 juin 2025',
                lieu: 'Zoom',
                horaires: ['de 9h30 à 12h15 avec 15mn de pause'],
                prix: '152 € pour les 3 sessions de 2H30',
                acompte: {
                    suffitPourInscription: false,
                    montantEnEuros: -1,
                },
            },
        ],
    },
    [AppFormationIds.STAGE_VOYAGE_OLFACTIF_DU_HEROS]: {
        path: AppPagePaths.VOYAGE_OLFACTIF_DU_HEROS,
        sessions: [],
    },
    [AppFormationIds.ZOOM_LES_BASES_OLFACTOTHERAPIE]: {
        path: AppPagePaths.ZOOM_LES_BASES_OLFACTOTHERAPIE,
        sessions: [
            {
                formation: AppFormationIds.ZOOM_LES_BASES_OLFACTOTHERAPIE,
                commencement: dayjs('2025-01-17').unix(),
                date: '18 janvier 2025',
                lieu: 'Zoom',
                horaires: ['de 9h00 à 12h30 (30mn de pause)'],
                prix: '89 € pour la session de 3H',
                acompte: {
                    suffitPourInscription: false,
                    montantEnEuros: -1,
                },
            },
        ],
    },
    [AppFormationIds.ZOOM_PREMIER_DEGRE_OLFACTOTHERAPIE]: {
        path: AppPagePaths.PREMIER_DEGRE_OLFACTOTHERAPIE,
        sessions: [
            // {
            //     commencement: dayjs('2025-03-07').unix(),
            //     date: '7 / 8 / 9 mars 2025',
            //     lieu: 'Paris',
            //     horaires: [
            //         'Vendredi : 9h - 18h30 pause déjeuner 1h30',
            //         'Samedi :  9h - 18h30 pause déjeuner 1h30',
            //         'Dimanche : 9h - 17h pause déjeuner 1h30',
            //     ],
            //     prix: '300 € pour les 3 jours de stage',
            //     acompte: {
            //         suffitPourInscription: false,
            //         montantEnEuros: -1,
            //     },
            // },
            // {
            //     commencement: dayjs('2025-05-16').unix(),
            //     date: '16 / 17 / 18 mai 2025',
            //     lieu: 'Aix en Provence',
            //     horaires: [
            //         'Vendredi : 9h - 18h30 pause déjeuner 1h30',
            //         'Samedi :  9h - 18h30 pause déjeuner 1h30',
            //         'Dimanche : 9h - 17h pause déjeuner 1h30',
            //     ],
            //     prix: '300 € pour les 3 jours de stage',
            //     acompte: {
            //         suffitPourInscription: false,
            //         montantEnEuros: -1,
            //     },
            // },
            // {
            //     commencement: dayjs('2025-10-10').unix(),
            //     date: '10 / 11 / 12 octobre 2025',
            //     lieu: 'Lyon',
            //     horaires: [
            //         'Vendredi : 9h - 18h30 pause déjeuner 1h30',
            //         'Samedi :  9h - 18h30 pause déjeuner 1h30',
            //         'Dimanche : 9h - 17h pause déjeuner 1h30',
            //     ],
            //     prix: '300 € pour les 3 jours de stage',
            //     acompte: {
            //         suffitPourInscription: false,
            //         montantEnEuros: -1,
            //     },
            // },
        ],
    },
}
