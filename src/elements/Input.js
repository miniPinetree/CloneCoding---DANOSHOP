import React from "react";

import { Text, Grid } from "./index";
import styled from "styled-components";

const Input = (props) => {
  const {label, width, height, placeholder, is_Submit,onSubmit, _onChange, type, value } = props;

  const styles={
    width:width,
    height:height,
  }
  return (
    <React.Fragment>
      <Grid is_flex margin="0 0 10px 0">
      {label && <Text margin="0px" bold>{label}</Text>}
        {is_Submit?
        <ElInput {...styles} onKeyPress={(e)=>{
            if(e.key === "Enter"){
                onSubmit(e);
            }
        }} type={type} value={value} placeholder={placeholder} onChange={_onChange} />:
        <ElInput {...styles} type={type} placeholder={placeholder} onChange={_onChange} />}
      </Grid>
    </React.Fragment>
  );
};

Input.defaultProps = {
  label:false,
  placeholder: "텍스트를 입력해주세요.",
  type: "text",
  _onChange: () => {},
  value: "",
  is_Submit:false,
  onSubmit:()=>{},
  height:"45px",
  width:"100%",
};

const ElInput = styled.input`
  border: 1px solid #e7e7e7;
  margin:0 0 0 0;
  padding: 0 15px;
  box-sizing: border-box;
  color: #2c2c2c;
  text-align:left;
  font-size:13px;
  height:${props=>props.height};
  width:${props=>props.width};
  font-family: Dotum, '\B3CB\C6C0', Helvetica, 'Apple SD Gothic Neo', sans-serif;
`;
export default Input;
