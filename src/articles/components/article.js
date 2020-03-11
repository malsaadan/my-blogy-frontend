import React from "react";

class Article extends React.Component {
  render() {
    return (
      <div className="article">
        {/* Title & Content & Author */}
        <h2>{this.props.title}</h2>
        <sub>{this.props.author}</sub>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

export default Article;
