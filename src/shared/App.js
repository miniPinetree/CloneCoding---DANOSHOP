import React from "react";
import './App.css';

import {BrowserRouter, Route} from "react-router-dom";

import Main from "../pages/Main";
import Login from "../pages/Login";

function App() {
  return (
    <React.Fragment>
<BrowserRouter>
<Route path="/" exact component={Main}/>
<Route path="/login" exact component={Login}/>
</BrowserRouter>
    </React.Fragment>
  );
}

export default App;
