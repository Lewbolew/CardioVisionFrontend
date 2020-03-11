import React, { Component } from 'react';
import {RouteComponentProps} from "react-router-dom";
import {app} from '../src/index';



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

    componentDidMount(): void {
        app();
    }


    render() {
        return (
            <main className="visualization">
                <div className="plot-wrapper"></div>
                <img className="mask" alt="mask" src="masks/1693284930_1.png" />
            </main>
        );
    }
}




export default PatientChart;
