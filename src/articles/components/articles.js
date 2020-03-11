import React from "react";
import Article from "./article";

class Articles extends React.Component {
  render() {
    let allArticles = <h4>No Articles</h4>;

    if(this.props.articles.length > 0)
    allArticles = this.props.articles.map((article, index) => {
      return (
        <Article
          title={article.title}
          author={article.author}
          content={article.content}
          key={index}
        />
      );
    });

    return (
      <>
        <h3>All Articles</h3>
        {allArticles}
      </>
    );
  }
}

export default Articles;
