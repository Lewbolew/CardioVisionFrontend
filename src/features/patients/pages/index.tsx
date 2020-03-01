import React, { Component } from 'react';
import {RouteComponentProps} from "react-router-dom";
import {Patient} from "../interfaces";
import PatientsList from "../molecules/PatientsList";
import logo from '../../../ui/images/logo-short.svg'
import styled from '@emotion/styled';

type Props = {
    test: boolean;
};

const temporaryPatients: Patient[] = [
    {mrn: 1,priority: 2, stenosisScore: 25, studyTime: '2 days'},
    {mrn: 2,priority: 5, stenosisScore: 2, studyTime: '5 days'},
    {mrn: 3,priority: 1, stenosisScore: 30, studyTime: '3 days'},
    {mrn: 4,priority: 24, stenosisScore: 8, studyTime: '1 month'},
    {mrn: 5,priority: 7, stenosisScore: 2, studyTime: '14 days'},
];

type State = {
    patientsList: Patient[];
};

class Patients extends Component<Props & RouteComponentProps, State> {
    constructor(props:Props & RouteComponentProps) {
        super(props);
        this.state = {
            patientsList: [],
        };
    }

    componentDidMount(): void {
        let patientsList = temporaryPatients.sort(this.compare);

        this.setState({
            patientsList,
        })
    }

    compare = (a:Patient, b:Patient) =>  {
        if (a.priority > b.priority) return 1;
        if (b.priority > a.priority) return -1;
        return 0;
    };

    render() {
        const {patientsList} = this.state;
        return (
            <Wrapper>
                <StyledImg src={logo} alt="logo"/>
                <Heading>Patients List</Heading>
                <PatientsList patientsList={patientsList} />
            </Wrapper>
        );
    }
}

const Heading = styled.h1`
    color: #333;
    text-transform: uppercase;
`;

const Wrapper = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledImg = styled.img`
    width: 60px;
`;

export default Patients;
