'use client'

export default function Quote(props: { quote: string; author: string }) {
    return (
        <>
            <div className="flex w-full flex-col justify-end border-r-8 border-tertiary pl-12 pr-4 text-lg text-inactive">
                <p className="text-right text-quaternary">{props.quote}</p>
                <p className="text-right font-bold text-quaternary">{props.author}</p>
            </div>
            <br />
        </>
    )
}
