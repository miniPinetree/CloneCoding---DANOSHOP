import React, {useRef} from "react";
import styled from "styled-components";
import {Grid} from "../elements";

const Test =(props)=>{
    const Sticky={
        position:"sticky",
        top:"50px",
    }

    return(
<Grid >
<TestBox>
            4
        </TestBox>
    <Grid  width="50px" height="100px" bg="skyblue">1</Grid>
    <Grid width="50px" height="100px" bg="violet">1</Grid>
    <Grid width="50px" height="100px" bg="pink">1</Grid>
        <OptionGrid></OptionGrid>
        <TestBox></TestBox>
        </Grid>
    );
}

const TestBox = styled.div`
width:50px;
height:50px;
border:1px solid blue;
background-color:red;
position:sticky;
top:0;
`;

const OptionGrid = styled.div`
  width:100%;
  height:98px;
  box-sizing:border-box;
  border-radius: 4px;
  border: 1px solid rgb(236, 236, 236);
  background-color: rgb(248, 248, 248);
  color: rgb(59, 59, 59);
  display:block;
`;

export default Test;