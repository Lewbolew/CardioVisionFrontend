import * as React from 'react';
// @ts-ignore
import styled from '@emotion/styled';
import {Patient} from "../interfaces";

type Props = {
    patient: Patient;
};

const PatientItem = (props: Props) => {
    const {patient} = props;
    return (
        <>
            <StyledContainer>
                <P>{patient.mrn}</P>
                <P>{patient.priority}</P>
                <P>{patient.stenosisScore}</P>
                <P>{patient.studyTime}</P>
            </StyledContainer>
        </>
    );
};

const P = styled.p`
    color: #333;
    width: 70px;
`;

const StyledContainer = styled.div`
    display:flex;
    padding: 4px 36px;
    margin-top: 12px;
    justify-content: space-between;
    box-shadow: 0px 2px 4px -1px #00000026;
    background: #fff;
    border-radius: 4px;
    transition: 0.1s;
    &:hover {
        background: #a5a5a561;
        cursor: pointer;
    }
`;

export default PatientItem;
