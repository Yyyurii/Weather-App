import './mainInfo.scss';

import humidityImg from '../../assets/img/weatherIcon/humidity.svg';
import windImg from '../../assets/img/weatherIcon/wind.svg';
import descriptionImg from '../../assets/img/icon/description.svg';

function MainInfo({temp, humidity, wind, describe}) {
  return (
    <main className="main">

      <div className="data">
        Mon, April 20
      </div>

      <div className="weather-info">
        <ul className="weather-info__container">
          <li className="weather-info__item"><img src={humidityImg} alt="humidity"/><span> Humidity</span></li>
          <li className="weather-info__item-value">{humidity} %</li>
          <li className="weather-info__item"><img src={windImg} alt="wind"/><span> Wind</span></li>
          <li className="weather-info__item-value">{wind} m/s</li>
          <li className="weather-info__item"><img src={descriptionImg} alt="description"/><span> Description</span></li>
          <li className="weather-info__item-value">{describe}</li>
        </ul>
      </div>

      <div className="temperature">
        <span className="temperature__current">{temp}&#176;</span>
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