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

  const onStateCity = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setCity(event.target.value);
      setSearchRequest(true);
      event.target.value = '';
    }
  }

  return (
    <div className="App">
      <div className="wrap">

        <Header
          city={city}
          onStateCity={onStateCity}
          searchRequest={searchRequest} />
        <MainInfo
          temp={temp}
          humidity={humidity}
          wind={wind}
          describe={describe} />
        <WeatherTabs
          city={city}
          temp={temp}
          describe={describe} />

      </div>
    </div>
  );
}

export default App;
