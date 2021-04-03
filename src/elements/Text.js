import React from "react";
import styled from "styled-components";

const Text=(props)=>{
    const { login_font, center, children, bold, color,size, margin} = props;

    const styles = {login_font:login_font, center:center, bold:bold, color:color, size:size, margin:margin};
    return(
<P {...styles}>{children}</P>
    );
}

Text.defaultProps = {
    children : null,
    bold: false,
    size: "1em",
    margin:false,
    center:false,
    };


const P = styled.p`
${(props)=>props.color? `color:${props.color}`:""};
font-size:${(props)=>props.size};
font-weight:${(props)=>(props.bold? "600":"400")};
${(props)=>props.margin? `margin:${props.margin}`:""}
${(props)=>props.center? `text-align:`:""};
font-family: ${(props)=>props.login_font? 
`Dotum, 돋움, Helvetica, "Apple SD Gothic Neo", sans-serif;`:
`"Noto Sans KR", sans-serif;`}
`;

export default Text;