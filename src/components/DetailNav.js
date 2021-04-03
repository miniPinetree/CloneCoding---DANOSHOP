import React from "react";
import styled from "styled-components";
import {Grid} from "../elements";

const DetailNav=(props)=>{
    const {seleted}= props;

    return(
        <React.Fragment>
         <Ul>
             <li><a>상품설명</a></li>
             <li><a>상세설명</a></li>
             <li><a>상품후기</a></li>
         </Ul>
         </React.Fragment>
    );
}
const Ul=styled.ul`
margin:30px 0 0 0;
padding:0;
list-style:none;
height:46px;
width:100%;
& li{
    /* display:inline-block; */
    float:left;
    width:33.3%;
    cursor: pointer;
   
}
& a{
    text-decoration:none;
    position: relative;
    
    height: 46px;
    line-height: 46px;
    text-align: center;
    display: block;
    color: rgb(64, 64, 64);
    font-size: 14px;
    border-top: 1px solid rgb(219, 219, 219);
    border-right: 1px solid rgb(219, 219, 219);
    border-bottom: 1px solid rgb(219, 219, 219);
    border-image: initial;
    border-left: 1px solid rgb(219, 219, 219);
    ${props=>props.seleted? `border-color: rgb(255, 111, 97);
    background-color: rgb(255, 111, 97);
    color: rgb(255, 255, 255);`:""}
}
`;
export default DetailNav;