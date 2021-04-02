import React from "react";
import styled from "styled-components";

const Text=(props)=>{
    const { center, children, bold, color,size, margin} = props;

    const styles = {center:center, bold:bold, color:color, size:size, margin:margin};
    return(
<P {...styles}>{children}</P>
    );
}

Text.defaultProps = {
    children : null,
    bold: false,
    color: "#000000",
    size: "14px",
    margin:false,
    center:false,
    };


const P = styled.p`
color:${(props)=>props.color};
font-size:${(props)=>props.size};
font-weight:${(props)=>(props.bold? "600":"400")};
${(props)=>props.margin? `margin:${props.margin}`:""}
${(props)=>props.center? `text-align:`:""};
font-family: Dotum, 돋움, Helvetica, "Apple SD Gothic Neo", sans-serif;
`;

export default Text;