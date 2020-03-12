import * as React from 'react';
import logo from '../../../../ui/images/logo-short.svg'
import LoginForm from "../molecules/LoginForm";
import { RouteComponentProps } from "react-router-dom";
import {LoginErrors} from "../../interfaces";
import Wrapper from "../../../../ui/components/atoms/Wrapper";
import StyledImg from "../../../../ui/components/atoms/StyledImg";

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
        <Wrapper>
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
        </Wrapper>
    );
}

export default LoginContainer;
