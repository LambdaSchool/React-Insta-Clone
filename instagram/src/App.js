import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
// import CommentContainer from "./components/CommentContainer/CommentContainer";
import Authenticate from "./components/Authentication/Authenticate";

const App = Authenticate(
  class App extends Component {
    constructor() {
      super();
      this.state = {
        data: dummyData
      };
    }

    render() {
      return (
        <div className="container">
          <SearchBar />
          <PostContainer toes={this.state.data} />

          {/* toes gets assigned to data from line 12*/}
          {/* <CommentContainer /> */}
        </div>
      );
    }
  }
);
export default App;
