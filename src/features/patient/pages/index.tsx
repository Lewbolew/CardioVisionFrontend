import React, { Component } from 'react';
import {RouteComponentProps} from "react-router-dom";
import logo from '../../../ui/images/logo-short.svg'
import styled from '@emotion/styled';
import BasicButton from "../../../ui/components/atoms/BasicButton";
import {Patient} from "../interfaces";
import PatientTableContainer from "../components/molecules/PatientTableContainer";
import Wrapper from "../../../ui/components/atoms/Wrapper";
import StyledImg from "../../../ui/components/atoms/StyledImg";
import Heading from "../../../ui/components/atoms/Heading";


type RouteParams = {
    id: string;
};

type Props = {
    test: boolean;
} & RouteComponentProps<RouteParams>;

type State = {
    patient: Patient | undefined;
} ;

const patient: Patient = { /// here to imitate the backend
    patientId: 'ID-090DfR3',
    section: ['LAD', 'D-1', 'D-2', 'RCA'],
    prediction: ['Moderate Stenosis', 'No Stenosis', 'No Stenosis' ,'No Stenosis'],
    confidence: [80, 90, 93, 87],
    totalScore: 'Moderate Stenosis'
};

class Patients extends Component<Props & RouteComponentProps, State> {
    constructor(props:Props & RouteComponentProps) {
        super(props);
        this.state = {
            patient: undefined,
        }

    }

    componentDidMount(): void {
        // get patients info from backend here
        let currentPatient: Patient = patient;

        currentPatient.patientId = this.props.match.params.id;
        this.setState({
            patient: patient,
        })
    }

    render() {
        return (
            <Wrapper>
                <StyledImg src={logo} alt="logo" onClick={() => {this.props.history.push('/')}}/>
                <Heading>Patient: {this.state.patient?.patientId}</Heading>
                {this.state.patient ?
                    <PatientTableContainer patient={this.state.patient} history={this.props.history} /> :
                    null
                }
                <TopleftContainer>
                    <BasicButton onClick={() => {this.props.history.push('/patients')}}
                                 title='Back'
                    />
                </TopleftContainer>
                <SubHeading>Total Score: {this.state.patient?.totalScore}</SubHeading>
            </Wrapper>
        );
    }
}

const SubHeading = styled.h2`
    color: #333;
    text-transform: uppercase;
    font-size: 1.5em;
`;

const TopleftContainer = styled.div`
    position: absolute;
    top: 12px;
    left: 12px;
`;

export default Patients;
