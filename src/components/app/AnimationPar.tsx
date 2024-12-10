import LinkWrapper from '@/components/common/LinkWrapper'
import { AppAuthors, AppPagePaths } from '@/enums'

export default function AnimationPar(props: { hosts: AppAuthors[] }) {
    return (
        <>
            <p className="">
                Animé par
                {props.hosts.length >= 1 && (
                    <LinkWrapper href={AppPagePaths.EQUIPE} className="cta-link-style px-1">
                        {props.hosts[0]}
                    </LinkWrapper>
                )}
                {props.hosts.length >= 2 && (
                    <>
                        et
                        <LinkWrapper href={AppPagePaths.EQUIPE} className="cta-link-style px-1">
                            {props.hosts[1]}
                        </LinkWrapper>
                    </>
                )}
            </p>
            <br />
        </>
    )
}
