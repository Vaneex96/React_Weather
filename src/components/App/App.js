import AppHeader from "../appHeader/AppHeader";
import SearchPanel from "../searchPanel/SearchPanel";
import CurrentWeather from "../currentWeather/CurrentWeather";
import WeekWeather from "../weekWeather/WeekWeather";
import AppFooter from "../appFooter/AppFooter";

import useWeatherServices from "../../services/WeatherServices";

import { useState } from "react";

import "./App.scss";

function App() {
  const [input, setInput] = useState("");
  const [imperial, setImperial] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [geolocation, setGeolocation] = useState(null);

  const onGetCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setGeolocation({ latitude, longitude });
    });
  };

  return (
    <div className="App">
      <AppHeader toggle={toggle} setToggle={setToggle} />
      <SearchPanel
        setInput={setInput}
        toggle={toggle}
        onGetCurrentLocation={onGetCurrentLocation}
      />
      <CurrentWeather
        input={input}
        imperial={imperial}
        setImperial={setImperial}
        toggle={toggle}
        geolocation={geolocation}
        setGeolocation={setGeolocation}
        setInput={setInput}
      />
      <WeekWeather
        input={input}
        imperial={imperial}
        setImperial={setImperial}
        toggle={toggle}
        geolocation={geolocation}
        setGeolocation={setGeolocation}
        setInput={setInput}
      />
      <AppFooter />
    </div>
  );
}

export default App;
