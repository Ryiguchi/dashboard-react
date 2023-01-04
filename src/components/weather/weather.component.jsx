import { useState, useEffect } from "react";
import axios from "axios";

import {
  WeatherContainer,
  TempIconContainer,
  Temp,
  Location,
  ErrorMessage,
} from "./weather.styles";

const Weather = () => {
  const [weatherData, setWeatherData] = useState([]);
  const { main, weather, name } = weatherData;

  const errorMessage = "Getting your location and local weather...";

  useEffect(() => {
    if (!navigator.geolocation) {
      errorMessage =
        "Unable to get your local weather. Geolocation is not supported by your browser";
      return;
    }
    const geoLocationError = () => {
      errorMessage = "Unable to retrieve your location";
    };
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=eed26112e438378051148b2e63d5397a&units=metric`
        )
        .then((res) => {
          setWeatherData(res.data);
        })
        .catch((error) => {
          if (error.response) {
            console.log(
              `Your request was made but the server responded with a failed status code! (${error.response.status})`
            );
            console.log(error.response.data);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log("Your request was made but no response was received!");
            console.log(error.request);
          } else {
            console.log(
              "Something happened in setting up the request that triggered an Error!"
            );
            console.log("Error", error.message);
          }
          console.log(error.config);
        });
    }, geoLocationError);
  }, []);

  return (
    <WeatherContainer>
      {!main ? (
        <ErrorMessage>{errorMessage}</ErrorMessage>
      ) : (
        <>
          <TempIconContainer>
            <Temp>{Math.trunc(main.temp)}&#8451;</Temp>
            <Location>{name}</Location>
          </TempIconContainer>
          <img
            src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
            alt={weather[0].description}
          />
        </>
      )}
    </WeatherContainer>
  );
};

export default Weather;
