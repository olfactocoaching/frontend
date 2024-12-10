export default function AjouterAuPanier() {
    return (
        <>
            <div className="flex flex-col gap-0 py-1">
                <button className="w-fit cursor-not-allowed rounded-lg bg-primary px-3 py-2 text-white" disabled={true}>
                    <p>Ajouter au panier</p>
                </button>
                <p className="text-sm italic text-quaternary">malheureusement en rupture de stock</p>
            </div>
            <br />
        </>
    )
}
