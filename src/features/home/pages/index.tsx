import * as React from 'react';
// @ts-ignore
import styled from '@emotion/styled';
import logo from '../../../ui/images/logo-full.svg'
import BasicButton from "../../../ui/components/atoms/BasicButton";


function Home(props:any) {
    return (
        <HomeWrapper>
            <FlexWrapper>
                <StyledImg src={logo} alt="logo" />
                <ButtonWrapper>
                    <BasicButton
                        onClick={() => {props.history.push("/login")}}
                        title='LOGIN'
                    />
                    <BasicButton
                        onClick={() => {props.history.push('/register')}}
                        title='REGISTER'
                    />
                </ButtonWrapper>
            </FlexWrapper>
        </HomeWrapper>
    );
}

const HomeWrapper = styled.div`\
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FlexWrapper = styled.div`
    width: 360px;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    & > button {
        width: 120px;
    }
`;

const StyledImg = styled.img`
    width: 360px;
    margin-bottom: 24px;
`;

export default Home;
