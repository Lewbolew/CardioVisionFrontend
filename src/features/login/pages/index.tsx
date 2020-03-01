import React, { Component } from 'react';
import LoginContainer from "../components/organisms/LoginContainer";
import {RouteComponentProps} from "react-router-dom";
import {LoginErrors, LoginInputTypes} from "../interfaces";
import {checkLoginFields} from "../helper";



type Props = {
    test: boolean;
};



type State = {
    email: string;
    password: string
    errors?: LoginErrors;
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
        const key:LoginInputTypes = event.target.name as LoginInputTypes;
        newState[key] = event.target.value;
        if(newState.errors)
            newState.errors[key] = '';
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
        const errors: LoginErrors = checkLoginFields(this.state.email, this.state.password);
        if((errors.email && errors.email.length > 0) ||
            (errors.password && errors.password.length > 0)){
            this.setState({errors});
            return;
        }
        // call of the login api here ---
    };


    render() {
        const {email, password,checkedPolicy, errors} = this.state;
        return (
            <LoginContainer
                history={this.props.history}
                location={this.props.location}
                match={this.props.match}
                email={email}
                errors={errors}
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
