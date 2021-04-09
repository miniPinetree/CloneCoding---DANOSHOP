import React from "react";
import styled from "styled-components";
import { Text, Grid, Image, TextWrapper } from "../elements";
import {history} from "../redux/configStore";

//메인화면에서 상품 정보를 전달받아 제품 정보를 렌더링
const Product = (props) => {
  const _price = props.price;
  const price = _price.slice(0, -1);

  return (
    <React.Fragment>
      {props.idx < 4 ? ( //메인화면 배너 하단 상품 4개는 다른 레이아웃으로 표시
        <Grid
          width="275px"
          height="260px"
          _onClick={() => {
            document.location.href=`/detail/${props.goodsId}`;
          }}
        >
          <Image
            src={props.prd_img}
            width="275px"
            height="190px"
            margin="5px"
          />
          <Grid center height="97px">
            <div style={{ overflow: "hidden", width: "165px", margin: "auto" }}>
              <ListName>{props.prd_name}</ListName>
            </div>
            <Grid is_flex width="50%" margin="0 auto" center>
              {props.originPrice ? (
                <Text size="13px" color="#FF6F61" bold margin="0">
                  {props.promotionPer}
                  <Line>{props.originPrice}</Line>
                  <Unit>원</Unit>
                </Text>
              ) : null}
              <Text margin="0" size="1.05em" bold margin="4px auto">
                {price}
                <span style={{ fontSize: "0.6em" }}>원</span>
              </Text>
            </Grid>
          </Grid>
        </Grid>
      ) : ( //그 외 제품은 아래 레이아웃으로 통일
        <Grid
          width="274px"
          height="465px"
          margin="10px 5px 50px 0"
          bg="#f9fafa"
          _onClick={() => {
            document.location.href=`/detail/${props.goodsId}`;
          }}
        >
          <Image src={props.prd_img} width="100%" height="300px" />
          <Grid height="97px" padding="0 5%">
            <div
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                width: "272px",
              }}
            >
              <Text color="#A1A1A1" margin="14px 0px 0px" size="13px">
                {props.prd_sum}
              </Text>
              <ListName2>{props.prd_name}</ListName2>
            </div>
            <Grid margin="14px 0 0 0">
              {props.originPrice ? (
                <Text size="13px" color="#FF6F61" bold margin="0">
                  {props.promotionPer}
                  <Line>{props.originPrice}</Line>
                  <Unit>원</Unit>
                </Text>
              ) : null}
              <Text margin="0" size="1.25em" bold>
                {price}
                <span style={{ fontSize: "0.6em" }}>원</span>
              </Text>
            </Grid>
          </Grid>
        </Grid>
      )}
    </React.Fragment>
  );
};

Product.defaultProps = {
  prd_img: "https://danoshop.net/mall/upload/2020/03/11/dumpling_716x478.jpg",
  prd_name: "다노 닭가슴살 곤약만두 3종 (오리지널/청양고추/불닭) 10팩",
  prd_sum: "쫄깃한 만두피 속 닭가슴살, 곤약이 가득",
  promotionPer: "10%",
  originPrice: "30,000",
  price: "26,900",
  promotion: true,
  new: false,
  free_ship: true,
  ship_info: "무료배송",
};
const ListName = styled.p`
  font-weight: bold;
  font-size: 13px;
  color: #4e4e4e;
  margin: 15px 0 0 0;
  height: 15px;
  box-sizing: border-box;
  overflow: hidden;
  white-space: nowrap;
  width: 165px;
`;

const ListName2 = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: #4e4e4e;
  margin: 3px 0 0 0;
  height: 20px;
  box-sizing: border-box;
  overflow: hidden;
  white-space: nowrap;
  width: 274px;
`;

const Line = styled.span`
  padding-left: 2px;
  text-decoration: line-through;
  font-size: 0.95em;
  color: #a1a1a1;
  font-weight: 500;
`;

const Unit = styled.span`
  font-size: 0.7em;
  font-weight: 400;
  color: #a1a1a1;
`;

const PrdList = styled.ul`
  padding: 0;
  margin: 0;
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  & li {
    margin: 0;
    padding: 0;
    display: list-item;
    text-align: -webkit-match-parent;
  }
`;

export default Product;
