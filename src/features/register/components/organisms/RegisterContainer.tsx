import * as React from 'react';
// @ts-ignore
import styled from '@emotion/styled';
import logo from '../../../../ui/images/logo-short.svg'
import { RouteComponentProps } from "react-router-dom";
import RegisterForm from "../molecules/RegisterForm";
import {RegisterErrors} from "../../interfaces";

type Props = {
    email: string;
    password: string;
    checkedPolicy: boolean;
    confirm: string;
    errors?: RegisterErrors;
    togglePolicy: () => void;
    handleRegister: () => void;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function RegisterContainer(props: Props & RouteComponentProps) {
    const {email, password, confirm, errors,checkedPolicy, handleInputChange,togglePolicy,handleRegister} = props;
    return (
        <StyledContainer>
            <StyledImg src={logo} alt="logo" onClick={() => {props.history.push("/")}} />
            <RegisterForm
                email={email}
                history={props.history}
                password={password}
                checkedPolicy={checkedPolicy}
                confirm={confirm}
                errors={errors}
                handleInputChange={handleInputChange}
                handleRegister={handleRegister}
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

export default RegisterContainer;
