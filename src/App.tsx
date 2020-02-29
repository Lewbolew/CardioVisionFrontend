import React from 'react';
import { Route, BrowserRouter , Switch } from 'react-router-dom';
import Login from './features/login/pages';
import Home from './features/home/pages'
import './App.css';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
