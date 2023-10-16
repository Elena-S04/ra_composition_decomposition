//Поисковый блок

export default function Search() {
    return(
        <div className="search-block">
            <div className="logo">
                <a className="logo-link" href='https://#0/'>
                    <img className="logo-image" src='...' alt='...'></img>
                </a>
            </div>
            <form className="search-form">
                <ul className="search-category-list">
                    <li className="search-category-item">
                        <a className="search-category-link" href='https://#0/'>Видео</a>
                    </li>
                    <li className="search-category-item">
                        <a className="search-category-link" href='https://#0/'>Картинки</a>
                    </li>
                    <li className="search-category-item">
                        <a className="search-category-link" href='https://#0/'>Новости</a>
                    </li>
                    <li className="search-category-item">
                        <a className="search-category-link" href='https://#0/'>Карты</a>
                    </li>
                    <li className="search-category-item">
                        <a className="search-category-link" href='https://#0/'>Маркет</a>
                    </li>
                    <li className="search-category-item">
                        <a className="search-category-link" href='https://#0/'>Переводчик</a>
                    </li>
                    <li className="search-category-item">
                        <a className="search-category-link" href='https://#0/'>Эфир</a>
                    </li>
                    <span className="search-still">ещё</span>
                </ul>
                <input className="search-input"></input>
                <button className="btn-search">Найти</button>
            </form>
            <span className="search-postscript">Найдется все. Например, <a className="search-postscript-link" href='https://#0/'>фаза луны, сегодня</a></span>
        </div>
        
        
    )
}