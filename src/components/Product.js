import React from "react";
import styled from "styled-components";
import {Text, Grid, Image, TextWrapper} from "../elements";

const Product =(props)=>{

    const _price = props.price;
    const price = _price.slice(0,-1)
   
    return(
        <React.Fragment>
            <Grid>
            <Image src={props.prd_img} width="275px" height="190px" margin="5px"/>
            <Grid center height="97px">
                <div style={{overflow:"hidden", width:"165px", margin:"auto"}}>
            <ListName>{props.prd_name}</ListName>
            </div>
            <Grid is_flex width="50%" margin="0 auto" center>
            {props.originPrice?  <Text size="13px" color="#FF6F61" bold margin="0">{props.promotionPer}
            <Line>{props.originPrice}</Line><Unit>원</Unit></Text>:null}
            <Text margin="0" size="1.05em" bold margin="4px auto">{price}<span style={{fontSize:"0.6em"}}>원</span></Text>
            </Grid>
            </Grid>
            </Grid>
        </React.Fragment>
    );
}

Product.defaultProps={
  prd_img: "https://danoshop.net/mall/upload/2020/03/11/dumpling_716x478.jpg",
  prd_name: "다노 닭가슴살 곤약만두 3종 (오리지널/청양고추/불닭) 10팩",
  prd_sum: "쫄깃한 만두피 속 닭가슴살, 곤약이 가득",
  promotionPer:"10%",
  originPrice: "30,000",
  price: "26,900",
  promotion: true,
  new: false,
  free_ship: true,
  ship_info:"무료배송",
  
    
}
const ListName = styled.p`
font-weight:bold;
font-size:13px;
color:#4E4E4E;
margin:15px 0 0 0;
height:15px;
box-sizing:border-box;
overflow:hidden;
white-space:nowrap;
width:165px;

`;

const Line = styled.span`
padding-left:2px;
text-decoration:line-through;
font-size:0.95em;
color:#A1A1A1;
font-weight:500;
`;

const Unit = styled.span`
font-size:0.7em;
font-weight:400;
color:#A1A1A1;
`;

const PrdList = styled.ul`
padding:0;
margin:0;
display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    & li{
        margin: 0;
    padding: 0;
    display: list-item;
    text-align: -webkit-match-parent;
    }
`;

export default Product;