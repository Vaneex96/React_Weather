import { useState, useEffect } from "react";
import useWeatherServices from "../../services/WeatherServices";

import "./WeekWeather.scss";

const WeekWeather = (props) => {
  const { getWeekWeather, weekLoaded, weekData } = useWeatherServices();

  useEffect(() => {
    if (props.input) {
      getWeekWeather(props.input);
    }
  }, [props.input]);

  function getWeekDay(year, month, day) {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const dates = new Date(year, month - 1, day);

    console.log(dates);

    return days[dates.getDay()];
  }

  const renderWeekWeather = (data) => {
    const weekWeather = data.map((item, i) => {
      console.log(item.maxTemp);
      return (
        <div className="extended__forecast-day" key={i}>
          <h4>{getWeekDay(item.year, item.month, item.day)}</h4>
          <img src={item.icons} alt="cloud" />
          <h4>{item.main}</h4>
          <h6>{item.maxTemp}°</h6>
        </div>
      );
    });

    return (
      <div className="extended__forecast">
        <h2>Extended Forecast</h2>
        {weekWeather}
      </div>
    );
  };

  const weekWeather =
    props.input && weekLoaded ? renderWeekWeather(weekData) : null;

  return <>{weekWeather}</>;
};

export default WeekWeather;
