import { AppFormationIds, AppPagePaths, IconIds } from '../enums'

export interface InterfaceAppLink {
    headerName: string
    pageTitle: string
    path: AppPagePaths
    public: boolean
    legal: boolean
    sublinks: InterfaceAppLink[]
    icon?: IconIds
    description?: string
}

export interface APIResponse<Data> {
    data?: Data
    error: string
}

export interface SessionDeFormation {
    formation: AppFormationIds
    commencement: number
    date: string
    lieu: string
    horaires: string[]
    prix: string
    acompte: {
        suffitPourInscription: boolean
        montantEnEuros: number
    }
}
