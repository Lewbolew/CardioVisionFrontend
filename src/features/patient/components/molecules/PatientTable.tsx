import * as React from 'react';
// @ts-ignore
import styled from '@emotion/styled';
import {Patient} from "../../interfaces";
import SectionColumn from "./SectionColumn";
import PredictionColumn from "./PredictionColumn";
import ConfidenceColumn from "./ConfidenceColumn";

type Props = {
    patient: Patient ;
    history: any;
};

const PatientTable = (props: Props) => {
    const {patient} = props;
    return (
        <StyledContainer>
            <SectionColumn section={patient.section} history={props.history} />
            <PredictionColumn prediction={patient.prediction} />
            <ConfidenceColumn style={{borderRight: '1px solid #666'}} confidence={patient.confidence} />
        </StyledContainer>
    );
};

const StyledContainer = styled.div`
    display:flex;
    
    
`;

export default PatientTable;
