import React from "react";
import styled from "styled-components";
import { Text, Grid, Image, Input, Button } from "../elements";
import {useDispatch} from "react-redux";
import {actionCreators as userActions} from "../redux/modules/user";
import { emailCheck } from "../shared/common";

const SignUp = (props) => {
  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [pwd_check, setPwdCheck] = React.useState("");
  const [nickname, setNickName] = React.useState("");


  const signup = () => {


    console.log(id, pwd, nickname);

    if(id===""||pwd===""||nickname===""){
        window.alert("모든 정보를 입력해주세요.")
        return;
    }
    if(!emailCheck(id)){
        window.alert("이메일 형식이 맞지 않습니다.")
    }
     if(pwd !==pwd_check){
        window.alert("비밀번호가 일치하지 않습니다.")
        return;
      }
      
     dispatch(userActions.signUpDB(id, pwd, nickname));
  };
  return (
    <Align>
      <Grid>
        <Image
          margin="16px auto"
          width="85.64px"
          height="16px"
          src={
            "https://auth.dano.me/res/images/65309db7dcc5f8bdc78897f9943f0ea3.png"
          }
        />
        <Line />
      </Grid>
      <Grid width="380px" margin="50px auto">
        <Text size="21px" login_font bold margin="40px 0">
          회원가입
        </Text>
        <img width="100%" src="https://mxsorovxjmdc896281.cdn.ntruss.com/2020-12-28/cce11037d144c376dac8f1583f687522c0330426"/>
        <Ul>
          <li>
            <a>기본정보입력</a>
          </li>
        </Ul>
        <Grid margin="18px 0">
          <Input
            label="아이디"
            _onChange={(e) => {
              setId(e.target.value);
              
            }}
            width="260px"
            height="45px"
            placeholder="abc@email.com"
          />
          <Input
          type="password"
            label="비밀번호"
            _onChange={(e) => {
              setPwd(e.target.value);
             
            }}
            width="260px"
            height="45px"
            placeholder="영문,숫자,특수문자 4~16자 이내"
          />
          <Input
          type="password"
            label="비밀번호 확인"
            _onChange={(e) => {
              setPwdCheck(e.target.value);
              
            }}
            width="260px"
            height="45px"
            placeholder=""
          />

          <Input
            label="닉네임"
            _onChange={(e) => {
              setNickName(e.target.value);
            }}
            width="260px"
            height="45px"
            placeholder=""
          />
        </Grid>
        <Button margin="10px 0" width="100%" height="45px" bold="false"
        _onClick={signup}>
          회원가입
        </Button>
      </Grid>
    </Align>
  );
};

const Align = styled.div`
  text-align: center;
  justify-content: center;
  width: 460px;
  margin: 0 auto;
  font-family: Dotum, 돋움, Helvetica, "Apple SD Gothic Neo", sans-serif;
`;

const Line = styled.hr`
  border: solid 0.2px #ebebeb;
  align: center;
  width: 95%;
`;

const Ul = styled.ul`
  margin: 30px 0 0 0;
  padding: 0;
  list-style: none;
  height: 46px;
  width: 100%;

  & li {
    /* display:inline-block; */
    float: left;
    width: 100%;
    cursor: pointer;
  }
  & a {
    text-decoration: none;
    position: relative;

    height: 46px;
    line-height: 46px;
    text-align: left;
    display: block;
    color: rgb(64, 64, 64);
    font-size: 14px;
    border-bottom: 1px solid #000000;
    ${(props) =>
      props.seleted
        ? `border-color: rgb(255, 111, 97);
    color: rgb(255, 111, 97);`
        : ""}
  }
`;
const FindID = styled.span`
  font-size: 13px;
  color: #b0b0b0;
  text-decoration: underline;
`;
export default SignUp;
