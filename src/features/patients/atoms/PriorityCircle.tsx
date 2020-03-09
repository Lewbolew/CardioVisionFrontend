import * as React from 'react';
// @ts-ignore
import styled from '@emotion/styled';
import '../css/blinkAnnimation.css';

type CircleBgCollor = '#f00' | '#ff9300' | '#11ff11';
const colorsArray:CircleBgCollor[]  = ['#11ff11', '#ff9300', '#f00'];

type Props = {
    patientPriority: number;
    size?: number;
};

const PriorityCircle = (props: Props) => {
    const {
        patientPriority
    } = props;

    const circleBgCollor: CircleBgCollor = colorsArray[patientPriority];
    return (
        <StyledCircle className={patientPriority === 2 ? 'blinker' : ''} style={{
            backgroundColor: circleBgCollor,
            height: props.size+'px',
            width: props.size+'px',
            borderRadius: props.size,
        }}>
        </StyledCircle>
    );
};

const StyledCircle = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 25px;
    
`;

export default PriorityCircle;
