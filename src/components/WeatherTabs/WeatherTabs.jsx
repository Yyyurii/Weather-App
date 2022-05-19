import { useState, useEffect } from 'react';

import './weatherTabs.scss';

import sunny from '../../assets/img/weatherIcon/sunny.svg';
import cloudy from '../../assets/img/weatherIcon/cloudy.svg';
import rainy from '../../assets/img/weatherIcon/rainy.svg';
import sunShower from '../../assets/img/weatherIcon/sunShower.svg';
import flurries from '../../assets/img/weatherIcon/flurries.svg';
import thunderstorm from '../../assets/img/weatherIcon/thunderstorm.svg';

import OpenWeather from '../../services/openWeather';

function WeatherTabs({ city, temp, describe, onClickWeatherTab }) {

  const [weatherList, setWeatherList] = useState([]);
  const [activeDay, setActiveDay] = useState('');

  useEffect(() => {
    const openWeather = new OpenWeather();

    const getWeatherList = () => {
      openWeather
        .getWeatherForDays(city)
        .then(res => {
          console.log(res, 'getWeather res');
          console.log(city, 'getWeather city');
          return res.filter(item => item.hours === 15);
        })
        .then(newWeatherList => setWeatherList(newWeatherList));
    }

    getWeatherList();
    console.log('useEffect Weather Tabs')
  }, [city]);

  const icon = (describe) => {
    switch (describe) {
      case 'Clouds':
        return cloudy;
      case 'Drizzle':
        return rainy;
      case 'Clear':
        return sunny;
      case 'Rain':
        return sunShower;
      case 'Snow':
        return flurries;
      case 'Thunderstorm':
        return thunderstorm;
    }
  }

  return (
    <div className="weather-tabs">
      {/* <div
        className="weather-tab "
        onClick={onClickWeatherTab} >
        <div className="weather-tab__day">
          Tue
        </div>
        <div className="weather-tab__icon">
          <img src={icon(describe)} />
        </div>
        <div className="weather-tab__temperature">
          {temp}&#176;
        </div>
      </div> */}


      {
        weatherList.map(item => {
          return (
            <div
              className={item.day === activeDay ? "weather-tab active" : "weather-tab"}
              key={item.day}
              onClick={() => {
                setActiveDay(item.day);
                onClickWeatherTab(item);
                }} >
              <div className="weather-tab__day">
                {item.day}
              </div>
              <div className="weather-tab__icon">
                <img src={icon(item.describe)} />
              </div>
              <div className="weather-tab__temperature">
                {item.temp}&#176;
              </div>
            </div>
          )
        })
      }

    </div>
  )
}

export default WeatherTabs;