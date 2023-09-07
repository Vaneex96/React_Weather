import AppHeader from "../appHeader/AppHeader";
import SearchPanel from "../searchPanel/SearchPanel";
import CurrentWeather from "../currentWeather/CurrentWeather";
import WeekWeather from "../weekWeather/WeekWeather";
import AppFooter from "../appFooter/AppFooter";

import { useState, useEffect } from "react";

import "./App.scss";

function App() {
  const [input, setInput] = useState("");

  const onChangeValue = (e) => {
    if (e.keyCode === 13) {
      setInput(e.target.value);
      console.log(e.target.value);
      e.target.value = "";
    }
  };

  return (
    <div className="App">
      <AppHeader />
      <SearchPanel onChangeValue={onChangeValue} />
      <CurrentWeather input={input} />
      <WeekWeather input={input} />
      <AppFooter />
    </div>
  );
}

export default App;
