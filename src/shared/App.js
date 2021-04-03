import React from "react";
import './App.css';

import {BrowserRouter, Route} from "react-router-dom";

import Main from "../pages/Main";
import Login from "../pages/Login";
import Detail from "../pages/Detail";

function App() {
  return (
    <React.Fragment>
<BrowserRouter>
<Route path="/" exact component={Main}/>
<Route path="/login" exact component={Login}/>
<Route path="/detail" exact component={Detail}/>
</BrowserRouter>
    </React.Fragment>
  );
}

export default App;
