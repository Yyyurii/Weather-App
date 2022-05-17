import { useState, useEffect } from 'react';

import './header.scss';

import search from '../../assets/img/icon/search.svg';
import location from '../../assets/img/icon/location.svg';

function Header({ city, onStateCity, searchRequest }) {

  const [searchInput, setSearchInput] = useState(false);
  const [searchModal, setSearchModal] = useState(false);
  const [lowScreen, setLowScreen] = useState(false);
  const [detectW, setDetectW] = useState(window.innerWidth);


  const onSearchInputToggle = () => {
    setSearchInput(!searchInput);
  }

  const onSearchModalToggle = () => {
    setSearchModal(!searchModal);
  }

  const detectSize = () => {
    setDetectW(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize);

    if(searchRequest = true) {
      setSearchModal(false)
    }

    if (detectW < 767) {
      setLowScreen(true)
    } else {
      setLowScreen(false)
    }

    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [detectW, searchRequest]);

  let inputClasses = searchInput ? 'search-bar__input active' : 'search-bar__input';

  return (
    <header className="header">
      <div className="cityName">
        <img className="cityName__img" src={location} alt="location" />
        <span className="cityName__city">{city}</span>
      </div>
      <div className="search-bar">
        <img
          className="search-bar__img"
          alt="search"
          src={search}
          onClick={lowScreen ? onSearchModalToggle : onSearchInputToggle} />
        <input
          id="cityName"
          className={searchModal ? 'search-bar__input modal' : inputClasses}
          placeholder="Write the city"
          onKeyDownCapture={onStateCity} />
      </div>
      <div className={searchModal ? 'search-modal active' : 'search-modal'}>
        <div
          className="search-modal__close"
          onClick={onSearchModalToggle}>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  )
}

export default Header;