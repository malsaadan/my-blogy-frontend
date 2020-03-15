import React from "react";
import EditArticle from "./editArticle";

class Article extends React.Component {
  // The display state is responsible to show/hide edit form
  constructor(props) {
    super(props);
    this.state = {
      display: "none"
    };
  }
  deleteArticle = event => {
    event.preventDefault();
    this.props.deleteArticle(this.props.id);
  };

  // Show the edit form
  showEdit = event => {
    event.preventDefault();
    this.setState({
      display: "block"
    });
  };

  // Close the edit form
  closeEdit = () => {
    this.setState({
      display: "none"
    });
  };

  render() {
    return (
      <div className="article">
        {/* Title & Content & Author */}
        <h2>{this.props.title}</h2>
        <sub>{this.props.author}</sub>
        <p>{this.props.content}</p>
        <a href="#" onClick={this.showEdit}>
          Edit
        </a>
        {" | "}
        <a href="#" onClick={this.deleteArticle}>
          Delete
        </a>
        {/* The edit form will be displayed once the user clicks on edit anchor */}
        <EditArticle
          display={this.state.display}
          close={this.closeEdit}
          id={this.props.id}
          editArticle={this.props.editArticle}
          title={this.props.title}
          author={this.props.author}
          content={this.props.content}
        />
      </div>
    );
  }
}

export default Article;
