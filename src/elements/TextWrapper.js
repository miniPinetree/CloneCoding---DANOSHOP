import React from "react";
import styled from "styled-components";
import { Text, Grid, Image, Input } from "../elements";

const TextWrapper = (props) => {
  const {
    size,
    prd_name,
    prd_sum,
    promotionPer,
    originPrice,
    promotion_prd,
    new_prd,
    free_ship,
  } = props;

  const _price = props.price;
  const price = _price.slice(0, -1);

  const style = {
    size: size,
  };

  return (
    <React.Fragment>
      <Price {...style}>
        <Grid padding="30px 24px">
          <Text size="1.4em" bold margin="0 0 6px">
            {prd_name}
          </Text>
          <Text color="#A1A1A1" margin="8px 0px 24px">
            {prd_sum}
          </Text>
          {props.promotionPer ? (
            <React.Fragment>
              <Text margin="0 0 5px" size="1.25em" color="#FF6F61" bold>
                {promotionPer}
                <Line>{originPrice}</Line>
                <Unit>원</Unit>
              </Text>
            </React.Fragment>
          ) : null}

          <Text margin="0" size="1.85em" bold>
            {price}
            <span style={{ fontSize: "0.6em" }}>원</span>
          </Text>
        </Grid>
      </Price>
    </React.Fragment>
  );
};

TextWrapper.defaultProps = {
  size: "13px",
  prd_name: "다노 다노한끼 시즌4 저당 곤약 도시락(7팩/14팩)",
  prd_sum: "탄수화물을 낮춘 도시락",
  promotionPer: "10%",
  originPrice: "32,000",
  price: "28,800",
  promotion_prd: false,
  new_prd: false,
  free_ship: false,
};

const Price = styled.div`
  font-size: ${(props) => props.size};
  color: #3b3b3b;
  width: 100%;
  top: 0px;
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
export default TextWrapper;
