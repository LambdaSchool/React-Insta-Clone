import React from 'react';


class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };
    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value});
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    placeholder="User Name"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChange}
                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                />

                <button
                  onClick={this.submit}
                >Login</button>
            </form>
        );
    }
}

export default Login;