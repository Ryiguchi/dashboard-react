import { useState, useEffect } from "react";

import axios from "axios";

import Weather from "../../components/weather/weather.component";
import DateTime from "../../components/date-time/date-time.component";
import News from "../../components/news/news.component";
import Quotes from "../../components/quotes/quotes.component";
import ImageInfo from "../../components/image-info/image-info.component";

import { Background } from "./dashboard.styles";

const pic = {
  urls: {
    regular:
      "https://unsplash.com/photos/ZCRtfop2hZY/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8YmVhY2glMjBzdW5zZXR8ZW58MHx8fHwxNjcyODU3Njc0&force=true",
  },
  user: {
    name: "Zany Jadraque",
    links: {
      html: "https://unsplash.com/@jenrielzany",
    },
  },
};
let num = 0;
let turn = 0;
const Dashboard = () => {
  const [picData, setPicData] = useState(pic);

  useEffect(() => {
    axios
      .get("https://api.unsplash.com/photos/random", {
        params: {
          count: "30",
          orientation: "landscape",
        },
        headers: {
          Authorization:
            "Client-ID fx-luDDEPewJ2HwjQlutgRvU4BMhyxTbESg5SDs_FkI",
        },
      })
      .then(({ data }) => {
        const interval = setInterval(() => {
          setPicData({ ...data[num] });
          if (num === data.length) num = 0;
          if (turn % 2 === 0) num++;
          turn++;
        }, 10000);
        return () => clearInterval(interval);
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
  }, []);

  if (!picData.urls) return null;

  return (
    <Background image={picData.urls.regular}>
      <Weather />
      <ImageInfo name={picData.user.name} link={picData.user.links.html} />
      <DateTime />
      <News />
      <Quotes />
    </Background>
  );
};

export default Dashboard;
