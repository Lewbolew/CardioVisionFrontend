import * as React from 'react';
// @ts-ignore
import styled from '@emotion/styled';
import InputBox from "../../../../ui/components/atoms/InputBox";
import BasicButton from "../../../../ui/components/atoms/BasicButton";
type Props = {
    email: string;
    password: string;
    checkedPolicy: boolean;
    handleLogIn: () => void;
    togglePolicy: () => void;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function LoginForm(props: Props) {
    const {email, handleInputChange, password, checkedPolicy, togglePolicy, handleLogIn} = props;
    return (
        <StyledContainer>
            <Heading>Login</Heading>
            <InputWrapper>
                <P>Email:</P>
                <InputBox
                    onChange={handleInputChange}
                    value={email}
                    name='email'
                    placeholder='you@somemail.com'
                />
            </InputWrapper>
            <InputWrapper>
                <P>Password:</P>
                <InputBox
                    onChange={handleInputChange}
                    value={password}
                    name='password'
                    placeholder='pass....'
                />
            </InputWrapper>
            <A href="/">Forgot password?</A>
            <PolicyWrapper>
                <input type="checkbox" checked={checkedPolicy} onChange={togglePolicy}/>
                <span>I accept the </span>
                <a href="/"> Terms of Service </a>
                <span>GDPR complaint</span>
            </PolicyWrapper>
            <BasicButton
                onClick={handleLogIn}
                title='LOG IN'
                name='login'
                disabled={!checkedPolicy}
            />
        </StyledContainer>
    );
}

const Heading = styled.h1`
    text-transform: uppercase;
    color: #333333;
`;

const A = styled.a`
    align-self: flex-end;
    margin-bottom: 24px;
`;

const P = styled.p`
    color: #333333;
    margin: 0;
    font-size: 1.1em;
    line-height: 40px;
    width: 120px;
    margin-right: 12px;
`;

const InputWrapper = styled.div`
    display: flex;
    margin-bottom: 16px;
`;

const PolicyWrapper = styled(InputWrapper)`
    align-self: center;
    & > a {
        margin: 0 4px;
    }
    & > input {
        margin-top: auto;
    }
`;

const StyledContainer = styled.div`
    width: 380px;
    display:flex;
    flex-direction: column;
    & > button {
        width: 140px;
        align-self: center;
    }
`;

export default LoginForm;
