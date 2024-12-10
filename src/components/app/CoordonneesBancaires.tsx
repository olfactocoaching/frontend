import { ReactNode } from 'react'
import SectionTitle from './SectionTitle'

export default function CoordonneesBancaires(props: { pricingDetails: ReactNode }) {
    return (
        <>
            <SectionTitle title="2. Coordonnées bancaires pour effectuer votre paiement" />
            {props.pricingDetails}
            <br />
            <div className="flex flex-col border-l-4 border-quaternary pl-4">
                <p>Etablissement : 30004</p>
                <p>Guichet : 00701</p>
                <p>N° de compte : 00010092523</p>
                <p>Clé rib : 26</p>
                <p>IBAN identifiant international de Compte : FR76 3000 4007 0100 0100 9252 326</p>
                <p>BIC identifiant international de l'établissement : BNPAFRPPXXX</p>
                <p>Domiciliation : BNPPARB PEYMEINADE 02243</p>
            </div>
            <br />
        </>
    )
}
