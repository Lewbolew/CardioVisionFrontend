import * as React from 'react';
// @ts-ignore
import styled from '@emotion/styled';
import {Patient} from "../../interfaces";
import PatientTable from "./PatientTable";

type Props = {
    patient: Patient ;
    history: any;
};

const PatientTableContainer = (props: Props) => {
    const {patient} = props;
    return (
        <>
            <StyledContainer>
                <P>Section</P>
                <P>Prediction</P>
                <P>Confidence</P>
            </StyledContainer>
            <PatientTable patient={patient} history={props.history} />
        </>
    );
};

const P = styled.p`
    color: #333;
    text-transform: uppercase;
    width: 100%;
    color: #fff;
    text-align: center;
    margin: 0;
    & div {
        margin: 0 auto;
    }
`;

const StyledContainer = styled.div`
    display:flex;
    background: #666;
    padding: 6px;
    width: 480px;
    box-sizing: border-box;
`;

export default PatientTableContainer;
