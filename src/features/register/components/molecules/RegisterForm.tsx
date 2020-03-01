import * as React from 'react';
// @ts-ignore
import styled from '@emotion/styled';
import InputBox from "../../../../ui/components/atoms/InputBox";
import BasicButton from "../../../../ui/components/atoms/BasicButton";
import StyledAnchor from "../../../../ui/components/atoms/Anchor";
import {RegisterErrors} from "../../interfaces";
import WarningMessage from "../../../../ui/components/atoms/WarningMessage";
type Props = {
    email: string;
    password: string;
    confirm: string;
    errors?: RegisterErrors;
    history: any;
    checkedPolicy: boolean;
    handleRegister: () => void;
    togglePolicy: () => void;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const RegisterForm = (props: Props) => {
    const {email, handleInputChange, password, confirm, errors,checkedPolicy, togglePolicy, handleRegister} = props;
    return (
        <StyledContainer>
            <Heading>Register</Heading>
            <InputWrapper>
                <P>Email:</P>
                <InputBox
                    onChange={handleInputChange}
                    value={email}
                    name='email'
                    placeholder='you@somemail.com'
                />
            </InputWrapper>
            <WarningMessage style={{marginLeft: '100px'}} text={errors?.email} />
            <InputWrapper>
                <P>Password:</P>
                <InputBox
                    onChange={handleInputChange}
                    value={password}
                    type={password.length === 0 ? 'text' : 'password'}
                    name='password'
                    placeholder='pass....'
                />
            </InputWrapper>
            <WarningMessage style={{marginLeft: '100px'}} text={errors?.password} />
            <InputWrapper>
                <P>Confirm:</P>
                <InputBox
                    onChange={handleInputChange}
                    value={confirm}
                    type={confirm.length === 0 ? 'text' : 'password'}
                    name='confirm'
                    placeholder='confirm password'
                />
            </InputWrapper>
            <WarningMessage style={{marginLeft: '100px'}} text={errors?.confirm} />
            <A onClick={() => {props.history.push('/login')}}>Sign in instead</A>
            <PolicyWrapper>
                <input type="checkbox" checked={checkedPolicy} onChange={togglePolicy}/>
                <span>I accept the </span>
                <StyledAnchor> Terms of Service </StyledAnchor>
            </PolicyWrapper>
            <BasicButton
                onClick={handleRegister}
                title='REGISTER'
                name='register'
                disabled={!checkedPolicy}
            />
        </StyledContainer>
    );
};



const Heading = styled.h1`
    text-transform: uppercase;
    color: #333333;
    margin-bottom: 0;
`;

const A = styled(StyledAnchor)`
    align-self: flex-end;
    margin: 24px 0;
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
    margin-top: 16px;
`;

const PolicyWrapper = styled(InputWrapper)`
    margin: 0;
    margin-bottom: 12px;
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

export default RegisterForm;
