import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as prdActions } from "../redux/modules/prd";
import { Text, Grid, Image, TextWrapper, Button } from "../elements";
import DetailNav from "../components/DetailNav";
import swal from "sweetalert";
import { history } from "../redux/configStore";

//상품 디테일 페이지에서 옵션을 선택하여 장바구니에 담을 수 있음
const Detail = (props) => {
  const id = props.match.params.id;
  const dispatch = useDispatch();
  const prd_list = useSelector((state) => state.prd.list);
  const prd_idx = prd_list.findIndex((p) => p.goodsId == id);
  const prd = prd_list[prd_idx];

//새로고침 등으로 리덕스 데이터가 존재하지 않는 경우
//DB에 해당 상품 정보 요청
  React.useEffect(() => {
    if (prd) {
      return;
    }
    dispatch(prdActions.getOnePostDB(id));
  }, []);
  const [options, setOption] = React.useState([]);
  const [sum, setSum] = React.useState(0);

  //상품 옵션을 선택하면 화면에 elements 추가 렌더링
  const selectOption = (e) => {
    const _options = options.filter((o, idx) => {
      if (o !== e.target.value) {
        return o;
      }
    });
    let price = Number(e.target.value.slice(-7, -1).split(",").join("").trim());
    setOption([
      ..._options,
      { text: e.target.value, num: 1, prd: prd, sum: price },
    ]);
    setSum(sum + price);
  };
  //옵션 삭제
  const deleteOption = (target) => {
    const _options = options.filter((option, idx) => {
      if (option.text !== target.text) {
        return option;
      }
      setSum(
        sum -
          Number(target.text.slice(-7, -1).split(",").join("").trim()) *
            option.num
      );
    });
    setOption(_options);
  };
  //선택한 옵션의 수량 변경 시 수량 및 가격 반영
  const plusQuantity = (option) => {
    let price = Number(option.text.slice(-7, -1).split(",").join("").trim());
    setSum(sum + price);
    option.num += 1;
    option.sum += price;
  };
  const minusQuantity = (option) => {
    if (sum > 0 && option.num > 1) {
      let price = Number(option.text.slice(-7, -1).split(",").join("").trim());
      setSum(sum - price);
      option.num -= 1;
      option.sum -= price;
    }
  };
  //장바구니 담기 시 로컬 스토리지에 정보를 저장
  const setLocalStorage = () => {
    const _cart = localStorage.getItem("cart");
    if (_cart) {
      const parseCart = JSON.parse(_cart);
      localStorage.setItem("cart", JSON.stringify([...parseCart, ...options]));
    } else {
      localStorage.setItem("cart", JSON.stringify(options));
    }
    //저장 여부를 알리고 페이지 이동 의사를 묻는 알림창
    swal({
      title: "장바구니에 잘 담겼어요!",
      icon: "success",
      buttons: {
        showCart: { text: "장바구니 이동", value: "showCart" },
        cancel: "쇼핑 계속하기",
      },
    }).then((value) => {
      switch (value) {
        case "showCart":
          history.push("/cart");
          break;
      }
    });
  };
  return (
    <React.Fragment>
      {prd && ( //상품정보 존재 시 화면 렌더링
        <Grid padding="60px 0 0 0" max_width="950px" margin="0 auto">
          <div style={{ alignItems: "flex-start", display: "flex" }}>
            <Image height="406px" src={prd.prd_img} />
            <Grid>
              <Grid is_flex>
                <TextWrapper {...prd} />
                <Grid width="auto" style={{ bottom: "0" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="16"
                    viewBox="0 0 20 16"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <g stroke="#3B3B3B" stroke-width="1.2">
                        <path
                          d="M14.727 10.384L14.727 14.727 0 14.727 0 3.273 5.54 3.273"
                          transform="translate(-1272 -368) translate(1273 368)"
                        ></path>
                        <path
                          d="M16.364 1.636L16.364 6.545 11.455 6.545"
                          transform="translate(-1272 -368) translate(1273 368) scale(1 -1) rotate(-45 4.033 0)"
                        ></path>
                        <path
                          d="M16.926 4.09c-4.88-.835-8.34 1.075-10.38 5.728"
                          transform="translate(-1272 -368) translate(1273 368)"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </Grid>
              </Grid>

              <Line />
              <Grid is_flex padding="6px 16px">
                <Grid width="auto">
                  <Text size="13px" margin="0" bold width="auto">
                    최대혜택
                  </Text>
                </Grid>
                <Grid width="82%" padding="0 0 0 15px">
                  <Text size="13px" bold margin="0">
                    <H>로그인</H> 시 적립 혜택 제공
                  </Text>
                </Grid>
                <div style={{ bottom: "0" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="none"
                      fill-rule="evenodd"
                      stroke="#A1A1A1"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.045 3.955L10.136 8.052 6.045 12.136"
                      transform="rotate(90 7.91 8.045)"
                    ></path>
                  </svg>
                </div>
              </Grid>

              <Line />
              <Grid is_flex padding="6px 16px">
                <Grid width="auto">
                  <Text size="13px" margin="0" bold width="auto">
                    배송정보
                  </Text>
                </Grid>
                <Grid width="82%" padding="0 0 0 15px">
                  <Text size="13px" bold margin="0">
                    {prd.free_ship ? "무료배송" : `${prd.ship}`} <br />
                    <H>{prd.ship_info}</H>
                    <br /> 제주 및 도서/산간 지역 <H>1~2일 추가 소요</H>
                  </Text>
                </Grid>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="none"
                    fill-rule="evenodd"
                    stroke="#A1A1A1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.045 3.955L10.136 8.052 6.045 12.136"
                    transform="rotate(90 7.91 8.045)"
                  ></path>
                </svg>
              </Grid>
              <Grid padding="32px 16px 16px 10px">
                <Select onChange={selectOption}>
                  <option>[필수] 옵션을 선택해 주세요 </option>
                  <option disabled="true"> ------------------ </option>
                  {prd.option.map((opt, idx) => {
                    return (
                      <option value={opt} key={prd._id + idx}>
                        {opt}
                      </option>
                    );
                  })}
                </Select>
              </Grid>

              {options && //선택한 옵션이 존재할 때 화면 렌더링
                options.map((option, idx) => {
                  return (
                    <Grid padding="16px" key={idx}>
                      <Grid
                        bg="rgb(248, 248, 248)"
                        height="98px"
                        padding="16px"
                      >
                        <Grid is_flex padding="0 0 14px 0">
                          <Text margin="0" size="13px">
                            {option.text.includes("[") ? (
                              <H>[{option.text.split("[")[1].split("]")[0]}]</H>
                            ) : null}
                            {option.text.split("[")[0].split("(")[0]}
                          </Text>
                          <svg
                            onClick={() => {
                              deleteOption(option);
                            }}
                            class="css-1jd8bf1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                          >
                            <g
                              fill="none"
                              fill-rule="evenodd"
                              stroke="#C4C4C4"
                              stroke-linecap="square"
                            >
                              <path
                                d="M0 0L10.5 10.5"
                                transform="translate(.75 .75)"
                              ></path>
                              <path
                                d="M0 0L10.5 10.5"
                                transform="translate(.75 .75) matrix(-1 0 0 1 10.5 0)"
                              ></path>
                            </g>
                          </svg>
                        </Grid>
                        <Grid height="28px" is_flex center>
                          <Grid is_flex width="116px">
                            <Grid
                              _onClick={() => {
                                minusQuantity(option);
                              }}
                              width="28px"
                              height="28px"
                              bg="rgb(255, 255, 255)"
                            >
                              -
                            </Grid>
                            <Grid
                              width="50px"
                              height="28px"
                              bg="rgb(255, 255, 255)"
                              margin="0 5px"
                            >
                              {option.num ? option.num : 1}
                            </Grid>
                            <Grid
                              _onClick={() => {
                                plusQuantity(option);
                              }}
                              width="28px"
                              height="28px"
                              bg="rgb(255, 255, 255)"
                            >
                              +
                            </Grid>
                          </Grid>
                          <Text margin="0" size="14px">
                            {Number(
                              option.text
                                .slice(-7, -1)
                                .split(",")
                                .join("")
                                .trim()
                            ) * option.num}
                          </Text>
                        </Grid>
                      </Grid>
                    </Grid>
                  );
                })}

              <Grid padding="16px" right>
                <Text size="0.8em" margin="0">
                  합계
                  <H style={{ fontSize: "22px", margin: "0 0 0 8px" }}>
                    {sum.toLocaleString()}원
                  </H>
                </Text>
              </Grid>
              <Grid is_flex padding="16px 16px">
                <Button
                  bold
                  color="rgb(255, 111, 97)"
                  bg="rgb(255, 240, 239)"
                  text="장바구니 담기"
                  _onClick={setLocalStorage}
                />
                <Button bold text="바로 구매하기" />
              </Grid>
            </Grid>
          </div>
          <DetailNav />

          <ImgBox>
            {prd.desc.map((img, idx) => {
              return <img key={idx + prd._id} src={img} width="100%" />;
            })}
          </ImgBox>
        </Grid>
      )}
    </React.Fragment>
  );
};
//주어진 props가 없을 때 보여지는 기본 값
Detail.defaultProps = {
  option: [
    "매콤달콤 양념 치킨(2~3인분) 15,400원",
    "스리라차 크림 쉬림프 리조또(2~3인분) 18,800원",
    "2종 세트 [15% 할인] 29,000원",
  ],
  detail_image: [],
  _id: "606adb568f47d921e548366c",
  desc: [
    "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1493770348161-369560ae357d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb2R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  ],
  goodsId: 1,
  prd_img:
    "https://danoshop.net/mall/upload/2021/03/22/ukx7m8boo5eby6nqllfx.png",
  prd_name: "다노X디디미니 밀키트 2종",
  prd_sum: "재료 손질 필요없이 근사한 한끼가 뚝딱!",
  detail_info: [
    ["용량,수량", "매콤달콤 양념치킨 615g / 스리라차 크림 쉬림프 리조또 861g"],
    ["배송비 정책", "무료배송"],
    ["보관방법", "냉장보관(0~10도)"],
    [
      "유통기한",
      "매콤달콤 양념 치킨(2~3인분): {매콤달콤 양념 치킨: 제품 후면 표기일까지(제조일로부터 6일)} / 스리라차 크림 쉬림프 리조또(2~3인분): {스리라차 크림 쉬림프 리조또: 제품 후면 표기일까지(제조일로부터 6일)} / 2종 세트: {스리라차 크림 쉬림프 리조또: 제품 후면 표기일까지(제조일로부터 6일), 매콤달콤 양념 치킨: 제품 후면 표기일까지(제조일로부터 6일)}",
    ],
    [
      "식품유형",
      "간편조리세트(매콤달콤 양념치킨)/즉석조리식품(스리라차 크림 쉬림프 리조또)",
    ],
    ["생산지", "(주)프레시지 / 경기도 용인시 처인구 이동읍 삼배울로 23"],
    ["제품원재료명", "상세페이지 참조"],
    ["영양성분표시", "상세페이지 참조"],
  ],
  originPrice: "",
  price: "15,400원",
  promotionPer: "",
  promotion: false,
  free_ship: true,
  ship_info: "지금 주문하면 4월 7일(수) 출고예정입니다.",
  ship: "무료배송",
  new: true,
  __v: 0,
};

const ImgBox = styled.div`
  margin: 100px auto 30px auto;
  width: 57%;
  align-items: center;
`;
const Line = styled.hr`
  border: solid 0.2px #ebebeb;
  align: center;
  width: 92%;
`;

const H = styled.span`
  color: #ff6f61;
  font-weight: 800;
`;
const Select = styled.select`
  appearance: none;
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  width: 100%;
  height: 40px;
  border: 1px solid rgb(236, 236, 236);
  color: rgb(196, 196, 196);
  padding-left: 12px;
  border-radius: 4px;
  font-size: 14px;

  background-image: url(
    data:image/svg + xml,
    %3Csvgxmlns="http://www.w3.org/2000/svg"width="12"height="6"viewBox="0 0 12 6"style="background:%23fff"%3E%3Cgfill="none"fill-rule="evenodd"transform="translate(-186 -365)"%3E%3Cpathfill="%23FFF"d="M0 0H375V2362H0z"/%3E%3Crectwidth="93"height="39"x="115.5"y="348.5"fill="%23FFF"stroke="%23ECECEC"rx="4"/%3E%3Cpathfill="%233B3B3B"fill-rule="nonzero"d="M196.145 365.15c.193-.197.509-.2.705-.007.197.193.2.51.007.707l-4.892 5c-.193.197-.508.2-.705.008l-5.11-5c-.197-.193-.2-.51-.008-.707.192-.198.508-.202.705-.009l4.754 4.652 4.544-4.644z"/%3E%3C/g%3E%3C/svg%3E
  );
  background-position-x: calc(100% - 12px);
`;
const OptionGrid = styled.div`
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid rgb(236, 236, 236);
  background-color: rgb(248, 248, 248);
  color: rgb(59, 59, 59);
`;
export default Detail;
