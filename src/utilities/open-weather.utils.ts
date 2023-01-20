import axios from "../../node_modules/axios/index";
import { WeatherData } from "../types";

// Error Handling
export const gettingLocationMessage =
  "Getting your location and local weather...";

const locationErrorMessage = "Unable to retrieve your location";

export const geolocationNotSupportedMessage =
  "Unable to get your local weather. Geolocation is not supported by your browser";

export const handleError = (error: any) => {
  if (error.response) {
    return `Your request was made but the server responded with a failed status code! (${error.response.status})`;
  } else if (error.request) {
    return "Your request was made but no response was received!";
  } else if (error === locationErrorMessage) {
    return error;
  } else {
    return "Something happened in setting up the request that triggered an Error!";
  }
};

// Get weather icon link from code
export const buildIconUrl = (code: string) => {
  return `http://openweathermap.org/img/wn/${code}@2x.png`;
};

// get location
export const getGeolocationPromise = new Promise<[number, number]>(
  (resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) =>
        resolve([position.coords.latitude, position.coords.longitude]),
      (_) => reject(locationErrorMessage)
    );
  }
);

// get weather from location
export const getWeatherPromise = (lat: number, lon: number) => {
  return axios.get<WeatherData>(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=eed26112e438378051148b2e63d5397a&units=metric`
  );
};

// ;
