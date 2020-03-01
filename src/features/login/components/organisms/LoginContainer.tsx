import * as React from 'react';
// @ts-ignore
import styled from '@emotion/styled';
import logo from '../../../../ui/images/logo-short.svg'
import LoginForm from "../molecules/LoginForm";
import { RouteComponentProps } from "react-router-dom";
import {LoginErrors} from "../../interfaces";

type Props = {
    email: string;
    password: string;
    errors?: LoginErrors;
    checkedPolicy: boolean;
    togglePolicy: () => void;
    handleLogIn: () => void;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function LoginContainer(props: Props & RouteComponentProps) {
    const {email, password, checkedPolicy, handleInputChange,togglePolicy,handleLogIn,errors} = props;
    return (
        <StyledContainer>
            <StyledImg src={logo} alt="logo" onClick={() => {props.history.push("/")}} />
            <LoginForm
                email={email}
                history={props.history}
                errors={errors}
                password={password}
                checkedPolicy={checkedPolicy}
                handleInputChange={handleInputChange}
                handleLogIn={handleLogIn}
                togglePolicy={togglePolicy}
            />
        </StyledContainer>
    );
}

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
`;

const StyledImg = styled.img`
    cursor: pointer;
    width: 60px;
`;

export default LoginContainer;
