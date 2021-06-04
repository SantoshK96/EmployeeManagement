import React from 'react';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import './App.css';

export default () => {
    return (
        <div>
            <Router>
                    <HeaderComponent />
                    <div className="container">
                        <Switch>
                            <Route path="/" exact component={ListEmployeeComponent}></Route>
                            <Route path="/employees" component={ListEmployeeComponent}></Route>
                            <Route path="/add-employee" component={CreateEmployeeComponent}></Route>
                            <Route path="/update-employee/:id" component={UpdateEmployeeComponent}></Route>
                        </Switch>
                    </div>
                    <FooterComponent />
            </Router>
        </div>
    );
};