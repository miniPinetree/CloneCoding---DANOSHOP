import React from "react";
import styled from "styled-components";

const Grid=(props)=>{
    const { radius, is_flex, width, margin, padding, bg, children, center,_onClick } = props;

    const styles = {
        is_flex: is_flex,
        width: width,
        margin: margin,
        padding: padding,
        bg: bg,
        center:center,
        radius:radius,
    };
    return (
      <React.Fragment>
        <GridBox {...styles} onClick={_onClick}>{children}</GridBox>
      </React.Fragment>
    );
  };
  
  Grid.defaultProps = {
    chidren: null,
    is_flex: false,
    width: "100%",
    padding: false,
    margin: false,
    bg: false,
    _onClick:()=>{},
  };
  
  const GridBox = styled.div`
    width: ${(props) => props.width};
    height: ${(props) => props.width};
    box-sizing: border-box;
    ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
    ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
    ${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
    ${(props) => (props.radius ? `border-radius: ${props.radius};` : "")}
    ${(props) =>
      props.is_flex
        ? `display: flex; align-items: center; justify-content: space-between; `
        : ""}
        ${(props)=> props.center? `text-align: center;`:""};
  `;
  
export default Grid;