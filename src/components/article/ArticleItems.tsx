function ArticleItems({ article, index }) {
  return (
    <div className="article__card" key={index}>
      <img src={article.thumbnail} alt={article.title} />
      <h3 className="article__title">{article.title}</h3>
      <p className="article subtitle">
        {new Date(article.pubDate).toLocaleDateString()}
      </p>
      <a href={article.link} className="article__button"></a>
    </div>
  );
}

export default ArticleItems;
