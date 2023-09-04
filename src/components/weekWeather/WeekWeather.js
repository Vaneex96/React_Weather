import cloud from "../../resources/icons/./icons8-clouds-80.png";
import sun from "../../resources/icons/icons8-sun-80.png";
import partlyCloudy from "../../resources/icons/icons8-partly-cloudy-day-80.png";
import rain from "../../resources/icons/icons8-rain-80.png";

import "./WeekWeather.scss";

const WeekWeather = () => {
  return (
    <div className="extended__forecast">
      <h2>Extended Forecast</h2>
      <div className="extended__forecast-day">
        <h4>Mon</h4>
        <img src={rain} alt="cloud" />
        <h4>Rain</h4>
        <h6>24°/22°</h6>
      </div>
      <div className="extended__forecast-day">
        <h4>Tue</h4>
        <img src={sun} alt="cloud" />
        <h4>Rain</h4>
        <h6>24°/22°</h6>
      </div>
      <div className="extended__forecast-day">
        <h4>Wed</h4>
        <img src={partlyCloudy} alt="cloud" />
        <h4>Rain</h4>
        <h6>24°/22°</h6>
      </div>
      <div className="extended__forecast-day">
        <h4>Thu</h4>
        <img src={sun} alt="cloud" />
        <h4>Rain</h4>
        <h6>24°/22°</h6>
      </div>
      <div className="extended__forecast-day">
        <h4>Fri</h4>
        <img src={rain} alt="cloud" />
        <h4>Rain</h4>
        <h6>24°/22°</h6>
      </div>
      <div className="extended__forecast-day">
        <h4>Sat</h4>
        <img src={cloud} alt="cloud" />
        <h4>Rain</h4>
        <h6>24°/22°</h6>
      </div>
      <div className="extended__forecast-day">
        <h4>Sun</h4>
        <img src={sun} alt="cloud" />
        <h4>Rain</h4>
        <h6>24°/22°</h6>
      </div>
    </div>
  );
};

export default WeekWeather;
