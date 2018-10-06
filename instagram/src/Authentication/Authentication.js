import React from 'react';
import Logins from '../components/Login/Login';

const Authentication = App =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false
      }
    }

    componentDidMount() {
      if (localStorage.getItem('user')) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    }

    render() {
      if (this.state.loggedIn) return <App />
      return <Logins /> ;
    }
  };

export default Authentication;
