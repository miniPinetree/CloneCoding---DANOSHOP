import React from "react";
import { Grid, Text } from "../elements";
import styled from "styled-components";
import Product from "../components/Product";
import SliderBanner from "../components/SliderBanner";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as prdActions } from "../redux/modules/prd";
import {actionCreators as userActions} from "../redux/modules/user";
import { getCookie } from "../shared/Cookie";

const Main = (props) => {
  const dispatch = useDispatch();
  const prd_list = useSelector((state) => state.prd.list);


 
  React.useEffect(() => {
      //메인페이지는 상품 리스트를 DB에서 받아와 리덕스에 저장한 뒤 화면에 표시
    dispatch(prdActions.getPostDB());
     //쿠키에 저장된 액세스 토큰이 존재한다면 서버에 요청을 보내 유저 정보를 받음
    if(getCookie("is_login")){
      dispatch(userActions.loginCheckDB());
    }
    
  }, []);
  
  return (
    <React.Fragment>
      <Align>
        <Grid height="400px">
          <SliderBanner/>
        </Grid>
        <Grid margin="25px 0 0 0">
          <Grid width="1140px" margin="auto" is_flex wrap>
            {prd_list.map((p, idx) => {
              if (idx !== 4) {
                return <Product {...p} key={p._id} idx={idx} />;
              } else {
                return (
                  <React.Fragment>
                    <Grid margin="10px 0" width="100%">
                        <Text bold size="25px" margin="20px 0 3px 0">
                      전체 보기
                    </Text>
                    <hr color="#F3F3F3"/>
                    </Grid>
                    <Product {...p} key={p._id} idx={idx} />
                  </React.Fragment>
                );
              }
            })}
          </Grid>
        </Grid>
      </Align>
    </React.Fragment>
  );
};

const Align = styled.div`
  justify-content: center;
  align-items: center;
`;

export default Main;
