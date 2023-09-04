import ToggleButton from "../button/toggleButton";

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

const CurrentWeather = () => {
  return (
    <div className="current__weather">
      <div className="current__weather-main_info">
        <h2>Current Weather</h2>
        <div className="current__weather-main_info-name_city">Oława</div>
        <div className="current__weather-main_info-temperature">
          <img src={partlyCloudy} alt="cloud" />
          <span>22°C</span>
        </div>
        <h6>overcast clouds</h6>
      </div>

      <div className="current__weather-other_info">
        <h4>Feels like 22 °C</h4>
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
          <span>42%</span>
        </div>
        <div className="wind">
          <img src={wind} alt="" />
          Wind
          <span>19kph</span>
        </div>
        <div className="pressure">
          <img src={pressure} alt="" />
          Pressure
          <span> 1024hPa</span>
        </div>
      </div>
      <ToggleButton id={222} />
    </div>
  );
};

export default CurrentWeather;
