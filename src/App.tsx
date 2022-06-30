import React, {useEffect} from 'react';
import logo from './logo.svg';
import AuthIndex from "./component-slices/auth";
import StartupListIndex from "./component-slices/StartupList";
import EvaluteStartupIndex from "./component-slices/EvaluteStartup";
import HeaderIndex from "./component-slices/header";
import {BrowserRouter, Route, useNavigate} from "react-router-dom";
import {Routes} from "./routes";


function App() {


    return (
        <div className="container main  pr-3 pl-3">
            <BrowserRouter basename={"/opinotation"}>
                <Routes/>
                
            </BrowserRouter>
        </div>
    );
}

export default App;
