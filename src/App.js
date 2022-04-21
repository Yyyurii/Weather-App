import './App.scss';

import search from './assets/img/icon/search.svg';
import cloudy from './assets/img/weatherIcon/cloudy.svg';

function App() {
  return (
    <div className="App">
      <div className="wrap">

        <header className="header">
          <div className="cityName">Kyiv</div>
          <div className="search-bar">
            <img className="search-bar__img" src={search} />
            <input id="cityName" className="search-bar__input" placeholder="Write the city" />
          </div>
        </header>

        <div className="data">
          Mon, April 20
        </div>

        <main>

          <div className="temperature">
            <span className="temperature__current">22*</span>
            <div className="temperature__maxMinBox">
              <span className="temperature__max">max 19*</span>
              <span className="temperature__min">min 25*</span>
            </div>
          </div>

          <div className="weather-info">
            <ul>
              <li>asddfsd   213</li>
              <li>asddfsd   213</li>
              <li>asddfsd   213</li>
              <li>asddfsd   213</li>
            </ul>
          </div>

          <div className="weather-icon">
            <div className="icon sunny">
              <div className="sun">
                <div className="rays"></div>
              </div>
            </div>
            <div className="weather-icon__description">It`s hot</div>
          </div>

        </main>

        <hr />

        <div className="weather-tabs">

          <div className="weather-tab">
            <div className="weather-tab__day">
              Tue
            </div>
            <div className="weather-tab__icon">
              <img src={cloudy}/>
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
              <img src={cloudy}/>
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
              <img src={cloudy}/>
            </div>
            <div className="weather-tab__temperature">
              20*
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
