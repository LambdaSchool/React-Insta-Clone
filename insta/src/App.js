import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data'
import SearchBar from "./components/SearchBar/searchBar";
import PostContainer from './components/PostContainer/PostContainer'


class App extends Component {
  constructor(){
    super();
    this.state ={
      posts: []
    }
  }

 

  componentDidMount = () =>{
    this.setState=({
      posts: dummyData
    })
  }
  submitHandler = e =>{
    e.preventDefault();
    console.log(e.target)
}
  render() {
    return (
      <div className="App">
        <SearchBar />
        <div className="post-container">
        {dummyData.map(item =>{
          return(
          <PostContainer key={item.timestamp} obj={item} />
       )})}
       </div>
      </div>
    );
  }
}

export default App;
