import React, { Component } from 'react';
import LoginContainer from "../components/organisms/LoginContainer";
import {RouteComponentProps} from "react-router-dom";

type InputTypes = 'email' | 'password';

type Props = {
    test: boolean;
};


type State = {
    email: string;
    password: string
    checkedPolicy: boolean;
};

class Login extends Component<Props & RouteComponentProps, State> {
    constructor(props:Props & RouteComponentProps) {
        super(props);
        this.state = {
            email: '',
            password: '',
            checkedPolicy: false,
        };
    }

    handleInputChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
        const newState: State = { ...this.state };
        const key:InputTypes = event.target.name as InputTypes;
        newState[key] = event.target.value;
        this.setState({
            ...newState
        })
    };

    togglePolicy = () => {
      this.setState({
          checkedPolicy: !this.state.checkedPolicy,
      })
    };



    handleLogIn = () => {
        // call of the login api here ---
    };


    render() {
        const {email, password,checkedPolicy} = this.state;
        return (
            <LoginContainer
                history={this.props.history}
                location={this.props.location}
                match={this.props.match}
                email={email}
                password={password}
                handleInputChange={this.handleInputChange}
                togglePolicy={this.togglePolicy}
                handleLogIn={this.handleLogIn}
                checkedPolicy={checkedPolicy}
            />
        );
    }
}

export default Login;
