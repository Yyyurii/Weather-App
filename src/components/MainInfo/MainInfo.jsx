import './mainInfo.scss';

import humidityImg from '../../assets/img/weatherIcon/humidity.svg';
import windImg from '../../assets/img/weatherIcon/wind.svg';
import descriptionImg from '../../assets/img/icon/description.svg';

function MainInfo({ temp, humidity, wind, describe }) {

  const date = new Date();

  const weekDayArr = new Array(7);
  weekDayArr[0] = "Sun";
  weekDayArr[1] = "Mon";
  weekDayArr[2] = "Tue";
  weekDayArr[3] = "Wed";
  weekDayArr[4] = "Thu";
  weekDayArr[5] = "Fri";
  weekDayArr[6] = "Sut";

  const monthArr = new Array();
  monthArr[0] = "January";
  monthArr[1] = "February";
  monthArr[2] = "March";
  monthArr[3] = "April";
  monthArr[4] = "May";
  monthArr[5] = "June";
  monthArr[6] = "July";
  monthArr[7] = "August";
  monthArr[8] = "September";
  monthArr[9] = "October";
  monthArr[10] = "November";
  monthArr[11] = "December";

  const weekDay = weekDayArr[date.getDay()];
  const month = monthArr[date.getMonth()];
  const dateNum = date.getDate();

  return (
    <main className="main">

      <div className="data">
        {weekDay}, {month} {dateNum}
      </div>

      <div className="weather-info">
        <ul className="weather-info__container">
          <li className="weather-info__item"><img src={humidityImg} alt="humidity" /><span> Humidity</span></li>
          <li className="weather-info__item-value">{humidity} %</li>
          <li className="weather-info__item"><img src={windImg} alt="wind" /><span> Wind</span></li>
          <li className="weather-info__item-value">{wind} m/s</li>
          <li className="weather-info__item"><img src={descriptionImg} alt="description" /><span> Description</span></li>
          <li className="weather-info__item-value">{describe}</li>
        </ul>
      </div>

      <div className="temperature">
        <span className="temperature__current">{temp}&#176;</span>
      </div>

      <div className="weather-icon">
        <div className="icon sunny">
          <div className="sun">
            <div className="rays"></div>
          </div>
        </div>
      </div>

    </main>
  )
}

export default MainInfo;