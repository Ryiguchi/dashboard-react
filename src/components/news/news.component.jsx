import { useState, useEffect } from "react";
import axios from "axios";

import {
  gettingNewsMessage,
  handleErrors,
  getNews,
} from "../../utilities/ny-times.utils";

import {
  ArticleContainer,
  Image,
  TextContainer,
  Title,
  ErrorMessage,
} from "./news.styles";

let articleNum = 0;

const News = () => {
  const [allArticles, setAllArticles] = useState([]);
  const [article, setArticle] = useState([]);
  const [errorMessage, setErrorMessage] = useState(gettingNewsMessage);
  const { multimedia, title, section, abstract, url, subsection } = article;

  useEffect(() => {
    getNews()
      .then(({ data }) => {
        setAllArticles(data.results);
        setArticle(data.results[articleNum]);
      })
      .catch((error) => {
        setErrorMessage(handleErrors(error));
      });
  }, []);

  const nextArticle = () => {
    articleNum === allArticles.length - 1 ? (articleNum = 0) : articleNum++;
    setArticle(allArticles[articleNum]);
  };

  const previousArticle = () => {
    articleNum === 0 ? (articleNum = allArticles.length - 1) : articleNum--;
    setArticle(allArticles[articleNum]);
  };

  return (
    <ArticleContainer>
      {title ? (
        <>
          <ion-icon
            onClick={previousArticle}
            name="chevron-back-outline"
            style={{
              fontSize: "30px",
              position: "absolute",
              top: "50%",
              color: "#fff",
              left: "-30px",
              transform: "translateY(-50%)",
            }}
          ></ion-icon>
          <ion-icon
            onClick={nextArticle}
            name="chevron-forward-outline"
            style={{
              fontSize: "30px",
              position: "absolute",
              top: "50%",
              color: "#fff",
              right: "-30px",
              transform: "translateY(-50%)",
            }}
          ></ion-icon>
          <span className="category">{`${section}/${subsection}`}</span>
          <Title href={url} target="_blank">
            {title}
          </Title>
          <TextContainer>
            <Image
              src={multimedia ? multimedia[2].url : null}
              alt={title}
            ></Image>
            <p className="text">{abstract}</p>
          </TextContainer>
        </>
      ) : (
        <ErrorMessage>{errorMessage}</ErrorMessage>
      )}
    </ArticleContainer>
  );
};

export default News;
