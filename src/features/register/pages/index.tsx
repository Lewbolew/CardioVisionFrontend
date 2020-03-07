import React, { Component } from 'react';
import RegisterContainer from "../components/organisms/RegisterContainer";
import {RouteComponentProps} from "react-router-dom";
import {RegisterErrors, RegisterInputTypes} from "../interfaces";
import {checkRegisterFields} from "../helper";


type Props = {
    test: boolean;
};


type State = {
    email: string;
    username: string
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
            username: '',
            password: '',
            confirm: '',
            checkedPolicy: false,
        };
    }

    handleInputChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
        const newState: State = { ...this.state };
        const key:RegisterInputTypes = event.target.name as RegisterInputTypes;
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
        const errors: RegisterErrors = checkRegisterFields(this.state.email, this.state.password, this.state.confirm);
        if((errors.email && errors.email.length > 0) ||
            (errors.password && errors.password.length > 0) ||
            (errors.confirm && errors.confirm.length > 0)
        ){
            this.setState({errors});
            return;
        }
        // call of the register api here ---
        this.props.history.push("/patients");

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
