import React, { Component } from 'react';
import {RouteComponentProps} from "react-router-dom";
import logo from "../../../ui/images/logo-short.svg";
import BasicButton from "../../../ui/components/atoms/BasicButton";
import styled from "@emotion/styled";
import Wrapper from "../../../ui/components/atoms/Wrapper";
import StyledImg from "../../../ui/components/atoms/StyledImg";
import Heading from "../../../ui/components/atoms/Heading";
import InputBox from "../../../ui/components/atoms/InputBox";
import WarningMessage from "../../../ui/components/atoms/WarningMessage";

type State = {
    email: string;
    emailError: string;
    spinner: boolean
};

class EmailForm extends Component<RouteComponentProps, State> {
    constructor(props: RouteComponentProps) {
        super(props);
        this.state = {
            email: '',
            emailError: '',
            spinner: false,
        };
    }

    handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            email: event.target.value,
            emailError: '',
        })
    };

    handleEmailSent = async () => {
        if(this.state.email.length === 0) {
            this.setState({
                emailError: 'This field is required'
            });
            return;
        }
        this.props.history.push('/password-confirm');
    };

    render() {

        return (
            <Wrapper>
                <StyledImg src={logo} alt="logo" onClick={() => {this.props.history.push('/')}}/>
                <Heading>Password reset</Heading>
                <InputWrapper>
                    <InputBox
                        name='password-reset'
                        placeholder='Email used to create the account'
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                    />
                    <WarningMessage text={this.state.emailError} />
                </InputWrapper>
                <ButtonWrapper>
                    <BasicButton title='Reset' onClick={this.handleEmailSent} />
                </ButtonWrapper>
            </Wrapper>
        );
    }
}

const InputWrapper = styled.div`
    width: 320px;
    margin-bottom: 24px;
    & input {
        border-radius: 4px;
        text-align: center;
    }
`;

const ButtonWrapper = styled.div`
    width: 220px;
`;

export default EmailForm;
