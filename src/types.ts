export type Image = {
  id: string;
  alt_description: string;
  urls: {
    regular: string;
  };
  user: {
    name: string;
    links: {
      html: string;
    };
  };
};

export type Article = {
  multimedia: {
    url: string;
  }[];
  title: string;
  section: string;
  abstract: string;
  url: string;
  subsection: string;
};

export type ArticleData = {
  results: Article[];
};

export type Quote = {
  content: string;
  author: string;
};

export type WeatherData = {
  weather: {
    icon: string;
    description: string;
  }[];
  main: {
    temp: number;
  };
  name: string;
};
