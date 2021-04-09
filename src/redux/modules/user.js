import { createAction, handleAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { getCookie, setCookie, deleteCookie } from "../../shared/Cookie";
import axios from "axios";

//Action
const SET_USER = "SET_USER";
const GET_USER = "GET_USER";
const LOG_OUT = "LOG_OUT";

//initialState
const initialState = {
  user: null,
  is_login: false,
};
const user_initial = {
  nickname: "user1",
};

//Action Creator
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));

//middlewatr actions

//API통신을 통해 서버에 id,pwd를 제공하고 유저 정보와 토큰을 받아 저장
const loginDB = (id, password) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "post",
      url: "http://13.125.249.241/user/login",
      data: {
        email: id,
        password: password,
      },
    })
      .then((res) => {
        console.log(res);
        dispatch(
          setUser({
            email: res.data.email,
            nickname: res.data.nickname,
          })
        );
        const accessToken = res.data.token;

        //토큰을 헤더 디폴트 값으로 설정
        // axios.defaults.headers.common[
        //   "Authorization"
        // ] = `Bearer ${accessToken}`;

        //쿠키에 토큰 저장
        setCookie("is_login", `${accessToken}`);
        document.location.href = "/";
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
//회원가입 API
const signUpDB = (id, password, nickname) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "post",
      url: "http://13.125.249.241/user/signup",
      data: {
        email: id,
        password: password,
        nickname: nickname,
      },
    })
      .then((res) => {
        window.alert(res.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
//로그인 유지 API
//클라이언트 쿠키 저장소에 토큰이 존재하는 경우
//서버에서 토큰을 받아 유효성 검증 후 유효하다면 유저 정보를 주어 자동 로그인
const loginCheckDB = () => {
  return function (dispatch, getState, { history }) {
    const token = getCookie("is_login");
    console.log(token);
    axios({
      method: "post",
      url: "http://13.125.249.241/user/check",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res.data);
        dispatch(
          setUser({
            email: res.data.email,
            nickname: res.data.nickname,
          })
        );
      })
      .catch((error) => {
        console.log(error.code, error.message);
      });
  };
};

const logoutDB = () => {
  return function (dispatch, getState, { history }) {
    dispatch(logOut());
    history.replace("/");
    //replace는 push와 달리 뒤로가기해도 원래 페이지가 나오지 않음.
  };
};
//reducer
//produce (immer) 이용하여 불변성 유지
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie("is_login");
        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

//action creator export
const actionCreators = {
  logOut,
  getUser,
  loginDB,
  signUpDB,
  loginCheckDB,
  logoutDB,
};

export { actionCreators };
