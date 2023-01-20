import { useState, useEffect } from "react";

import Button from "../button/button.component";

import {
  getQuote,
  handleError,
  getQuoteMessage,
} from "../../utilities/quotable.utils";

import {
  QuoteContainer,
  TextContainer,
  QuoteText,
  Author,
  ErrorMessage,
} from "./quotes.styles";
import { Quote } from "../../types";

const initialQuoteState = {
  content: "",
  author: "",
};

const Quotes = () => {
  const [quote, setQuote] = useState<Quote>(initialQuoteState);
  const [errorMessage, setErrorMessage] = useState(getQuoteMessage);

  const getNewQuote = () => {
    getQuote()
      .then((res) => {
        const { data } = res;
        setQuote(data);
      })
      .catch((error) => {
        setErrorMessage(handleError(error));
      });
  };

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
          <Button callBack={getNewQuote}>New Quote</Button>
        </>
      ) : (
        <ErrorMessage>{errorMessage}</ErrorMessage>
      )}
    </QuoteContainer>
  );
};

export default Quotes;
