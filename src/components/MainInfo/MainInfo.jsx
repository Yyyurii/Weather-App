import './mainInfo.scss';

function MainInfo() {
  return (
    <main className="main">

      <div className="data">
        Mon, April 20
      </div>

      <div className="main__info">
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
      </div>

    </main>
  )
}

export default MainInfo;