import { useState, useEffect } from "react";

import Button from "../button/button.component";

import {
  QuoteContainer,
  TextContainer,
  QuoteText,
  Author,
  ErrorMessage,
} from "./quotes.styles";

import axios from "axios";

let errorMessage = '"Patience is a virtue" ... your quote is coming!';

const Quotes = () => {
  const [quote, setQuote] = useState([]);

  async function getNewQuote() {
    axios
      .get("https://api.quotable.io/random")
      .then((res) => {
        const { data } = res;
        setQuote(data);
      })
      .catch((error) => {
        if (error.response.status === 404) {
          errorMessage = `Unable to retrieve a quote!`;
        } else if (error.request) {
          errorMessage = "Your request was made but no response was received!";
        } else {
          errorMessage =
            "Something happened in setting up the request that triggered an Error!";
        }
      });
  }

  useEffect(() => {
    getNewQuote();
  }, []);

  return (
    <QuoteContainer>
      {quote.content ? (
        <>
          <TextContainer>
            <QuoteText>{`"${quote.content}"`}</QuoteText>
            <Author>&#8212; {quote.author}</Author>
          </TextContainer>
          <Button text="New Quote" callBack={getNewQuote} />
        </>
      ) : (
        <ErrorMessage>{errorMessage}</ErrorMessage>
      )}
    </QuoteContainer>
  );
};

export default Quotes;
