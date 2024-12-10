import { ReactNode } from 'react'
import SectionTitle from './SectionTitle'

export default function Programme(props: { children: ReactNode }) {
    return (
        <>
            <SectionTitle title="Au programme" />
            {props.children}
            <br />
        </>
    )
}
