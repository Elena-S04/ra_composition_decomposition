//Информационный блок прогноза погоды

export default function WetherForecast(props) {
    const { href, url, temp, text, title} = props
    return(
        <>
            <h5 className='info-title'>{title}</h5>
            <a className="wether-forecast" href={href}>
                <span className="wether-image" style={ {backgroundImage: 'url(' + url + ')'} }></span>
                {temp}
                <p className="wether-text">{text}</p>
            </a>
        </>
    )
}