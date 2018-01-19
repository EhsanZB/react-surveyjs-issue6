import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SurveyEditor from "./components/SurveyEditor";
import "bootstrap/dist/css/bootstrap.css";
import * as widgets from "surveyjs-widgets";
import * as Survey from "survey-react";
import "survey-react/survey.css";

widgets.signaturepad(Survey);


class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div className="surveyjs">
                    <h1>SurveyJS Editor in action:</h1>
                    <SurveyEditor />
                </div>
            </div>
        );
    }
}

export default App;
