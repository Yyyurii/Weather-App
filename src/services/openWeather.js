import { useHttp } from '../hooks/http.hook';

const key = '2ea2797359ca534b4658b2e87c5b8647';
// const key = '747bee413190d4f515e09d896d391710';

const useOpenWeather = () => {

  const { loading, request, error, clearError } = useHttp();

  const getCurrentData = async (city) => {
    const res = await request(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
    return res;
  }

  const getWeatherForDays = async (city) => {
    const res = await request(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=32&appid=${key}`);
    // console.log('getWeatherForDays');
    return res.list.map(_transformWeatherData);
  }

  const _transformWeatherData = (data) => {
    const weekDayArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sut"];
    const monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return {
      day: weekDayArr[new Date(data.dt_txt).getDay()],
      date: new Date(data.dt_txt).getDate(),
      month: monthArr[new Date(data.dt_txt).getMonth()],
      hours: new Date(data.dt_txt).getHours(),
      describe: data.weather[0].main,
      temp: Math.round(data.main.temp - 273, 15),
      humidity: data.main.humidity,
      wind: Math.round(data.wind.speed)
    }
  }

  return { loading, request, error, clearError, getCurrentData, getWeatherForDays }

}

export default useOpenWeather;