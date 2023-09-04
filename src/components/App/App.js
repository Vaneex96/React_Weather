import AppHeader from "../appHeader/AppHeader";
import SearchPanel from "../searchPanel/SearchPanel";
import CurrentWeather from "../currentWeather/CurrentWeather";
import WeekWeather from "../weekWeather/WeekWeather";
import AppFooter from "../appFooter/AppFooter";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <SearchPanel />
      <CurrentWeather />
      <WeekWeather />
      <AppFooter />
    </div>
  );
}

export default App;
