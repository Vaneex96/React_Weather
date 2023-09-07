import { useState } from "react";

const useWeatherServices = () => {
  const _apiKey = "4de1ba0debbbc6e5eb1d87dd254780fb";
  const _apiBase = "https://api.openweathermap.org/data/2.5/forecast?";
  const _defaultCity = "Olawa";
  const _metricUnits = "metric";
  const _imperialUnits = "imperial";

  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState([]);

  const getCurrentWeather = async (
    city = _defaultCity,
    units = _metricUnits,
    method = "GET",
    body = null,
    headers = { "Content-Type": "application/json" }
  ) => {
    const result = await fetch(
      `${_apiBase}q=${city}&APPID=${_apiKey}&units=${units}`,

      { method: "GET", body: null, "Content-Type": "application/json" }
    );

    const data = await result
      .json()
      .then((res) => {
        setData(res.list.map((item) => _transformData(item)));
        setLoaded(true);
      })
      .catch((error) => console.log(error));

    return data;
  };

  const _transformData = (data) => {
    return {
      descr: data.weather[0].description,
      icon: data.weather[0].icon.slice(0, 2),
      temp: Math.round(data.main.temp),
      feels: Math.round(data.main.feels_like),
      minTemp: Math.round(data.main.temp_min),
      maxTemp: Math.round(data.main.temp_max),
      pressure: Math.round(data.main.pressure),
      humidity: Math.round(data.main.humidity),
      windSpeed: Math.round(data.wind.speed),
    };
  };

  return { getCurrentWeather, loaded, data };
};

export default useWeatherServices;
