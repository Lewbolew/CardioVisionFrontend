import React from 'react';
import { Route, BrowserRouter , Switch } from 'react-router-dom';
import Login from './features/login/pages';
import Home from './features/home/pages';
import Register from "./features/register/pages";
import Patients from "./features/patients/pages";
import Patient from "./features/patient/pages";
import PatientChart from "./features/patientChart/pages/index";
import './App.css';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <Route path="/patients" exact component={Patients} />
                <Route path="/patient" exact component={Patient} />
                <Route path="/patient-chart" exact component={PatientChart} />
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
