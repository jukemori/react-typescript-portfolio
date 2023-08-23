interface ArticleItemProps {
  article: {
    title: string;
    link: string;
    pubDate: string;
    thumbnail: string;
    description: string;
    tags: string[];
  };
  index: number;
}

// Function to format a given date string
function formatDate(inputText: string) {
  const inputDate = new Date(inputText);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return inputDate.toLocaleDateString(undefined, options);
}

// Function to extract content from HTML string using regex patterns
function extractContent(htmlString: string) {
  // Define regex patterns to match <h4> and <p> tags
  const h4Pattern = /<h4>(.*?)<\/h4>/s;
  const pPattern = /<p>(.*?)<\/p>/s;

  // Attempt to match patterns in the HTML string
  const h4Match = htmlString.match(h4Pattern);
  const pMatch = htmlString.match(pPattern);

  // If both <h4> and <p> tags are found, combine their content
  if (h4Match && pMatch) {
    const h4Content = h4Match[1];
    const pContent = pMatch[1];
    return `${h4Content} - ${pContent}`;
  } else if (pMatch) {
    // If only a <p> tag is found, use its content
    const pContent = pMatch[1];
    return pContent;
  }
  // Return null if no suitable content is found
  return null;
}

// Component to render article items
function ArticleItems({ article, index }: ArticleItemProps) {
  // Extract content and format date for rendering
  const content = extractContent(article.description);
  const formattedDate = formatDate(article.pubDate);

  return (
    <div className="article__card" key={index}>
      <img src={article.thumbnail} alt={article.title} />
      <h3 className="article__title">{article.title}</h3>
      <p className="article__description">{content}</p>
      <p className="article__date">{formattedDate}</p>
      <a href={article.link} className="article__button"></a>
    </div>
  );
}

export default ArticleItems;
