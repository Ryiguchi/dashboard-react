import { useState, useEffect } from "react";
import { WeatherData } from "../../types";

import {
  getGeolocationPromise,
  getWeatherPromise,
  geolocationNotSupportedMessage,
  gettingLocationMessage,
  handleError,
  buildIconUrl,
} from "../../utilities/open-weather.utils";

import {
  WeatherContainer,
  TempIconContainer,
  Temp,
  Location,
  ErrorMessage,
} from "./weather.styles";

const WeatherDataInitialState = {
  weather: [
    {
      icon: "",
      description: "",
    },
  ],
  main: {
    temp: 0,
  },
  name: "",
};

const Weather = () => {
  const [weatherData, setWeatherData] = useState<WeatherData>(
    WeatherDataInitialState
  );
  const [iconUrl, setIconUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState(gettingLocationMessage);

  const { main, weather, name } = weatherData;

  useEffect(() => {
    if (!navigator.geolocation) {
      setErrorMessage(geolocationNotSupportedMessage);
      return;
    }

    (async function () {
      try {
        const coords = await getGeolocationPromise;
        const { data } = await getWeatherPromise(...coords);

        setWeatherData(data);
        setIconUrl(buildIconUrl(data.weather[0].icon));
      } catch (error) {
        setErrorMessage(handleError(error));
      }
    })();
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
          <img src={iconUrl} alt={weather[0].description} />
        </>
      )}
    </WeatherContainer>
  );
};

export default Weather;
