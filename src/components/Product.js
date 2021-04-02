import React from "react";
import styled from "styled-components";
import {Text, Grid, Image} from "../elements";

const Product =(props)=>{
    return(
        <Grid width="275px" height="260px" margin="0 5px">
            <Image width="275px" height="190px"/>  
            <Grid center >
            <Text size="14px" color="#4E4E4E">다노한끼 시즌4 곤약도시락</Text>
            <Text size="13px" color="#FF6F61">10%</Text>
            </Grid>
        </Grid>
    );
}

export default Product;