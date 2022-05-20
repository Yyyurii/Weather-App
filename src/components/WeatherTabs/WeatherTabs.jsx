import { useState, useEffect } from 'react';

import './weatherTabs.scss';

import sunny from '../../assets/img/weatherIcon/sunny.svg';
import cloudy from '../../assets/img/weatherIcon/cloudy.svg';
import rainy from '../../assets/img/weatherIcon/rainy.svg';
import sunShower from '../../assets/img/weatherIcon/sunShower.svg';
import flurries from '../../assets/img/weatherIcon/flurries.svg';
import thunderstorm from '../../assets/img/weatherIcon/thunderstorm.svg';

import OpenWeather from '../../services/openWeather';

import Loader from '../Loader/Loader';

function WeatherTabs({ city, temp, describe, onClickWeatherTab }) {

  const date = new Date();
  const weekDayArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sut"];
  const weekDay = weekDayArr[date.getDay()];

  const [weatherList, setWeatherList] = useState(null);
  const [activeDay, setActiveDay] = useState(weekDay);

  useEffect(() => {
    const openWeather = new OpenWeather();

    const getWeatherList = () => {
      openWeather
        .getWeatherForDays(city)
        .then(res => res.filter(item => item.hours === 15))
        .then(newWeatherList => setWeatherList(newWeatherList));
    }

    getWeatherList();
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

  function renderWeatherList(weatherArr) {
    const weatherListItems = weatherArr.map(item => {
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
            <img src={icon(item.describe)} alt="weather icon"/>
          </div>
          <div className="weather-tab__temperature">
            {item.temp}&#176;
          </div>
        </div>
      )
    })

    return weatherListItems;
  }

  const content = weatherList ? renderWeatherList(weatherList) : <Loader />;


  return (
    <div className="weather-tabs">

      {content}

    </div>
  )
}

export default WeatherTabs;