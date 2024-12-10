import { ReactNode } from 'react'
import SectionTitle from './SectionTitle'

export default function ProchainesDates(props: { children: ReactNode; products?: string }) {
    return (
        <>
            <SectionTitle title={props.products ?? 'Prochaines dates'} />
            {props.children}
            <br />
        </>
    )
}
