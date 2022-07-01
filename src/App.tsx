import React, {useEffect} from 'react';
import logo from './logo.svg';
import AuthIndex from "./component-slices/auth";
import StartupListIndex from "./component-slices/StartupList";
import EvaluteStartupIndex from "./component-slices/EvaluteStartup";
import HeaderIndex from "./component-slices/header";
import {BrowserRouter, Route, useNavigate, Routes} from "react-router-dom";
import HomeIndex from "./component-slices/home";
import Layout from "./component-slices/generalComponent/layout";
import FinalResult from "./component-slices/finalResult";


function App() {


    return (
        <div className="container main  pr-3 pl-3">
            <BrowserRouter>
                {/*<Routes/>*/}
                <Routes>
                    <Route path="/login" element={<AuthIndex/>}/>
                    <Route path="/evalute" element={<HomeIndex/>}/>
                    <Route path="/evalute/evaluteProject" element={<EvaluteStartupIndex/>}/>
                    <Route path="/evalute/result" element={<FinalResult/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
