import * as React from 'react';
// @ts-ignore
import styled from '@emotion/styled';
import {Patient} from "../interfaces";
import PatientItem from "./PatientItem";

type Props = {
    patientsList: Patient[];
};

const PatientsList = (props: Props) => {
    const {patientsList} = props;
    return (
        <>
            <StyledContainer>
                <TableHeader>
                    <P>Patient ID</P>
                    <P>Priority</P>
                    <P>stenosisScore</P>
                    <P>studyTime</P>
                </TableHeader>
                {patientsList.map(patient => {
                    return (
                        <PatientItem key={patient.mrn} patient={patient} />
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
`;
const TableHeader = styled.div`
    display: flex;
    padding: 0 36px;
    justify-content: space-between;
`;

const P = styled.p`
    width: 80px;
`;

export default PatientsList;
