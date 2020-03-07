import React, { Component } from 'react';
import RegisterContainer from "../components/organisms/RegisterContainer";
import {RouteComponentProps} from "react-router-dom";
import {RegisterErrors, RegisterInputTypes} from "../interfaces";
import {checkRegisterFields} from "../helper";
import {register, RegisterData, Response} from "../api/register";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {Spinner} from "../../../ui/components/atoms/Spinner";



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
    isErrorToastOpened: boolean;
    errorMessage: string;
    spinner: boolean
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
            errorMessage: '',
            isErrorToastOpened: false,
            spinner: false,
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

    closeWarningPopup =() => {
        this.setState({
            isErrorToastOpened: false,
        })
    };

    handleRegister = async () => {
        const errors: RegisterErrors = checkRegisterFields(this.state.email, this.state.password, this.state.confirm);
        if((errors.email && errors.email.length > 0) ||
            (errors.password && errors.password.length > 0) ||
            (errors.confirm && errors.confirm.length > 0)
        ){
            this.setState({errors});
            return;
        }
        const requestData: RegisterData = {
            username: this.state.username,
            email: this.state.email,
            password1: this.state.password,
            password2: this.state.confirm,
        };
        this.setState({
            spinner: true,
        });
        const response:Response = await register(requestData);
        console.log('response: ', response)
        console.log(response.response);
        const errorMessage: string = response.response[Object.keys(response.response)[0]];
        if(!response.ok){
            this.setState({
               errorMessage: errorMessage
            },() => {
                this.setState({
                    isErrorToastOpened: true,
                })
            });
        }else{
            localStorage.setItem('myData', response.response.key);
        }

        this.setState({
            spinner: false,
        })
        console.log('response: ', response)
        // call of the register api here ---
        // this.props.history.push("/patients");

    };



    render() {
        const {email, password,checkedPolicy, errors,confirm, username} = this.state;

        return (
            <>
                <RegisterContainer
                    history={this.props.history}
                    location={this.props.location}
                    match={this.props.match}
                    email={email}
                    username={username}
                    password={password}
                    checkedPolicy={checkedPolicy}
                    confirm={confirm}
                    togglePolicy={this.togglePolicy}
                    handleInputChange={this.handleInputChange}
                    handleRegister={this.handleRegister}
                    errors={errors}
                />
                <Snackbar open={this.state.isErrorToastOpened} autoHideDuration={6000} onClose={this.closeWarningPopup}
                          anchorOrigin={{vertical:'top',horizontal: 'right'}}>
                    <MuiAlert elevation={0} onClose={this.closeWarningPopup} severity="error">
                        {this.state.errorMessage}
                    </MuiAlert>
                </Snackbar>
                <Spinner loading={this.state.spinner} />
            </>
        );
    }
}

export default Register;
