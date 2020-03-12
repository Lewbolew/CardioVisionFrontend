import React, { Component } from 'react';
import {RouteComponentProps} from "react-router-dom";
import styled from '@emotion/styled';




type Props = {
    test: boolean;
};

type State = {
    chartData: number [];
};

class PatientChart extends Component<Props & RouteComponentProps, State> {
    constructor(props:Props & RouteComponentProps) {
        super(props);
        this.state = {
            chartData:[123,123,123],
        }
    }

    render() {
        return (
            <div>
            </div>
        );
    }
}




export default PatientChart;
