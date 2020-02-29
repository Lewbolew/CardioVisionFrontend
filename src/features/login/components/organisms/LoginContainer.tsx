import * as React from 'react';
// @ts-ignore
import styled from '@emotion/styled';
import logo from '../../../../ui/images/logo-short.svg'
import LoginForm from "../molecules/LoginForm";

type Props = {
    email: string;
    password: string
    checkedPolicy: boolean;
    togglePolicy: () => void;
    handleLogIn: () => void;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function LoginContainer(props: Props) {
    const {email, password, checkedPolicy, handleInputChange,togglePolicy,handleLogIn} = props;
    return (
        <StyledContainer>
            <StyledImg src={logo} alt="logo" />
            <LoginForm
                email={email}
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
    width: 60px;
`;

export default LoginContainer;
