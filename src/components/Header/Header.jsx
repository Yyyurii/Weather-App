import { useState } from 'react';

import './header.scss';

import search from '../../assets/img/icon/search.svg';
import location from '../../assets/img/icon/location.svg';

function Header() {

  const [searchToggle, setSearchToggle] = useState(false);

  const onSearchToggle = () => {
    console.log('click')
    setSearchToggle(!searchToggle);
  }
  return (
    <header className="header">
      <div className="cityName">
        <img className="cityName__img" src={location} />
        <span className="cityName__city">Kyiv</span>
      </div>
      <div className="search-bar">
        <img 
          className="search-bar__img" 
          src={search}
          onClick={onSearchToggle} />
        <input 
          id="cityName" 
          className={searchToggle ? 'search-bar__input active' : 'search-bar__input'} 
          placeholder="Write the city" />
      </div>
    </header>
  )
}

export default Header;