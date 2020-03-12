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
import {Spinner} from "../../../ui/components/atoms/Spinner";

type State = {
    confirm: string;
    confirmError: string;
    spinner: boolean
};

class PasswordConfirm extends Component<RouteComponentProps, State> {
    constructor(props: RouteComponentProps) {
        super(props);
        this.state = {
            confirm: '',
            confirmError: '',
            spinner: false,
        };
    }

    handleConfirmChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            confirm: event.target.value,
            confirmError: '',
        })
    };

    handleConfirmPassword = async () => {
        this.setState({
            spinner: true,
        });
        if(this.state.confirm.length === 0) {
            this.setState({
                confirmError: 'This field is required'
            })
        }
        this.setState({
            spinner: false,
        });
    };

    render() {

        return (
            <>
                <Wrapper>
                    <StyledImg src={logo} alt="logo" onClick={() => {this.props.history.push('/')}}/>
                    <Heading>Password Confirm</Heading>
                    <InputWrapper>
                        <InputBox
                            name='password-Confirm'
                            placeholder='Code sent to your email'
                            value={this.state.confirm}
                            onChange={this.handleConfirmChange}
                        />
                        <WarningMessage text={this.state.confirmError} />
                    </InputWrapper>
                    <ButtonWrapper>
                        <BasicButton title='Confirm' onClick={this.handleConfirmPassword} />
                    </ButtonWrapper>
                </Wrapper>
                <Spinner loading={this.state.spinner} />
            </>
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

export default PasswordConfirm;
