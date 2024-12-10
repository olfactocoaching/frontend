import SectionTitle from './SectionTitle'

export default function MailDeNotificationDeVirement() {
    return (
        <>
            <SectionTitle title="3. Mail de notification de virement" />
            <p className="text-justify">
                Nous vous demandons de bien vouloir confirmer votre paiement avec un mail de notification de virement à mon intention (
                <a href="mailto:monalisacoaching@orange.fr" className="cta-link-style font-bold">
                    monalisacoaching@orange.fr
                </a>
                ) pour que j'en sois prévenue au plus tôt.
            </p>
            <br />
        </>
    )
}
