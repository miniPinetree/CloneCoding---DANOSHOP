import React from "react";
import './App.css';
import styled from "styled-components";

import {BrowserRouter, Route} from "react-router-dom";
import {ConnectedRouter} from "connected-react-router";
import {useDispatch} from "react-redux";
import {actionCreators as userActions} from "../redux/modules/user";
import {history} from "../redux/configStore";

import Main from "../pages/Main";
import Login from "../pages/Login";
import Detail from "../pages/Detail";
import Cart from "../pages/Cart";
import SignUp from '../pages/Signup';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getCookie } from './Cookie';

import Test from "../pages/test";

function App() {
const dispatch = useDispatch();

const token = getCookie("is_login")

React.useEffect(()=>{
  if(token){ //토큰이 존재하면 로그인을 유지 API 호출
    dispatch(userActions.loginCheckDB());
  }
}, [])

  return ( //header, footer는 페이지 이동과 관계없이 보여짐.
    <React.Fragment>
      <Header/>
<ConnectedRouter history={history}>
<Route path="/" exact component={Main}/>
<Route path="/login" exact component={Login}/>
<Route path="/signup" exact component={SignUp}/>
<Route path="/detail/:id" exact component={Detail}/>
<Route path="/cart" exact component={Cart}/>
<Route path="/test" exact component={Test}/>
</ConnectedRouter>
<Footer/>
   </React.Fragment>
  );
}

export default App;
