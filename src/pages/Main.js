import React from "react";
import {Grid} from "../elements";
import styled from "styled-components";
import Product from "../components/Product";
import SliderBanner from "../components/SliderBanner";

const Main =(props)=>{
    return(
        <React.Fragment>
            <Align>
             <Grid margin="50px 0" center>헤더</Grid>
            <Grid>
            <SliderBanner/>
            </Grid>
            <Grid is_flex width="80%" margin="0 auto" padding="0 40px">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            </Grid>
            </Align>
        
        </React.Fragment>
    );
}

const Align = styled.div`
justify-content:center;
align-items:center;

`;

export default Main;