import React, { Children } from "react";
import styled from "styled-components";

const Button = (props) => {
  const {
    border,
    bold,
    height,
    bg,
    color,
    text,
    _onClick,
    is_float,
    children,
    margin,
    width,
    padding,
  } = props;

  const styles = {
    border:border,
    bold: bold,
    margin: margin,
    width: width,
    padding: padding,
    bg: bg,
    color: color,
    height:height,
  };

  if (is_float) {
    return (
      <React.Fragment>
        <FloatButton {...styles} onClick={_onClick}>
          {text ? text : children}
        </FloatButton>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <ElButton {...styles} onClick={_onClick}>
        {text ? text : children}
      </ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  text: false,
  children: null,
  _onClick: () => {},
  is_float: false,
  margin: false,
  width: "49%",
  padding: "12px 0px",
  bg: "rgb(255, 111, 97)",
  color: "#ffffff",
  bold: false,
  height: "52px",
  border: "none",
};

const ElButton = styled.button`
  border:  ${(props) => props.border};
  border-radius: 4px;
  box-sizing: border-box;
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.bg};
  padding: ${(props) => props.padding};
  ${(props) => (props.bold ? `font-weight: 600;` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  cursor: pointer;
  overflow:visible;
`;

const FloatButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: #212121;
  color: #ffffff;
  padding: 16px;
  box-sizing: border-box;
  font-size: 36px;
  font-weight: 800;
  position: fixed;
  bottom: 50px;
  right: 16px;
  text-align: center;
  border: none;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffd600; ;
`;

export default Button;
