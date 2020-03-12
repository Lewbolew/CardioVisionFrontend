import React, { Component } from 'react';
import {RouteComponentProps} from "react-router-dom";
import {Patient} from "../interfaces";
import PatientsList from "../molecules/PatientsList";
import logo from '../../../ui/images/logo-short.svg'
import styled from '@emotion/styled';
import {formatTime} from "../helpers";
import BasicButton from "../../../ui/components/atoms/BasicButton";
import AddPatientModal from "../molecules/AddPatientModal";
import Wrapper from "../../../ui/components/atoms/Wrapper";
import StyledImg from "../../../ui/components/atoms/StyledImg";
import Heading from "../../../ui/components/atoms/Heading";

type Props = {
    test: boolean;
};

//1995-12-17

const temporaryPatients: Patient[] = [
    {mrn: 3256,priority: 0, stenosisScore: 25, studyTime: formatTime(new Date())},
    {mrn: 2451,priority: 1, stenosisScore: 50, studyTime: formatTime(new Date('2019-12-23'))},
    {mrn: 2623,priority: 0, stenosisScore: 50, studyTime: formatTime(new Date('2020-01-23'))},
    {mrn: 1702,priority: 1, stenosisScore: 75, studyTime: formatTime(new Date('2020-03-01'))},
    {mrn: 4200,priority: 2, stenosisScore: 100, studyTime: formatTime(new Date('2020-2-13'))},
];

type State = {
    patientsList: Patient[];
    isAddPopupOpen: boolean;
    priority: number;
    stenosisScore: number;
    studyTime: Date;
};

class Patients extends Component<Props & RouteComponentProps, State> {
    constructor(props:Props & RouteComponentProps) {
        super(props);
        this.state = {
            patientsList: [],
            isAddPopupOpen: false,
            priority: 0,
            stenosisScore: 25,
            studyTime: new Date(),
        };
    }

    componentDidMount(): void {
        let patientsList = temporaryPatients.sort(this.compare);
        this.setState({
            patientsList,
        })
    }

    closePopup = () => {
      this.setState({
          isAddPopupOpen: false,
      })
    };

    addPatient = () => {
      let newPatientArr = this.state.patientsList;
      let newPatient:Patient = {
          mrn: Math.floor(Math.random() * 4000),
          priority: this.state.priority,
          stenosisScore: this.state.stenosisScore,
          studyTime: formatTime(this.state.studyTime),
      };
      newPatientArr.push(newPatient);
      let patientsList = newPatientArr.sort(this.compare);
      this.setState({
          patientsList
      })

    };

    openAddPopup = () => {
      this.setState({
          isAddPopupOpen: true
      })
    };

    compare = (a:Patient, b:Patient) =>  {
        if (a.priority > b.priority) return -1;
        if (b.priority > a.priority) return 1;
        return 0;
    };

    handlePriorityChange = (option:{label:string, value: number}) => {
        this.setState({
            priority: option.value
        })
    };
    handleStenosisScoreChange = (option:{label:string, value: number}) => {
        this.setState({
            stenosisScore: option.value
        })
    };
    handleStudyTimeChange = (d: any) => {
      this.setState({
          studyTime: d
      })
    };

    render() {
        const {patientsList, isAddPopupOpen, studyTime , stenosisScore, priority} = this.state;
        return (
            <Wrapper>
                <StyledImg src={logo} alt="logo" onClick={() => {this.props.history.push('/')}}/>
                <Heading>Patients List</Heading>
                <ButtonWrapper>
                    <BasicButton title='Add Patient' onClick={this.openAddPopup} />
                </ButtonWrapper>
                <AddPatientModal
                    open={isAddPopupOpen}
                    addPatient={this.addPatient}
                    close={this.closePopup}
                    priority={priority}
                    stenosisScore={stenosisScore}
                    studyTime={studyTime}
                    handlePriorityChange={this.handlePriorityChange}
                    handleStenosisScoreChange={this.handleStenosisScoreChange}
                    handleStudyTimeChange={this.handleStudyTimeChange}
                />
                <PatientsList patientsList={patientsList} history={this.props.history}/>
            </Wrapper>
        );
    }
}

const ButtonWrapper = styled.div`
    width: 220px;
`;

export default Patients;
