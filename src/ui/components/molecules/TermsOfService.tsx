import * as React from 'react';
// @ts-ignore
import styled from '@emotion/styled';
import Modal from '@material-ui/core/Modal';
import BasicButton from "../atoms/BasicButton";

type Props = {
    open: boolean;
    close: () => void;
    action: () => void;
};

const TermsOfService = (props: Props) => {
    const {open, close, action} = props;
    return (
        <Modal open={open} onClose={close}>
            <StyledContainer>
                <Heading>Terms of Service</Heading>
                <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.</P>
                <ButtonWrapper>
                    <BasicButton title={'I have read the Terms of Service'} onClick={() => {
                        close();
                        action();
                    }} />
                </ButtonWrapper>

            </StyledContainer>
        </Modal>
    );
};

const StyledContainer = styled.div`
    display:flex;
    max-height: 600px;
    overflow: auto;
    padding: 4px 24px 24px 24px;
    margin-top: 30px;
    margin: 120px auto;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 2px 4px -1px #00000026;
    background: #fff;
    width: 440px;
    border-radius: 4px;
`;

const ButtonWrapper = styled.div`
    width: 260px;
`;

const P = styled.p`
    color: #333;
`;

const Heading = styled.h3`
    color: #333;
    text-align: center;
    margin-bottom: 24px; 
`;

export default TermsOfService;
