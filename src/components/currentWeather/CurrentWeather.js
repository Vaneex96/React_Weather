import ToggleButton from "../button/toggleButton";
import useWeatherServices from "../../services/WeatherServices";

import "./CurrentWeather.scss";

import cloud from "../../resources/icons/./icons8-clouds-80.png";
import sun from "../../resources/icons/icons8-sun-80.png";
import partlyCloudy from "../../resources/icons/icons8-partly-cloudy-day-80.png";
import rain from "../../resources/icons/icons8-rain-80.png";

import wind from "../../resources/static icons/icons8-wind-40.png";
import pressure from "../../resources/static icons/icons8-pressure-gauge-40.png";
import humidity from "../../resources/static icons/icons8-wet-40.png";
import high from "../../resources/static icons/high-icon.svg";
import low from "../../resources/static icons/low-icon.svg";
import { useState, useEffect } from "react";

const CurrentWeather = (props) => {
  const { getCurrentWeather, loaded, data } = useWeatherServices();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (props.input) {
      getCurrentWeather(props.input);
    }
  }, [props.input]);

  const thisCurrentWeather = (data) => {
    let icon = null;
    switch (data.icon) {
      case "01":
        icon = sun;
        break;
      case "02":
        icon = partlyCloudy;
        break;
      case "04":
        icon = cloud;
        break;
      default:
        icon = cloud;
    }
    console.log(data.icon);

    return (
      <div className="current__weather">
        <div className="current__weather-main_info">
          <h2>Current Weather</h2>
          <div className="current__weather-main_info-name_city">
            {props.input.toUpperCase()}
          </div>
          <div className="current__weather-main_info-temperature">
            <img src={icon} alt="cloud" />
            <span>{data.temp}°C</span>
          </div>
          <h6>{data.descr}</h6>
        </div>

        <div className="current__weather-other_info">
          <h4>Feels like {data.feels} °C</h4>
          {/* <div className="arrows">
          <div className="up">
            <img src={high} alt="" />
            <h6>24 °C</h6>
          </div>
          <div className="low">
            <img src={low} alt="" />
            <h6>20 °C</h6>
          </div>
        </div> */}
          <div className="humidity">
            <img src={humidity} alt="" />
            Humidity
            <span>{data.humidity}%</span>
          </div>
          <div className="wind">
            <img src={wind} alt="" />
            Wind
            <span>{Math.round(data.windSpeed * 3.6)}kph</span>
          </div>
          <div className="pressure">
            <img src={pressure} alt="" />
            Pressure
            <span> {data.pressure}hPa</span>
          </div>
        </div>
        <ToggleButton id={222} />
      </div>
    );
  };

  const weather = loaded && props.input ? thisCurrentWeather(data[0]) : null;

  return <>{weather}</>;
};

export default CurrentWeather;
