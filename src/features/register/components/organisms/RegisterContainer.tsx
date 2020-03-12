import * as React from 'react';
// @ts-ignore
import logo from '../../../../ui/images/logo-short.svg'
import { RouteComponentProps } from "react-router-dom";
import RegisterForm from "../molecules/RegisterForm";
import {RegisterErrors} from "../../interfaces";
import StyledImg from "../../../../ui/components/atoms/StyledImg";
import Wrapper from "../../../../ui/components/atoms/Wrapper";

type Props = {
    email: string;
    password: string;
    checkedPolicy: boolean;
    username: string;
    confirm: string;
    errors?: RegisterErrors;
    togglePolicy: () => void;
    handleRegister: () => void;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function RegisterContainer(props: Props & RouteComponentProps) {
    const {
        email,
        password,
        confirm,
        errors,
        checkedPolicy,
        handleInputChange,
        togglePolicy,
        handleRegister,
        username
    } = props;
    return (
        <Wrapper>
            <StyledImg src={logo} alt="logo" onClick={() => {props.history.push("/")}} />
            <RegisterForm
                email={email}
                history={props.history}
                username={username}
                password={password}
                checkedPolicy={checkedPolicy}
                confirm={confirm}
                errors={errors}
                handleInputChange={handleInputChange}
                handleRegister={handleRegister}
                togglePolicy={togglePolicy}
            />
        </Wrapper>
    );
}

export default RegisterContainer;
