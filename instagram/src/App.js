import React from 'react';
// import dummyData from './dummy-data';
// import PostContainer from './components/PostContainer/PostContainer';
// import SearchForm from './components/SearchBar/SearchBar';
// import styled from 'styled-components';
import PostPage from './components/PostPage';
import './App.css';
// import Fuse from 'fuse.js';



class App extends React.Component {
  constructor(){
    super();
    this.state = {
      isLoggedIn: false,
      userName: '',
      userInput: '',
    }
  }

  // componentDidUpdate() {
  //   localStorage.setItem('userName', this.state.userName);
  // }

  componentDidMount() {
    if(localStorage.getItem('userName') !== null && localStorage.getItem('userName') !== undefined){
      this.setState({
        userName: localStorage.getItem('userName'),
        isLoggedIn: true
      })
    }
  }

  logIn = (event) => {
    event.preventDefault();
    if(this.state.userInput === ''){
      console.log('name input empty')
    }
    else{
      this.setState({ userName: this.state.userInput, isLoggedIn: true});
      localStorage.setItem('userName',this.state.userInput);
    }
  }

  logOut = () => {
    this.setState({ userName: '', isLoggedIn: false});
    localStorage.removeItem('userName');
  }

  userInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return <PostPage login={this.logIn} logout={this.logOut}
     userName={this.state.userName} userInput={this.state.userInput} 
     userInputChange={this.userInputChange} clicked={this.clicked} isLoggedIn={this.state.isLoggedIn}/>
  }
}

export default App;
