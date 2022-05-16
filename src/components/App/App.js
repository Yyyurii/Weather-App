import { useState } from 'react';

import './App.scss';

import Header from '../Header';
import MainInfo from '../MainInfo';
import WeatherTabs from '../WeatherTabs';
import OpenWeather from '../../services/openWeather';



function App() {

  const [city, setCity] = useState('');
  const [temp, setTemp] = useState('');
  const [humidity, setHumidity] = useState('');
  const [wind, setWind] = useState('');
  const [describe, setDiscribe] = useState('');

  const openWeather = new OpenWeather();

  openWeather.getCurrentData().then(res => {
    console.log(res);
    setCity(res.name)
    setTemp(Math.round(res.main.temp - 273, 15));
    setHumidity(res.main.humidity);
    setWind(Math.round(res.wind.speed));
    setDiscribe(res.weather[0].main)
  });

  return (
    <div className="App">
      <div className="wrap">

        <Header
          city = {city} />
        <MainInfo
          temp = {temp}
          humidity = {humidity}
          wind = {wind}
          describe = {describe} />
        <WeatherTabs />

      </div>
    </div>
  );
}

export default App;
