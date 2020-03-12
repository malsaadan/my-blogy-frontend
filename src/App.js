import React from "react";
import "./App.css";
import Articles from "./articles/components/articles";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [
        // { title: "T1", author: "A1", content: "C1" },
        // { title: "T2", author: "A2", content: "C2" },
        // { title: "T3", author: "A3", content: "C3" },
        // { title: "T4", author: "A4", content: "C4" }
      ]
    };
  }

  setArticles = (articles) => {
    this.setState({
      articles
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Welcome to Blogy!</p>
        </header>
        <Articles articles={this.state.articles} setArticles={this.setArticles} />
      </div>
    );
  }
}

export default App;
