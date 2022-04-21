import './App.scss';

import Header from './components/Header';
import MainInfo from './components/MainInfo';
import WeatherTabs from './components/WeatherTabs';


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
