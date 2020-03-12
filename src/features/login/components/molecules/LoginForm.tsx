import * as React from 'react';
// @ts-ignore
import styled from '@emotion/styled';
import InputBox from "../../../../ui/components/atoms/InputBox";
import BasicButton from "../../../../ui/components/atoms/BasicButton";
import StyledAnchor from "../../../../ui/components/atoms/Anchor";
import WarningMessage from "../../../../ui/components/atoms/WarningMessage";
import {LoginErrors} from "../../interfaces";
type Props = {
    email: string;
    password: string;
    checkedPolicy: boolean;
    history: any;
    errors?: LoginErrors;
    handleLogIn: () => void;
    togglePolicy: () => void;
    openTermsOfService: () => void;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const LoginForm = (props: Props) => {
    const {email, handleInputChange, password, checkedPolicy, togglePolicy, handleLogIn,errors,openTermsOfService} = props;
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
            <FlexWrapper>
                <StyledAnchor onClick={() => {props.history.push('/register')}}>Create an account</StyledAnchor>
                <A onClick={() => {props.history.push('/password-reset')}}>Forgot password?</A>
            </FlexWrapper>
            <PolicyWrapper>
                <input type="checkbox" checked={checkedPolicy} onChange={togglePolicy}/>
                <span>I accept the </span>
                <StyledAnchor onClick={openTermsOfService}> Terms of Service </StyledAnchor>
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
};

const FlexWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 18px 0 8px 0;
`;

const Heading = styled.h1`
    text-transform: uppercase;
    color: #333333;
    margin-bottom: 0;
`;

const A = styled(StyledAnchor)`
    align-self: flex-end;
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

export default LoginForm;
