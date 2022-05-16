import './App.scss';

import Header from '../Header';
import MainInfo from '../MainInfo';
import WeatherTabs from '../WeatherTabs';


function App() {

  return (
    <div className="App">
      <div className="wrap">
        
        <Header />
        <MainInfo />
        <WeatherTabs />

      </div>
    </div>
  );
}

export default App;
