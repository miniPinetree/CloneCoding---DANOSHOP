import React from "react";
import styled from "styled-components";
import {Text, Grid, Image, Input} from "../elements";

const Login =(props)=>{
    return(
       
            <Align>
                <Grid>
                <Image margin="16px auto" width="85.64px" height="16px" src={"https://auth.dano.me/res/images/65309db7dcc5f8bdc78897f9943f0ea3.png"}/>
                <Line/>
                </Grid>
               
               <Grid margin="30px 0 0 0" width="380px" height="466.4px">
            <Text size="21px">로그인</Text>
            <Grid> 
            <Input width="380px" height="45px" placeholder="아이디"/>
            <Input width="380px" height="45px" placeholder="비밀번호"/></Grid>
            </Grid>
            </Align>
        
    );
}
const Align = styled.div`
text-align:center;
width:460px;
height:565px;
margin:0 auto;
`;

const Line = styled.hr`
border: solid 0.2px #EBEBEB;
align:center;
width:95%;
`;
export default Login;