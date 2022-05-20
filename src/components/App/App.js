import { useState, useEffect } from 'react';

import './App.scss';

import Header from '../Header';
import MainInfo from '../MainInfo';
import WeatherTabs from '../WeatherTabs';
import OpenWeather from '../../services/openWeather';

function App() {

  const [currentWeather, setCurrentWeather] = useState({
    city: 'Kyiv',
    temp: '',
    humidity: '',
    wind: '',
    describe: ''
  });
  const [searchRequest, setSearchRequest] = useState(false);
  const [weatherTab, setWeatherTab] = useState({});
  const [dateObj, setDateObj] = useState({});

  useEffect(() => {
    const date = new Date();

    const weekDayArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sut"];
    const monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    setSearchRequest(false);

    setDateObj({
      weekDay: weekDayArr[date.getDay()],
      month: monthArr[date.getMonth()],
      dateNum: date.getDate()
    });

    const openWeather = new OpenWeather();

    const getWeatherData = () => {
      openWeather.getCurrentData(currentWeather.city).then(res => {
        setCurrentWeather({
          city: res.name,
          temp: Math.round(res.main.temp - 273, 15),
          humidity: res.main.humidity,
          wind: Math.round(res.wind.speed),
          describe: res.weather[0].main
        });
      });
    }

    getWeatherData();
  }, [currentWeather.city]);

  const onChangeCity = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setCurrentWeather({ city: event.target.value });
      setSearchRequest(true);
      event.target.value = '';
    }
  }

  const onClickWeatherTab = (weatherObj) => {
    setWeatherTab(weatherObj);
  }

  return (
    <div className="App">
      <div className="wrap">

        <Header
          currentWeather={currentWeather}
          onChangeCity={onChangeCity}
          searchRequest={searchRequest} />
        <MainInfo
          dateObj={dateObj}
          currentWeather={currentWeather}
          weatherTab={weatherTab} />
        <WeatherTabs
          dateObj={dateObj}
          currentWeather={currentWeather}
          onClickWeatherTab={onClickWeatherTab} />

      </div>
    </div>
  );
}

export default App;
