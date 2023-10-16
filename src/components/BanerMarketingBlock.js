//Модуль баннерного маркетинга

export default function BanerMarketing(props) {
    const {baner} = props
    return(
        <a className="baner-marketing-link" href={baner.href}>
            <img className="baner-image" src={baner.src} alt={baner.alt}></img>
        </a>
    )
}