import React, { Component } from 'react';
import RegisterContainer from "../components/organisms/RegisterContainer";
import {RouteComponentProps} from "react-router-dom";


type Props = {
    test: boolean;
};

export interface RegisterErrors {
    emailError?: string;
    passwordError?: string;
    confirmError?: string;
}

type InputTypes = 'email' | 'password' | 'confirm'

type State = {
    email: string;
    password: string;
    confirm: string;
    errors?: RegisterErrors;
    checkedPolicy: boolean;
};

class Register extends Component<Props & RouteComponentProps, State> {
    constructor(props:Props & RouteComponentProps) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirm: '',
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



    handleRegister = () => {
        // call of the login api here ---
    };


    render() {
        const {email, password,checkedPolicy, errors,confirm} = this.state;
        return (
            <RegisterContainer
                history={this.props.history}
                location={this.props.location}
                match={this.props.match}
                email={email}
                password={password}
                checkedPolicy={checkedPolicy}
                confirm={confirm}
                togglePolicy={this.togglePolicy}
                handleInputChange={this.handleInputChange}
                handleRegister={this.handleRegister}
                errors={errors}
            />

        );
    }
}

export default Register;
