import React from "react";

export default class EditArticle extends React.Component {
  // The constructor holds the new values
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      author: this.props.author,
      content: this.props.content
    };
  }

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

  // A function to trigger the parent's function to edit the article once the anchor clicked
  editArticle = event => {
    event.preventDefault();

    // Close the form after submitting
    this.close();

    // Create a new article object with the updated values
    const article = {
      title: this.state.title,
      author: this.state.author,
      content: this.state.content
    };

    // Pass the id and the new article to the parent (articles)
    this.props.editArticle(this.props.id, article);
  };

  // This method closes the form of edit an article
  close = () => {
    this.props.close();
  };

  render() {
    return (
      <div style={{ display: this.props.display }}>
        <div>
          <h4>Edit Article</h4>
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
          <label>Content:</label>
          <br />
          <textarea
            className="content"
            onChange={this.handleInputBox}
            value={this.state.content}
          />
          <button style={{ display: "inline" }} onClick={this.close}>
            Cancel
          </button>
          <button onClick={this.editArticle}>Confirm</button>
        </div>
      </div>
    );
  }
}
