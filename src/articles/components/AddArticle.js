import React from "react";
import "./AddArticle.css";

export default class AddArticle extends React.Component {
  // Setting constructor to hold the article object's value to be added
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      content: ""
    };
  }

  // A function to pass the new article object to the parent
  addArticle = () => {
    // Creating an object with the state values
    const article = {
      title: this.state.title,
      author: this.state.author,
      content: this.state.content
    };

    // Clearing text boxes
    this.setState({
      title: "",
      author: "",
      content: ""
    });

    // Passing the article object to the parent
    this.props.addArticle(article);
  };

  // Handle the input boxes' values
  handleInputBox = event => {
    const input = event.target;

    // If conditions to know which input value has been changed based on class names and set new value in the state
    if (input.className === "title") {
      this.setState({
        title: input.value
      });
    } else if (input.className === "author") {
      this.setState({
        author: input.value
      });
    } else {
      this.setState({
        content: input.value
      });
    }
  };

  render() {
    return (
      <>
        <h3>Add a New Article</h3>
        <label>Title:</label>
        <input
          className="title"
          onChange={this.handleInputBox}
          value={this.state.title}
        />
        <label>Author:</label>
        <input
          className="author"
          onChange={this.handleInputBox}
          value={this.state.author}
        />
        <label className="content">Content:</label>
        <br />
        <textarea onChange={this.handleInputBox} value={this.state.content} />
        <button onClick={this.addArticle}>Add Article!</button>
        <hr />
      </>
    );
  }
}
