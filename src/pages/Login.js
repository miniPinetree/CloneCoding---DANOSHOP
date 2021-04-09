import React from "react";
import styled from "styled-components";
import { Text, Grid, Image, Input, Button } from "../elements";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { emailCheck } from "../shared/common";
import { history } from "../redux/configStore";

const Login = (props) => {
  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  const login = () => {
//입력 값 정합성 체크 후 login API 요청
    if (id === "" || pwd === "") {
      window.alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }
    if (!emailCheck(id)) {
      window.alert("이메일 형식이 맞지 않습니다.");
    }
    dispatch(userActions.loginDB(id, pwd));
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
        <Text size="21px" login_font bold>
          로그인
        </Text>
        <Ul>
          <li>
            <a>통합ID 로그인</a>
          </li>
          <li>
            <a>기존ID 로그인</a>
          </li>
        </Ul>
        <Grid margin="18px 0">
          <Input
            _onChange={(e) => {
              setId(e.target.value);
            }}
            width="380px"
            height="45px"
            placeholder="아이디"
          />
          <Input
            _onChange={(e) => {
              setPwd(e.target.value);
            }}
            width="380px"
            height="45px"
            placeholder="비밀번호"
            type="password"
          />
        </Grid>
        <Grid right margin="-10px 0 15px">
          <FindID>아이디/비밀번호 찾기 ></FindID>
        </Grid>
        <Button
          _onClick={login}
          margin="0 0 10px"
          width="100%"
          height="45px"
          bg="#fbfbfb"
          color="#ff6f61"
          border="1px solid #e7e7e7"
        >
          로그인
        </Button>
        <Button
          width="100%"
          height="45px"
          bold="false"
          _onClick={(e) => {
            history.push("/signup");
          }}
        >
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
    width: 50%;
    cursor: pointer;
  }
  & a {
    text-decoration: none;
    position: relative;

    height: 46px;
    line-height: 46px;
    text-align: center;
    display: block;
    color: rgb(64, 64, 64);
    font-size: 14px;
    border-bottom: 1px solid rgb(219, 219, 219);
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
export default Login;
