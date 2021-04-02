import React from "react";
import styled from "styled-components";
import {Text, Grid, Image, Input} from "../elements";

const Login =(props)=>{
    return(
        <React.Fragment>
            <Text size="21px">로그인</Text>
            <Grid> <Input placeholder="아이디"/>
            <Input placeholder="아이디"/></Grid>
        </React.Fragment>
    );
}

export default Login;