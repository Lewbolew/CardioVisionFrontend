import * as React from 'react';
// @ts-ignore
import styled from '@emotion/styled';
import {Patient} from "../interfaces";
import PriorityCircle from "../atoms/PriorityCircle";

type Props = {
    patient: Patient ;
    history: any;
};

const PatientItem = (props: Props) => {
    const {patient} = props;
    return (
        <StyledContainer onClick={() => {props.history.push('/patient')}}>
            <P><PriorityCircle patientPriority={patient.priority} size={24} /></P>
            <P className='patientId'>{patient.mrn}</P>
            <P>{patient.stenosisScore}</P>
            <P>{patient.studyTime}</P>
        </StyledContainer>

    );
};

const P = styled.p`
    color: #333;
    width: 90px;
    text-align: center;
    & div {
        margin: 0 auto;
    }
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
