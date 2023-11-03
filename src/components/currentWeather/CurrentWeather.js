import { useEffect } from "react";
import useWeatherServices from "../../services/WeatherServices";

import ToggleButton from "../button/toggleButton";
import Spinner from "../Spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import wind from "../../resources/static icons/icons8-wind-40.png";
import pressure from "../../resources/static icons/icons8-pressure-gauge-40.png";
import humidity from "../../resources/static icons/icons8-wet-40.png";
import "./CurrentWeather.scss";
import high from "../../resources/static icons/high-icon.svg";
import low from "../../resources/static icons/low-icon.svg";

const CurrentWeather = (props) => {
  const {
    getCurrentWeather,
    getCurrentWeatherByGeolocation,
    currentData,
    currentWeatherStatus,
  } = useWeatherServices();

  useEffect(() => {
    if (props.input) {
      console.log("input");
      getCurrentWeather(props.input);
      props.setInput("");
      props.setGeolocation(null);
    }
    if (props.geolocation) {
      console.log("location");
      getCurrentWeatherByGeolocation(props.geolocation);
      props.setGeolocation(null);
      props.setInput("");
    }
  }, [props.input, props.geolocation]);

  const onToggleUnits = () => {
    props.setImperial(!props.imperial);
  };

  if (currentWeatherStatus === "loading") {
    return <Spinner />;
  } else if (currentWeatherStatus === "error") {
    return <ErrorMessage />;
  }

  const thisCurrentWeather = (data) => {
    return (
      <div
        className="current__weather"
        style={{ backgroundColor: props.toggle ? "rgb(5, 26, 51)" : "#fff" }}
      >
        <div className="current__weather-main_info">
          <h2>Current Weather</h2>
          <div className="current__weather-main_info-name_city">
            {data.name}
          </div>
          <div className="current__weather-main_info-temperature">
            <img src={data.icons} alt="cloud" />
            <span>
              {props.imperial ? data.tempImperial + " °F" : data.temp + " °C"}
            </span>
          </div>
          <h6>{data.descr}</h6>
        </div>

        <div className="current__weather-other_info">
          <h4>Feels like {data.feels} °C</h4>
          <div className="arrows">
            <div className="up">
              <img src={high} alt="" />
              {data.maxTemp}°
            </div>
            <div className="low">
              <img src={low} alt="" />
              {data.minTemp}°
            </div>
          </div>
          <div className="humidity">
            <img src={humidity} alt="" />
            Humidity
            <span>{data.humidity} %</span>
          </div>
          <div className="wind">
            <img src={wind} alt="" />
            Wind
            <span>
              {props.imperial
                ? Math.round(data.windSpeed) + " mph"
                : data.windSpeedImperial + " kph"}
            </span>
          </div>
          <div className="pressure">
            <img src={pressure} alt="" />
            Pressure
            <span> {data.pressure} hPa</span>
          </div>
        </div>
        <ToggleButton id={222} switchMode={onToggleUnits} />
      </div>
    );
  };

  if (currentWeatherStatus === "loaded") {
    return <>{thisCurrentWeather(currentData)}</>;
  }
};

export default CurrentWeather;
