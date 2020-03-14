import React from "react";

class Article extends React.Component {
  deleteArticle = event => {
    event.preventDefault();
    this.props.deleteArticle(this.props.id);
  };

  render() {
    return (
      <div className="article">
        {/* Title & Content & Author */}
        <h2>{this.props.title}</h2>
        <sub>{this.props.author}</sub>
        <p>{this.props.content}</p>
        <a href="#" onClick={this.deleteArticle}>
          Delete
        </a>
      </div>
    );
  }
}

export default Article;
