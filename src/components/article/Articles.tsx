import { useState, useEffect } from "react";
import ArticleItems from "./ArticleItems";

const mediumArticle =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@jukemori";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(mediumArticle)
      .then((res) => res.json())
      .then((data) => setArticles(data.items));
  }, []);

  return (
    <div className="article__container container grid">
      {articles.map((article, index) => {
        return <ArticleItems key={index} article={article} index={index} />;
      })}
    </div>
  );
};

export default Articles;
