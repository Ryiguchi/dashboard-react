import { useState, useEffect } from "react";
import axios from "axios";

import {
  ArticleContainer,
  Image,
  TextContainer,
  Title,
  ErrorMessage,
} from "./news.styles";
let articleNum = 0;
let errorMessage = "Getting the latest headlines...";

const News = () => {
  const [allArticles, setAllArticles] = useState([]);
  const [article, setArticle] = useState([]);
  const { multimedia, title, section, abstract, url, subsection } = article;

  useEffect(() => {
    axios
      .get(
        "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=2WO5O3yGb7rDEJluARblo8fltahsDJWT"
      )
      .then((data) => {
        setAllArticles(data.data.results);
        setArticle(data.data.results[articleNum]);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          errorMessage = "We're sorry!  Your API Key is invalid! ";
        } else if (error.response.status === 429) {
          errorMessage =
            "Too many requests! You have reached your limit! Try again later! ";
        } else if (error.request) {
          errorMessage = "Your request was made but no response was received!";
          console.log(error.request);
        } else {
          errorMessage =
            "Something happened in setting up the request that triggered an Error!";
          console.log("Error", error.message);
        }
        console.log(error.config);
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
            <Image src={multimedia[2].url} alt={title}></Image>
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
