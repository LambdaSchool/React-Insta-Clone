import React from 'react';
import './login.css';

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            username: ''
            
        }
    }
handleUserNameChange=(e)=> {
    this.setState({username:e.target.value});
}
handlePassWordChange=(e)=>{
    this.setState({password:e.target.value});
}
logIn=()=>{
    localStorage.setItem('username',this.state.username);
}
render () {
    return (
        <form className='login' onSubmit={this.login}>
            <input type='text' placeholder='enter a username' value={this.state.username} onChange={(e)=>this.handleUserNameChange(e)}/>
            <input type='password' placeholder='enter a password' value={this.state.password} onChange={(e)=>this.handlePassWordChange(e)}/>
            <button className='btn'>Login</button>
        </form>
    )
}
}
export default Login;