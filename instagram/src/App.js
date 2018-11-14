import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import PostsPage from './components/PostContainer/PostsPage.js';


class App extends Component {
  constructor() {
    super();
    this.state={
      postData: dummyData,
      user: '',
      password: ''
    }
  
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
   }
  logout = () =>{
    localStorage.removeItem(`${this.state.user}`)
    this.setState({
      user: '',
      password: '',
     });
     
  }
  login = () =>{
   this.setState({
     user: this.state.user,
     password: this.state.password,
    });
    localStorage.setItem(`${this.state.user}`,`${this.state.password}`)
  }

  render() {
    return (
      <PostsPage 
        logout = {this.logout}
        posts = {this.state.postData}
        login = {this.login}
        handleChange = {this.handleChange}
        user = {this.state.user}
        password ={this.state.password}
      />
    );
  }
}

export default App;
