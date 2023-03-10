import axios from "../../node_modules/axios/index";

import { NY_TIMES_API } from "./defaults.utils";

import { ArticleData } from "../types";

export const gettingNewsMessage = "Getting the latest headlines...";

export const handleErrors = (error: any): string => {
  if (error.response.status === 401) {
    return "We're sorry!  Your API Key is invalid! ";
  } else if (error.response.status === 429) {
    return "Too many requests! You have reached your limit! Try again later! ";
  } else if (error.request) {
    return "Your request was made but no response was received!";
  } else {
    return "Something happened in setting up the request that triggered an Error!";
  }
};

export const getNews = () => axios.get<ArticleData>(NY_TIMES_API);
