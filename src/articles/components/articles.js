import React from "react";
import Article from "./article";
import { getAllArticles, deleteArticleByID } from "../api";

class Articles extends React.Component {
  componentDidMount() {
    getAllArticles()
      .then(response => {
        this.props.setArticles(response.data.articles);
      })
      .catch(error => {
        console.log("API ERROR: ", error);
      });
  }

  // Make an API Call to Delete an Article
  deleteArticle = id => {
    console.log("The Article ID to Delete", id);

    deleteArticleByID(id)
      .then(response => {
        console.log(`The Article with the ID ${id} has been deleted.`);

        // Filter the array to remove the deleted article
        const newArticlesList = this.props.articles.filter(article => {
          return article._id !== id;
        });

        this.props.setArticles(newArticlesList);
      })
      .catch(error => {
        console.log("API ERROR:", error);
      });
  };

  render() {
    let allArticles = <h4>No Articles</h4>;

    if (this.props.articles.length > 0)
      allArticles = this.props.articles.map((article, index) => {
        return (
          <Article
            title={article.title}
            author={article.author}
            content={article.content}
            id={article._id}
            deleteArticle={this.deleteArticle}
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
