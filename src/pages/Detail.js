import React, {useEffect} from "react";
import styled from "styled-components";
import { Text, Grid, Image, TextWrapper, Button } from "../elements";
import DetailNav from "../components/DetailNav";
import Header from "../components/Header";
import axios from "axios";

const Detail = (props) => {
  const prd_list = useSelector((state)=>state.prd.list);

      return (
    <React.Fragment>
        
      <Grid padding="60px 0 0 0" max_width="950px" margin="0 auto">
        <div style={{ alignItems: "flex-start", display: "flex" }}>
          <Image
            height="406px"
            src={p.prd_img}
          />
          <Grid>
            <Grid is_flex>
              <TextWrapper {...p}/>
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
                  {p.free_ship? "무료배송":`${p.detail_info[1][1].slice(0,6)}`} <br />
                  지금 주문하면 <H>{p.ship_info}</H> 출고 예정 <br /> 제주 및
                  도서/산간 지역 <H>1~2일 추가 소요</H>
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
            <Grid padding="32px 16px">
              <Select>
                <option>[필수] 옵션을 선택해 주세요 </option>
                <option disabled=""> ------------------ </option>
                {p.options.map((opt,idx)=>{
                    return(
<option value="{opt}">
                {opt}
                </option>
                    );
                })}
              </Select>
            </Grid>
            <Grid padding="16px" right>
              <Text size="0.8em">
                합계<H style={{ fontSize: "22px", margin: "0 0 0 8px" }}>0원</H>
              </Text>
            </Grid>
            <Grid is_flex padding="32px 16px">
              <Button bold
                color="rgb(255, 111, 97)"
                bg="rgb(255, 240, 239)"
                text="장바구니 담기"
              />
              <Button bold text="바로 구매하기" />
            </Grid>
          </Grid>
        </div>
        <DetailNav />

        <ImgBox>
        <img src={p.desc[1]} width="100%"/>
 {p.desc.map((i,idx)=>{
           <img key={idx} src={i} width="100%"/>
       })}

</ImgBox>
      </Grid>
    
    </React.Fragment>
      )
};
Detail.defaultProps = {
    prd_list:[{
        prd_img: "https://danoshop.net/mall/upload/2020/03/11/dumpling_716x478.jpg",
  prd_name: "다노 닭가슴살 곤약만두 3종 (오리지널/청양고추/불닭) 10팩",
  prd_sum: "쫄깃한 만두피 속 닭가슴살, 곤약이 가득",
  promotionPer:"10%",
  originPrice: "30,000",
  price: "26,900",
  promotion: false,
  new: false,
  free_ship: true,
  ship_info:"무료배송",
  options:[
      "곤약만두 오리지널 10팩 26,900원",
      "곤약만두 오리지널5팩+청양고추5팩 26,900",
      "곤약만두 오리지날5팩+청양고추5팩+불닭5팩 40,250원",
  ],
  desc: [
    "https://danoshop.net/mall/upload/2020/03/11/01_1_dumpling-1.png",
    "https://danoshop.net/mall/upload/2020/03/11/02_dumpling_DN9g2u7.png",
    "https://danoshop.net/mall/upload/2020/03/11/full_dumpling_nosale02.png",
  ],
  detail_info: [
    { "용량,수량": "다노 닭가슴살 곤약만두(168g) 10팩" },
    { "배송비 정책": "무료배송(CJ대한통운)" },
    {
      "유통기한":
        "곤약만두 오리지널 10팩: 2021-11-02 / 곤약만두 청양고추 10팩: 2021-09-17 / 곤약만두 오리지널5팩+청양고추5팩: 제품 별도 표기일까지 / 곤약만두 불닭 10팩: 2021-10-19 / 곤약만두 오리지널5팩+불닭5팩: 제품 별도 표기일까지 / 곤약만두 불닭5팩+청양고추5팩: 제품 별도 표기일까지 / 곤약만두 오리지날5팩+청양고추5팩+불닭5팩: 제품 별도 표기일까지",
    },
  ],
    },]
  
};

const ImgBox=styled.div`
margin:100px auto 30px auto;
width:57%;
align-items:center;

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

export default Detail;
