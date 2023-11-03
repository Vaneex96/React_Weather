import { useState, useEffect } from "react";
import useWeatherServices from "../../services/WeatherServices";

import "./WeekWeather.scss";
import Spinner from "../Spinner/Spinner";

const WeekWeather = (props) => {
  const {
    getWeekWeather,
    getWeekWeatherByGeolocation,
    weekData,
    weekWeatherStatus,
    currentWeatherStatus,
  } = useWeatherServices();

  useEffect(() => {
    if (props.input) {
      getWeekWeather(props.input);
      props.setInput("");
    }

    if (props.geolocation) {
      getWeekWeatherByGeolocation(props.geolocation);
      props.setGeolocation(null);
    }
  }, [props.input, props.geolocation]);

  function getWeekDay(year, month, day) {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const dates = new Date(year, month - 1, day);

    return days[dates.getDay()];
  }

  const renderWeekWeather = (data) => {
    const weekWeather = data.map((item, i) => {
      return (
        <div className="extended__forecast-day" key={i}>
          <h4>{getWeekDay(item.year, item.month, item.day)}</h4>
          <img src={item.icons} alt="weather_icon" />
          <h4>{item.main}</h4>
          <h6>
            {props.imperial
              ? Math.round((item.maxTemp * 9) / 5 + 32)
              : item.maxTemp}
            °
          </h6>
        </div>
      );
    });

    return (
      <div
        className="extended__forecast"
        style={{ backgroundColor: props.toggle ? "rgb(5, 26, 51)" : "#fff" }}
      >
        <h2>Extended Forecast</h2>
        {weekWeather}
      </div>
    );
  };

  const weekWeather =
    weekWeatherStatus === "loaded" ? renderWeekWeather(weekData) : null;

  return <>{weekWeather}</>;
};

export default WeekWeather;
