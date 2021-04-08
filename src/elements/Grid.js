import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const {
    right,
    left,
    max_width,
    max_height,
    radius,
    is_flex,
    width,
    margin,
    padding,
    bg,
    children,
    center,
    _onClick,
    border_top,
    border_left,
    border_right,
    border_bottom,
    height,
    wrap,
    border,
  } = props;

  const styles = {
    is_flex: is_flex,
    width: width,
    wrap: wrap,
    height: height,
    margin: margin,
    padding: padding,
    bg: bg,
    center: center,
    right: right,
    left: left,
    radius: radius,
    max_width: max_width,
    max_height: max_height,
    border_top: border_top,
    border_left: border_left,
    border_right: border_right,
    border_bottom: border_bottom,
    border: border,
  };
  return (
    <React.Fragment>
      <GridBox {...styles} onClick={_onClick}>
        {children}
      </GridBox>
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
  _onClick: () => {},
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  box-sizing: border-box;
  ${(props) => (props.max_width ? `max-width: ${props.max_width};` : "")}
  ${(props) => (props.max_height ? `max-height: ${props.max_height};` : "")}
    ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
    ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
    ${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
    ${(props) => (props.radius ? `border-radius: ${props.radius};` : "")}
    ${(props) =>
    props.is_flex
      ? `display: flex; align-items: center; justify-content: space-between; `
      : ""}
        ${(props) =>
    props.center
      ? `text-align: center;`
      : props.right
      ? `text-align: right;`
      : ""};
  ${(props) => (props.wrap ? `flex-wrap:wrap;` : "")}
  ${(props) => (props.border ? `border:${props.border}` : "")}
  ${(props) => (props.border_top ? `border-top:${props.border_top}` : "")}
  ${(props) => (props.border_left ? `border-left:${props.border_left}` : "")}
      ${(props) =>
    props.border_right ? `border-right:${props.border_right}` : ""}
      ${(props) =>
    props.border_bottom ? `border-bottom:${props.border_bottom}` : ""}
`;

export default Grid;
