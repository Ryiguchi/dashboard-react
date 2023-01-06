import { useState, useEffect, useContext } from "react";

import { ImageContext } from "../../contexts/images.context";

import { getPics, handleErrors } from "../../utilities/unsplash.utils";

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
  const { setImages, images } = useContext(ImageContext);

  useEffect(() => {
    getPics
      .then(({ data }) => {
        setImages(data);
        startSlideshow(data);
      })
      .catch((error) => {
        handleErrors(error);
      });
  }, []);

  const startSlideshow = (data) => {
    setInterval(() => {
      setPicData(data[num]);
      if (num === data.length - 1) num = 0;
      if (turn % 2 === 0) num++;
      turn++;
    }, 30000);
  };

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
