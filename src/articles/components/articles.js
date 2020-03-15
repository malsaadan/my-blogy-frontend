import React from "react";
import Article from "./article";
import {
  getAllArticles,
  addNewArticle,
  editArticleByID,
  deleteArticleByID
} from "../api";
import AddArticle from "./AddArticle";

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

  addArticle = article => {
    // Make an axios request
    addNewArticle(article)
      .then(response => {
        console.log(
          `The Article ${article.title} has been added successfully.`
        );

        // If the request was successful then add the new article to the end of the articles array so that we can see it in the page

        // Save the array that was passed as props in a variable
        const articles = this.props.articles;
        // push the new article to the end of the articles array
        articles.push(article);
        // Update the articles array in the parent state
        this.props.setArticles(articles);
      })
      .catch(error => {
        console.log("API ERROR: ", error);
      });
  };

  editArticle = (id, newArticle) => {
    console.log(`Edit the Article with ID ${id}`);

    // Make axios request
    editArticleByID(id, newArticle)
      .then(response => {
        console.log(
          `The Article with the ID ${id} has been updated successfully.`
        );

        // To update the list in the UI, I searched for the updated article in the articles list and then update the title, author and content of the article
        const articles = this.props.articles;
        articles.forEach((article, index) => {
          if (article._id === id) {
            articles[index].title = newArticle.title;
            articles[index].author = newArticle.author;
            articles[index].content = newArticle.content;
          }
        });

        // Update the articles list in the parent to the new list we have just updated
        this.props.setArticles(articles);
      })
      .catch(error => {
        console.log(error);
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
            editArticle={this.editArticle}
            key={index}
          />
        );
      });

    return (
      <>
        <AddArticle addArticle={this.addArticle} />
        <h3>All Articles</h3>
        {allArticles}
      </>
    );
  }
}

export default Articles;
