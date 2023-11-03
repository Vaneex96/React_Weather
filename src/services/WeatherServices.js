import { useState } from "react";

import Icons from "../resources/Icons";

const useWeatherServices = () => {
  const _apiKey = "4de1ba0debbbc6e5eb1d87dd254780fb";
  const _apiBase = "https://api.openweathermap.org/data/2.5/";
  const _defaultCity = "Olawa";
  const _metricUnits = "metric";

  const [currentData, setCurrentData] = useState({});
  const [weekData, setWeekData] = useState([]);

  const [weekWeatherStatus, setWeekWeatherStatus] = useState("idle");
  const [currentWeatherStatus, setCurrentWeatherStatus] = useState("idle");

  const getWeekWeather = async (city = _defaultCity, units = _metricUnits) => {
    setWeekWeatherStatus("loading");

    const result = await fetch(
      `${_apiBase}forecast?q=${city}&APPID=${_apiKey}&units=${units}`,

      { method: "GET", body: null, "Content-Type": "application/json" }
    );

    const data = await result
      .json()
      .then((res) => {
        setWeekWeatherStatus("loaded");
        setWeekData(
          res.list
            .filter((item) => item.dt_txt.slice(11, 20) === "15:00:00")
            .map((item) => _transformData(item))
        );
      })
      .catch((error) => {
        console.log(error);
        setWeekWeatherStatus("error");
      });

    return data;
  };
  //////////////////////////////////////
  const getWeekWeatherByGeolocation = async ({ latitude, longitude }) => {
    setWeekWeatherStatus("loading");

    const result = await fetch(
      `${_apiBase}forecast?lat=${latitude}&lon=${longitude}&appid=${_apiKey}&units=${_metricUnits}`,
      { method: "GET", body: null, "Content-Type": "application/json" }
    );

    const data = await result
      .json()
      .then((res) => {
        setWeekWeatherStatus("loaded");
        setWeekData(
          res.list
            .filter((item) => item.dt_txt.slice(11, 20) === "15:00:00")
            .map((item) => _transformData(item))
        );
      })
      .catch((error) => {
        console.log(error);
        setWeekWeatherStatus("error");
      });

    return data;
  };
  //////////////////////////////////
  const getCurrentWeather = async (city, units = _metricUnits) => {
    setCurrentWeatherStatus("loading");

    const result = await fetch(
      `${_apiBase}weather?q=${city}&APPID=${_apiKey}&units=${units}`
    );

    const data = await result
      .json()
      .then((res) => {
        setCurrentWeatherStatus("loaded");
        setCurrentData(_transformData(res));
      })
      .catch((error) => {
        console.log(error);
        setCurrentWeatherStatus("error");
      });

    return data;
  };
  /////////////////////////////////
  const getCurrentWeatherByGeolocation = async ({ latitude, longitude }) => {
    setCurrentWeatherStatus("loading");

    const result = await fetch(
      `${_apiBase}weather?lat=${latitude}&lon=${longitude}&appid=${_apiKey}&units=${_metricUnits}`
    );

    const data = await result
      .json()
      .then((res) => {
        setCurrentWeatherStatus("loaded");
        setCurrentData(_transformData(res));
      })
      .catch((error) => {
        console.log(error);
        setCurrentWeatherStatus("error");
      });

    return data;
  };
  //////////////////////////////////
  const _transformData = (data) => {
    return {
      name: data.name,
      main: data.weather[0].main,
      descr: data.weather[0].description,
      icons: Icons[data.weather[0].icon.slice(0, 2)]
        ? Icons[data.weather[0].icon.slice(0, 2)]
        : Icons["03"],
      temp: Math.round(data.main.temp),
      tempImperial: Math.round((data.main.temp * 9) / 5 + 32),
      feels: Math.round(data.main.feels_like),
      minTemp: Math.round(data.main.temp_min),
      maxTemp: Math.round(data.main.temp_max),
      pressure: Math.round(data.main.pressure),
      humidity: Math.round(data.main.humidity),
      windSpeed: Math.round(data.wind.speed),
      windSpeedImperial: Math.round(data.wind.speed * 3.6),
      day: data.dt_txt ? data.dt_txt.slice(8, 11) : null,
      month: data.dt_txt ? data.dt_txt.slice(5, 7) : null,
      year: data.dt_txt ? data.dt_txt.slice(0, 4) : null,
      time: data.dt_txt ? data.dt_txt.slice(11, 20) : null,
    };
  };

  return {
    getWeekWeather,
    getWeekWeatherByGeolocation,
    weekData,
    getCurrentWeather,
    getCurrentWeatherByGeolocation,
    currentData,
    currentWeatherStatus,
    weekWeatherStatus,
  };
};

export default useWeatherServices;
