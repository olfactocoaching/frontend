import { GoogleSheetColumn } from '@/types'

export const instanciateNewInscriptionRow = (): Record<GoogleSheetColumn, string> => ({
    Cursus: '',
    Dates: '',
    Prénom: '',
    Nom: '',
    Adresse: '',
    'Code Postal': '',
    Ville: '',
    Pays: '',
    Téléphone: '',
    Email: '',
    Profession: '',
    Prérequis: '',
    Cursus_Olfactotherapie_Deja_Suivis: '',
    Cursus_Olfactotherapie_Suivis: '',
    Cursus_Olfactocoaching_Deja_Suivis: '',
    Cursus_Olfactocoaching_Suivis: '',
    Message: '',
})
