import './mainInfo.scss';

import humidity from '../../assets/img/weatherIcon/humidity.svg';
import wind from '../../assets/img/weatherIcon/wind.svg';
import description from '../../assets/img/icon/description.svg';

function MainInfo() {
  return (
    <main className="main">

      <div className="data">
        Mon, April 20
      </div>

      <div className="weather-info">
        <ul className="weather-info__container">
          <li className="weather-info__item"><img src={humidity} alt="humidity"/><span> Humidity</span></li>
          <li className="weather-info__item-value">40 %</li>
          <li className="weather-info__item"><img src={wind} alt="wind"/><span> Wind</span></li>
          <li className="weather-info__item-value">4 m/s</li>
          <li className="weather-info__item"><img src={description} alt="description"/><span> Description</span></li>
          <li className="weather-info__item-value">Sunny</li>
        </ul>
      </div>

      <div className="temperature">
        <span className="temperature__current">22&#176;</span>
        {/* <div className="temperature__maxMinBox">
            <span className="temperature__max">max 19*</span>
            <span className="temperature__min">min 25*</span>
          </div> */}
      </div>

      <div className="weather-icon">
        <div className="icon sunny">
          <div className="sun">
            <div className="rays"></div>
          </div>
        </div>
      </div>

    </main>
  )
}

export default MainInfo;