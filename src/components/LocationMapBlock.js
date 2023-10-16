//информационный блок с геолокацией

export default function LocationMap(props) {
    const { listLink, title } = props
    return(
        <>
            <h5 className='info-title'>{title}</h5>
            <ul className="loacation-map-list-links">
                {listLink.map(item => 
                    <li className="loacation-map-list-item" key={item.text}>
                        <a className="loacation-map-link" href={item.href}>
                            {item.text}
                        </a>
                    </li>
                )}
            </ul>
        </>
    )
}