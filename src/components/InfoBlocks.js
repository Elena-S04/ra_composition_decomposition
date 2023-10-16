//Информационные блоки различных типов

import WetherForecast from "./WetherForecastBlock";
import Visit from "./VisitBlock";
import LocationMap from "./LocationMapBlock";
import TVprogram from "./TVprogramBlock";
import Broadcast from "./BroadcastBlock";

export default function InfoBloks(props) {
    const {infoBlocks} = props

    return (
        infoBlocks.map(item => {
            return <div className={'info-block ' + item.type} key={item.type}>
                {
                    item.type === 'wether' ? <WetherForecast {...item}/> :
                    item.type === 'visit' ? <Visit {...item}/> :
                    item.type === 'map' ? <LocationMap {...item}/> :
                    item.type === 'TVprogram' ? <TVprogram {...item}/> :
                    item.type === 'broadcast' ? <Broadcast {...item}/> :
                    null
                }
            </div>
        })
    )
}