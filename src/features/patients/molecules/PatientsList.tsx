import * as React from 'react';
// @ts-ignore
import styled from '@emotion/styled';
import {Patient} from "../interfaces";
import PatientItem from "./PatientItem";
import '../css/patientItem.css';

type Props = {
    patientsList: Patient[];
    history: any;
};

const PatientsList = (props: Props) => {
    const {patientsList} = props;
    return (
        <>
            <StyledContainer>
                <TableHeader>
                    <P>Priority</P>
                    <P className='patientId'>Patient ID</P>
                    <P>stenosisScore</P>
                    <P>studyTime</P>
                </TableHeader>
                {patientsList.map(patient => {
                    return (
                        <PatientItem key={patient.mrn} patient={patient} history={props.history} />
                    )
                })}
            </StyledContainer>
        </>
    );
};

const StyledContainer = styled.div`
    width: 560px;
    padding: 6px;
    display:flex;
    flex-direction: column;
    border-radius: 4px;
    
    @media screen and (max-width: 600px) {
        width: 100%;
    }
`;
const TableHeader = styled.div`
    display: flex;
    padding: 0 36px;
    justify-content: space-between;
`;

const P = styled.p`
    width: 90px;
    text-align: center;
`;

export default PatientsList;
