import './weatherTabs.scss';

import cloudy from '../../assets/img/weatherIcon/cloudy.svg';

function WeatherTabs() {
  return (
    <div className="weather-tabs">

      <div className="weather-tab active">
        <div className="weather-tab__day">
          Tue
        </div>
        <div className="weather-tab__icon">
          <img src={cloudy} />
        </div>
        <div className="weather-tab__temperature">
          20*
        </div>
      </div>
      <div className="weather-tab">
        <div className="weather-tab__day">
          Tue
        </div>
        <div className="weather-tab__icon">
          <img src={cloudy} />
        </div>
        <div className="weather-tab__temperature">
          20*
        </div>
      </div>
      <div className="weather-tab">
        <div className="weather-tab__day">
          Tue
        </div>
        <div className="weather-tab__icon">
          <img src={cloudy} />
        </div>
        <div className="weather-tab__temperature">
          20*
        </div>
      </div>

    </div>
  )
}

export default WeatherTabs;