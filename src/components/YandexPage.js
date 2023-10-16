//Главная страница поиска

import BanerMarketing from "./BanerMarketingBlock";
import NewsBlocks from "./NewsBlocks";
import Search from "./SearchBlock";
import YandexAdvertising from "./YandexAdvertisingBlock";
import InfoBlocks from "./InfoBlocks";

export default function YandexPage() {

    const data = {
        news: [
            {
                favicon: {
                    src: '',
                    alt: '',
                },
                title: '',
            }
        ],
        assets: [{
            name: '',
            cost: '',
            difference: '',
        }],
        advertising: {
            text: '', 
            src: '', 
            title: '',
        },
        baner: {
            href: 'https://#0/', 
            src: '', 
            alt: '',
        },
        infoBlocks: [
            {
                type: 'wether',
                title: 'Погода',
                href: 'https://#0/', 
                url: '', 
                temp: '', 
                text: '',
            },
            {
                type: 'visit',
                title: 'Посещаемое',
                listLink: [
                    {
                        href: 'https://#0/',
                        bold: '',
                        text: 'Недвижжимость - о сталинках',
                    },
                    {
                        href: 'https://#0/',
                        bold: '',
                        text: 'Маркет - люстры и светильники',
                    },
                    {
                        href: 'https://#0/',
                        bold: '',
                        text: 'Авто.ру - привод 4Х4 до 500 000',
                    },
                ], 
            },
            {
                type: 'map',
                title: 'Карта Германии',
                listLink: [
                    {
                        href: 'https://#0/',
                        text: '',
                    },
                ], 
            },
            {
                type: 'TVprogram',
                title: 'Телепрограмма',
                listLink: [
                    {
                        href: 'https://#0/',
                        time: '',
                        program: 'ТНТ.Best',
                        chanel: '',
                    },
                    {
                        href: 'https://#0/',
                        time: '',
                        program: 'Джинглики',
                        chanel: '',
                    },
                    {
                        href: 'https://#0/',
                        time: '',
                        program: 'Наедине со всеми',
                        chanel: '',
                    },
                ], 
            },
            {
                type: 'broadcast',
                title: 'Эфир',
                listLink: [
                    {
                        href: 'https://#0/',
                        icon: '',
                        name: 'Управление как искусство',
                        category: '',
                    },
                    {
                        href: 'https://#0/',
                        icon: '',
                        name: 'Ночь. Мир в это время',
                        category: '',
                    },
                    {
                        href: 'https://#0/',
                        icon: '',
                        name: 'Андрей Возн...',
                        category: '',
                    },
                ], 
            },
        ]
    }

    return (
        <>
            <div className="page-top">
                <NewsBlocks {...data}>
                    {data.news.map(item => <li key={item.title}><img src={item.favicon.src} alt={item.favicon.alt}/><a href="https://#0/">{item.title}</a></li>)}
                </NewsBlocks>
                <YandexAdvertising advertising={data.advertising}/>
            </div>
            <Search>

            </Search>
            <div className="page-bottom">
                <BanerMarketing baner={data.baner}/>
                <InfoBlocks {...data}>

                </InfoBlocks>
            </div>
            
        </>
    )
}