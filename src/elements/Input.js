import React from "react";

import { Text, Grid } from "./index";
import styled from "styled-components";

const Input = (props) => {
  const { placeholder, is_Submit,onSubmit, _onChange, type, multiline, value } = props;

  return (
    <React.Fragment>
      <Grid>
        {is_Submit?
        <ElInput onKeyPress={(e)=>{
            if(e.key === "Enter"){
                onSubmit(e);
            }
        }} type={type} value={value} placeholder={placeholder} onChange={_onChange} />:
        <ElInput type={type} placeholder={placeholder} onChange={_onChange} />}
      </Grid>
    </React.Fragment>
  );
};

Input.defaultProps = {
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
  padding: 0 15px;
  box-sizing: border-box;
  text-align:left;
  font-size:13px;
  height:${props=>props.height&&props.height};
  width:${props=>props.width&&props.width};
  font-family: Dotum, '\B3CB\C6C0', Helvetica, 'Apple SD Gothic Neo', sans-serif;
`;
export default Input;
