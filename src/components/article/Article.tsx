import "./article.css";
import Articles from "./Articles";

function Article() {
  return (
    <section className="article section" id="articles">
      <h2 className="section__title">Blogs</h2>
      <span className="section__subtitle">I write about tech</span>

      <Articles />
    </section>
  );
}

export default Article;
