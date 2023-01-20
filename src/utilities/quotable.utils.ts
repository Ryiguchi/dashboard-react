import axios from "../../node_modules/axios/index";
import { Quote } from "../types";

import { QUOTABLE_API } from "./defaults.utils";

export const getQuoteMessage =
  '"Patience is a virtue" ... your quote is coming!';

export const handleError = (error: any) => {
  if (error.response?.status === 404) {
    return `Unable to retrieve a quote!`;
  } else if (error.request) {
    return "Your request was made but no response was received!";
  } else {
    return "Something happened in setting up the request that triggered an Error!";
  }
};

export const getQuote = () => axios.get<Quote>(QUOTABLE_API);
