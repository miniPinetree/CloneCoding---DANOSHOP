import React from "react";
import styled from "styled-components";

const Image = (props)=>{
    const { src, width, height } = props;

    const styles ={
        src: src,
        width:width,
        height:height,
    }
    return (
        <React.Fragment>
            <ImageDefault {...styles}></ImageDefault>
        </React.Fragment>
       );
    
}

Image.defaultProps = {
    src: "https://danoshop.net/mall/upload/2020/12/15/hover_season4.png",
    height: "300px",
    width: "100%",
    };

    const ImageDefault = styled.div`
    top:0;
    width: ${(props)=>props.width};
    height: ${(props)=>props.height};
    background-image: url("${(props)=>props.src}");
    background-size:cover;
    background-position:center;
    box-sizing:border-box;
    `;

export default Image;