import './header.scss';

import search from '../../assets/img/icon/search.svg';

function Header() {
  return (
    <header className="header">
      <div className="cityName">Kyiv</div>
      <div className="search-bar">
        <img className="search-bar__img" src={search} />
        <input id="cityName" className="search-bar__input" placeholder="Write the city" />
      </div>
    </header>
  )
}

export default Header;