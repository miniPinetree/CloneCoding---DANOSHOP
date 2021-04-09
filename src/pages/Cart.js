import React from "react";
import styled from "styled-components";
import { history } from "../redux/configStore";
import { Grid, Text, Image } from "../elements";

const Cart = (props) => {
  //로컬스토리지의 장바구니 정보 가공 가능한 데이터로 변환
  const cart_list = JSON.parse(localStorage.getItem("cart"));
  //장바구니에 든 상품들의 합계 금액 계산
  var sum = cart_list.map((a) => a.sum).reduce((a, b) => a + b);

  
  // 장바구니 내 수량 조절 기능
  // const [total, setTotal] = React.useState(sum);
  // const plusQuantity = (option) => {
  //   let price = Number(option.text.slice(-7, -1).split(",").join("").trim());
  //   setTotal(sum + price);
  //   option.num += 1;
  //   option.sum += price;
  // };
  // const minusQuantity = (option) => {
  //   if (sum > 0 && option.num > 1) {
  //     let price = Number(option.text.slice(-7, -1).split(",").join("").trim());
  //     setTotal(sum - price);
  //     option.num -= 1;
  //     option.sum -= price;
  //   }
  // };

  return (
    <Grid width="1140px" margin="0 auto">
      <Grid is_flex padding="0 16px" margin="64px 0 40px">
        <Text size="24px" bold>
          장바구니
        </Text>
        <Grid is_flex width="246.12">
          <Text size="14px" bold>
            01 장바구니>
          </Text>
          <Text size="14px" margin="0 0 0 5px">
            02 주문/결제>
          </Text>
          <Text size="14px" margin="0 0 0 5px">
            03 주문완료
          </Text>
        </Grid>
      </Grid>
      <Line />
      {cart_list ? (
        <React.Fragment>
          <Table>
            <tr>
              <th width="60%">상품정보</th>
              <th>수량</th>
              <th>주문금액</th>
            </tr>
            
            {cart_list.map((cart) => { //로컬스토리지에 저장된 장바구니 존재 시 렌더링
              return (
                <tr>
                  <td>
                    <Grid
                      is_flex
                      _onClick={() => {
                        history.push(`/detail/${cart.prd.goodsId}`);
                      }}
                    >
                      <Image
                        src={cart.prd.prd_img}
                        width="90px"
                        height="90px"
                        margin="20px 10px"
                      ></Image>
                      <Grid padding="20px 56px 20px 6px">
                        <Text bold>{cart.prd.prd_name}</Text>
                        <Text color="rgb(161, 161, 161)">옵션:{cart.text}</Text>
                      </Grid>
                    </Grid>
                  </td>
                  <td>
                    <Grid is_flex width="116px" center margin="0 auto">
                      {/* <Grid
          border="1px solid rgb(236, 236, 236)"
          width="28px"
          height="28px"
          bg="rgb(255, 255, 255)"
          _onClick={()=>{minusQuantity(cart)}}
        >
          -
        </Grid> */}
                      <Grid
                        border="1px solid rgb(236, 236, 236)"
                        width="50px"
                        height="28px"
                        bg="rgb(255, 255, 255)"
                        margin="0 auto"
                      >
                        {cart.num}
                      </Grid>
                      {/* <Grid
          border="1px solid rgb(236, 236, 236)"
          width="28px"
          height="28px"
          bg="rgb(255, 255, 255)"
          _onClick={()=>{plusQuantity(cart)}}
        >
          +
        </Grid> */}
                    </Grid>
                  </td>
                  <td>
                    <Grid center>
                      <Text margin="0 auto" size="14px">
                        {cart.sum.toLocaleString()}원
                      </Text>
                    </Grid>
                  </td>
                </tr>
              );
            })}
            {/* )} */}
          </Table>
          <Line />
          <Table>
            <tr>
              <th>총 상품 금액</th>
            </tr>
            <tr>
              <td>
                <Grid center>
                  <Text size="24px">
                    {sum.toLocaleString()}
                    <span styled={{ fontSize: "0.6em" }}>원</span>
                  </Text>
                </Grid>{" "}
              </td>
            </tr>
          </Table>
        </React.Fragment>
      ) : ( //로컬스토리지에 장바구니 정보가 없을 때
        <Grid padding="100px 0" center>
          <Text size="14px">장바구니에 담긴 상품이 없습니다.</Text>
        </Grid>
      )}

      <Line2 />
      <Grid width="360px" margin="45px auto" is_flex>
        <Btn
          onClick={() => {
            history.push("/");
          }}
        >
          추천상품 보러가기
        </Btn>
        <Btn
          onClick={() => {//로컬스토리지 정보를 삭제하고 새로고침
            localStorage.removeItem("cart");
            window.location.reload();
          }}
        >
          장바구니 비우기
        </Btn>
      </Grid>
    </Grid>
  );
};

const Line = styled.hr`
  border: solid 0.5px;
  align: center;
  width: 100%;
  margin: 0;
`;
const Line2 = styled.hr`
  border: solid 0.2px #ebebeb;
  align: center;
  width: 100%;
`;

const Btn = styled.button`
  border: 1px solid rgb(255, 111, 97);
  background-color: rgb(255, 255, 255);
  color: rgb(255, 111, 97);
  width: 170px;
  height: 45px;
  line-height: 47px;
  margin: auto;
  cursor: pointer;
  text-align: center;
  display: block;
`;

const Table = styled.table`
  border-spacing: 0;
  border: 0;
  border-collapse: collapse;
  width: 100%;
  height: 100%;
  margin-bottom: 20px;

  & th {
    background: rgb(248, 248, 248);
    margin: 0;
    padding: 0;
    height: 46px;
    vertical-align: middle;
    font-weight: bold;
  }
  & td {
    border: 1px solid rgb(236, 236, 236);
    :first-of-type {
      border-left: 0px !important;
    }
    :last-of-type {
      border-right: 0px !important;
    }
  }
`;
export default Cart;
