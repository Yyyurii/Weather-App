import { useState, useEffect } from 'react';

import './App.scss';

import Header from '../Header';
import MainInfo from '../MainInfo';
import WeatherTabs from '../WeatherTabs';
import OpenWeather from '../../services/openWeather';



function App() {

  const [city, setCity] = useState('Kyiv');
  const [temp, setTemp] = useState('');
  const [humidity, setHumidity] = useState('');
  const [wind, setWind] = useState('');
  const [describe, setDiscribe] = useState('');
  const [searchRequest, setSearchRequest] = useState(false);
  const [weatherTab, setWeatherTab] = useState({});

  const openWeather = new OpenWeather();

  useEffect(() => {
    setSearchRequest(false);
    getWeatherData();
  }, [city]);

  const getWeatherData = () => {
    openWeather.getCurrentData(city).then(res => {
      setCity(res.name)
      setTemp(Math.round(res.main.temp - 273, 15));
      setHumidity(res.main.humidity);
      setWind(Math.round(res.wind.speed));
      setDiscribe(res.weather[0].main);
    });
  }

  const onChangeCity = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setCity(event.target.value);
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
          city={city}
          onChangeCity={onChangeCity}
          searchRequest={searchRequest} />
        <MainInfo
          temp={temp}
          humidity={humidity}
          wind={wind}
          describe={describe}
          weatherTab={weatherTab} />
        <WeatherTabs
          city={city}
          temp={temp}
          describe={describe}
          onClickWeatherTab={onClickWeatherTab} />

      </div>
    </div>
  );
}

export default App;
