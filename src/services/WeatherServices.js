import { useState } from "react";

// import cloud from "../resources/icons/icons8-clouds-80.png";
// import sun from "../resources/icons/icons8-sun-80.png";
// import partlyCloudy from "../resources/icons/icons8-partly-cloudy-day-80.png";
// import rain from "../resources/icons/icons8-rain-80.png";

import * as Icons from "../resources/Icons";

const useWeatherServices = () => {
  const _apiKey = "4de1ba0debbbc6e5eb1d87dd254780fb";
  const _apiBase = "https://api.openweathermap.org/data/2.5/";
  const _defaultCity = "Olawa";
  const _metricUnits = "metric";
  const _imperialUnits = "imperial";

  const [currentLoaded, setCurrentLoaded] = useState(false);
  const [weekLoaded, setWeekLoaded] = useState(false);
  const [weekData, setWeekData] = useState([]);
  const [currentData, setCurrentData] = useState({});

  const getWeekWeather = async (
    city = _defaultCity,
    units = _metricUnits,
    method = "GET",
    body = null,
    headers = { "Content-Type": "application/json" }
  ) => {
    const result = await fetch(
      `${_apiBase}forecast?q=${city}&APPID=${_apiKey}&units=${units}`,

      { method: "GET", body: null, "Content-Type": "application/json" }
    );

    const data = await result
      .json()
      .then((res) => {
        setWeekData(
          res.list
            .filter((item) => item.dt_txt.slice(11, 20) === "15:00:00")
            .map((item) => _transformData(item))
        );
        setWeekLoaded(true);
      })
      .catch((error) => console.log(error));

    return data;
  };

  const getCurrentWeather = async (
    city = _defaultCity,
    units = _metricUnits
  ) => {
    const result = await fetch(
      `${_apiBase}weather?q=${city}&APPID=${_apiKey}&units=${units}`
    );

    const data = await result
      .json()
      .then((res) => {
        setCurrentData(_transformData(res));
        setCurrentLoaded(true);
      })
      .catch((error) => console.log(error));

    return data;
  };

  const _transformData = (data) => {
    return {
      main: data.weather[0].main,
      descr: data.weather[0].description,
      icons: _transformIcon(data.weather[0].icon.slice(0, 2)),
      temp: Math.round(data.main.temp),
      feels: Math.round(data.main.feels_like),
      minTemp: Math.round(data.main.temp_min),
      maxTemp: Math.round(data.main.temp_max),
      pressure: Math.round(data.main.pressure),
      humidity: Math.round(data.main.humidity),
      windSpeed: Math.round(data.wind.speed),
      day: data.dt_txt ? data.dt_txt.slice(8, 11) : null,
      month: data.dt_txt ? data.dt_txt.slice(5, 7) : null,
      year: data.dt_txt ? data.dt_txt.slice(0, 4) : null,
      time: data.dt_txt ? data.dt_txt.slice(11, 20) : null,
    };
  };

  // const _transformIcon = (icon) => {
  //   let image = null;
  //   switch (icon) {
  //     case "01":
  //       image = sun;
  //       break;
  //     case "02":
  //       image = partlyCloudy;
  //       break;
  //     case "04":
  //       image = cloud;
  //       break;
  //     case "10":
  //       image = rain;
  //       break;
  //     default:
  //       image = cloud;
  //   }

  //   return image;
  // };

  const iconsMatch = {
    "01": "fsdfsd",
  };

  const _transformIcon = (icon) => {
    let image = null;
    switch (icon) {
      case "01":
        image = Icons.cloud;
        break;
      case "02":
        image = Icons.cloud;
        break;
      case "04":
        image = Icons.cloud;
        break;
      case "10":
        image = Icons.cloud;
        break;
      default:
        image = Icons.cloud;
    }

    return image;
  };

  return {
    getWeekWeather,
    weekData,
    weekLoaded,
    getCurrentWeather,
    currentData,
    currentLoaded,
  };
};

export default useWeatherServices;
