import { useState, useEffect } from 'react';

import './App.scss';

import Header from '../Header';
import MainInfo from '../MainInfo';
import WeatherTabs from '../WeatherTabs';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import useOpenWeather from '../../services/openWeather';


function App() {
  const { loading, error, getCurrentData } = useOpenWeather();

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
  const [isDay, setIsDay] = useState(true);

  useEffect(() => {
    const date = new Date();

    const hours = date.getHours()
    setIsDay(hours > 6 && hours < 21 ? true : false);

    const weekDayArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sut"];
    const monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    setSearchRequest(false);

    setDateObj({
      weekDay: weekDayArr[date.getDay()],
      month: monthArr[date.getMonth()],
      dateNum: date.getDate(),
      night: !isDay
    });

    const getWeatherData = () => {
      getCurrentData(currentWeather.city)
        .then(onWeatherListLoaded)
    }

    getWeatherData();
  }, [currentWeather.city, isDay]);

  const onWeatherListLoaded = (weather) => {
    setWeatherTab({});

    setCurrentWeather({
      city: weather.name,
      temp: Math.round(weather.main.temp - 273, 15),
      humidity: weather.main.humidity,
      wind: Math.round(weather.wind.speed),
      describe: weather.weather[0].main
    });
  }

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

  const spinner = loading ? <Loader /> : null;
  const errorMessage = error ? <ErrorMessage /> : null;
  const view = <Veiw dateObj={dateObj} currentWeather={currentWeather} weatherTab={weatherTab} onClickWeatherTab={onClickWeatherTab} />
  const content = !(loading || error) ? view : null;

  const bg = weatherTab.describe ? weatherTab.describe : currentWeather.describe;
  const appClasses = !isDay && !weatherTab.describe ? 'Night' : bg;

  return (
    <div className={"App " + appClasses}>
      <div className="wrap">

        <Header
          currentWeather={currentWeather}
          onChangeCity={onChangeCity}
          searchRequest={searchRequest} />

        {spinner}
        {errorMessage}
        {content}
      </div>
    </div>
  );
}

export default App;

const Veiw = ({ dateObj, currentWeather, weatherTab, onClickWeatherTab }) => {
  return (
    <>
      <MainInfo
        dateObj={dateObj}
        currentWeather={currentWeather}
        weatherTab={weatherTab} />
      <WeatherTabs
        dateObj={dateObj}
        currentWeather={currentWeather}
        onClickWeatherTab={onClickWeatherTab} />
    </>
  )
}