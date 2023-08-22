function ArticleItems({ article, index }) {
  const htmlString = article.description;

  // Define regex patterns to match <h4> and <p> tags
  const h4Pattern = /<h4>(.*?)<\/h4>/s;
  const pPattern = /<p>(.*?)<\/p>/s;

  const h4Match = htmlString.match(h4Pattern);
  const pMatch = htmlString.match(pPattern);

  let content = null;

  if (h4Match && pMatch) {
    // Extract the content from the matches
    const h4Content = h4Match[1];
    const pContent = pMatch[1];

    // Build the combined content
    content = `${h4Content} - ${pContent}`;
  } else if (pMatch) {
    // If only a <p> tag is found
    const pContent = pMatch[1];
    content = pContent;
  }

  return (
    <div className="article__card" key={index}>
      <img src={article.thumbnail} alt={article.title} />
      <h3 className="article__title">{article.title}</h3>
      <p className="article__description">{content}</p>
      <p className="article__date">
        {new Date(article.pubDate).toLocaleDateString()}
      </p>
      <a href={article.link} className="article__button"></a>
    </div>
  );
}

export default ArticleItems;
