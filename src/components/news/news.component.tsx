import { useState, useEffect, ImgHTMLAttributes } from "react";

import IonIcon from "../../../node_modules/@reacticons/ionicons/lib/components/IonIcon";

import {
  gettingNewsMessage,
  handleErrors,
  getNews,
} from "../../utilities/ny-times.utils";

import { Article } from "../../types";

import {
  ArticleContainer,
  Image,
  TextContainer,
  Title,
  ErrorMessage,
} from "./news.styles";

let articleNum = 0;

const initialArticleState = {
  multimedia: [
    {
      url: "",
    },
  ],
  title: "",
  section: "",
  abstract: "",
  url: "",
  subsection: "",
};

const News = () => {
  const [allArticles, setAllArticles] = useState<Article[]>([]);
  const [article, setArticle] = useState<Article>(initialArticleState);
  const [errorMessage, setErrorMessage] = useState<string>(gettingNewsMessage);

  const { multimedia, title, section, abstract, url, subsection } = article;

  useEffect(() => {
    getNews()
      .then(({ data }) => {
        setAllArticles(data.results);
        setArticle(data.results[articleNum]);
      })
      .catch((error: any) => {
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
          <IonIcon
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
          ></IonIcon>
          <IonIcon
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
          ></IonIcon>
          <span className="category">{`${section}/${subsection}`}</span>
          <Title href={url} target="_blank">
            {title}
          </Title>
          <TextContainer>
            <Image src={multimedia[2]?.url} alt={title}></Image>
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
