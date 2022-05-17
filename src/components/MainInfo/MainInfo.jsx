import './mainInfo.scss';

import humidityImg from '../../assets/img/weatherIcon/humidity.svg';
import windImg from '../../assets/img/weatherIcon/wind.svg';
import descriptionImg from '../../assets/img/icon/description.svg';

import { Sunny, Cloudy, Flurries, Rainy, SunShower, ThunderStorm } from '../AnimateWeatherIcon/AnimateWeatherIcon';

function MainInfo({ temp, humidity, wind, describe }) {

  const date = new Date();

  const weekDayArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sut"];
  const monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const weekDay = weekDayArr[date.getDay()];
  const month = monthArr[date.getMonth()];
  const dateNum = date.getDate();

  const icon = (describe) => {
    switch (describe) {
      case 'Clouds':
        return <Cloudy />;
      case 'Drizzle': 
        return <Rainy />;
      case 'Clear': 
        return <Sunny />;
      case 'Rain': 
        return <SunShower />;
      case 'Snow': 
        return <Flurries />;
      case 'Thunderstorm': 
        return <ThunderStorm />;
    }
  }

  return (
    <main className="main">

      <div className="data">
        {weekDay}, {month} {dateNum}
      </div>

      <div className="weather-info">
        <ul className="weather-info__container">
          <li className="weather-info__item"><img src={humidityImg} alt="humidity" /><span> Humidity</span></li>
          <li className="weather-info__item-value">{humidity} %</li>
          <li className="weather-info__item"><img src={windImg} alt="wind" /><span> Wind</span></li>
          <li className="weather-info__item-value">{wind} m/s</li>
          <li className="weather-info__item"><img src={descriptionImg} alt="description" /><span> Description</span></li>
          <li className="weather-info__item-value">{describe}</li>
        </ul>
      </div>

      <div className="temperature">
        <span className="temperature__current">{temp}&#176;</span>
      </div>

      <div className="weather-icon">
        {icon(describe)}
      </div>


    </main>
  )
}

export default MainInfo;