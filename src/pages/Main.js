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
    dispatch(prdActions.getPostDB());
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
