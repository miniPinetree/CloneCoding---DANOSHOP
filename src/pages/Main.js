import React from "react";
import {Grid} from "../elements";
import Product from "../components/Product";
import SliderBanner from "../components/SliderBanner";

const Main =(props)=>{
    return(
        <React.Fragment>
             <Grid margin="50px 0" center>헤더</Grid>
           
           
            <Grid>
            <SliderBanner/>
            </Grid>
            <Grid is_flex height="260px" margin="10px">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            </Grid>
        
        </React.Fragment>
    );
}

export default Main;