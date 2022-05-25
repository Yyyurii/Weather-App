import './mainInfo.scss';

import humidityImg from '../../assets/img/weatherIcon/humidity.svg';
import windImg from '../../assets/img/weatherIcon/wind.svg';
import descriptionImg from '../../assets/img/icon/description.svg';

import { Sunny, Cloudy, Flurries, Rainy, ThunderStorm, Moon, DefaulCase } from '../AnimateWeatherIcon/AnimateWeatherIcon';

function MainInfo({ currentWeather, weatherTab, dateObj }) {

  let { temp, humidity, wind, describe } = currentWeather;
  const { weekDay, month, dateNum, night } = dateObj;

  const isNight = night ? describe = "Night" : describe;

  const icon = (describe) => {
    switch (describe) {
      case 'Clouds':
        return <Cloudy />;
      case 'Drizzle':
        return <Rainy />;
      case 'Clear':
        return <Sunny />;
      case 'Rain':
        return <Rainy />;
      case 'Snow':
        return <Flurries />;
      case 'Thunderstorm':
        return <ThunderStorm />;
      case 'Night':
        return <Moon />;
      default:
        return <DefaulCase />;
    }
  }

  return (
    <main className="main">

      <div className="data">
        {weatherTab.day ? weatherTab.day : weekDay}, {weatherTab.month ? weatherTab.month : month} {weatherTab.date ? weatherTab.date : dateNum}
      </div>

      <div className="weather-info">
        <ul className="weather-info__container">
          <li className="weather-info__item"><img src={humidityImg} alt="humidity" /><span> Humidity</span></li>
          <li className="weather-info__item-value">{weatherTab.humidity ? weatherTab.humidity : humidity} %</li>
          <li className="weather-info__item"><img src={windImg} alt="wind" /><span> Wind</span></li>
          <li className="weather-info__item-value">{weatherTab.wind ? weatherTab.wind : wind} m/s</li>
          <li className="weather-info__item"><img src={descriptionImg} alt="description" /><span> Description</span></li>
          <li className="weather-info__item-value">{weatherTab.describe ? weatherTab.describe : describe}</li>
        </ul>
      </div>

      <div className="temperature">
        <span className="temperature__current">{weatherTab.temp ? weatherTab.temp : temp}&#176;</span>
      </div>

      <div className="weather-icon">
        {icon(weatherTab.describe ? weatherTab.describe : isNight)}
      </div>

    </main>
  )
}

export default MainInfo;