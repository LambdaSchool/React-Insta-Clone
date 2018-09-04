import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      instacloneData: dummyData
      
  }
  }

  render() {
    return (
      <div className="App">
        
        <SearchBar />
        <PostContainer anything={this.state.instacloneData}/>

        

      </div>
    );
  }
}

export default App;
