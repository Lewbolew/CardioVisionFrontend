import React, { Component } from 'react';
import LoginContainer from "../components/organisms/LoginContainer";
import {RouteComponentProps} from "react-router-dom";
import {LoginErrors, LoginInputTypes} from "../interfaces";
import {checkLoginFields} from "../helper";
import {Spinner} from "../../../ui/components/atoms/Spinner";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {Response} from "../../../api/interfaces";
import {login, LoginData} from "../api/login";



type Props = {
    test: boolean;
};



type State = {
    email: string;
    password: string
    errors?: LoginErrors;
    checkedPolicy: boolean;
    errorMessage: string;
    isErrorToastOpened: boolean;
    spinner: boolean;
};

class Login extends Component<Props & RouteComponentProps, State> {
    constructor(props:Props & RouteComponentProps) {
        super(props);
        this.state = {
            email: '',
            password: '',
            checkedPolicy: false,
            errorMessage: '',
            isErrorToastOpened: false,
            spinner: false,
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

    closeWarningPopup =() => {
        this.setState({
            isErrorToastOpened: false,
        })
    };

    handleLogIn = async () => {
        const errors: LoginErrors = checkLoginFields(this.state.email, this.state.password);
        if((errors.email && errors.email.length > 0) ||
            (errors.password && errors.password.length > 0)){
            this.setState({errors});
            return;
        }
        const requestData: LoginData = {
            email: this.state.email,
            password: this.state.password,
        };
        this.setState({
            spinner: true,
        });
        const response:Response = await login(requestData);
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
            localStorage.setItem('token', response.response.key);
            this.props.history.push("/patients");
        }
        this.setState({
            spinner: false,
        });
    };


    render() {
        const {email, password,checkedPolicy, errors} = this.state;
        return (
            <>
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

export default Login;
