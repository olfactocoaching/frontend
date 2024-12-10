export type InscriptionInputs = {
    prenom: string
    nom: string
    adresse: string
    codePostal: string
    ville: string
    pays: string
    telephone: string
    email: string
    profession: string
    prerequis: string
    cursusOlfactotherapieDejaSuivis: boolean
    cursusOlfactotherapieSuivis: string[]
    cursusOlfactocoachingDejaSuivis: boolean
    cursusOlfactocoachingSuivis: string[]
    message: string
}

export type GoogleSheetColumn =
    | 'Cursus'
    | 'Dates'
    | 'Prénom'
    | 'Nom'
    | 'Adresse'
    | 'Code Postal'
    | 'Ville'
    | 'Pays'
    | 'Téléphone'
    | 'Email'
    | 'Profession'
    | 'Prérequis'
    | 'Cursus_Olfactotherapie_Deja_Suivis'
    | 'Cursus_Olfactotherapie_Suivis'
    | 'Cursus_Olfactocoaching_Deja_Suivis'
    | 'Cursus_Olfactocoaching_Suivis'
    | 'Message'
