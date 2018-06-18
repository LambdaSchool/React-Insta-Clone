import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state= {
      dummyData: dummyData
    }
  }

 

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Instagram Clone</h1>
        </header>
        <PostContainer datas={this.state.dummyData} />
      </div>
    );
  }
}

export default App;
