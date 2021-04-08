import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

//action type
const SET_POST = "SET_POST";
const LOADING= "LOADING";

const setPost = createAction(SET_POST, (post_list) => ({ post_list}));
const loading = createAction(LOADING, (is_loading)=>({is_loading}));

const initialState = {
    list: [],
    is_loading: false,
  };

  const initialPost = {
    option: [
        "매콤달콤 양념 치킨(2~3인분) 15,400원",
        "스리라차 크림 쉬림프 리조또(2~3인분) 18,800원",
        "2종 세트 [15% 할인] 29,000원",
        ],
        detail_image: [ ],
        _id: "606adb568f47d921e548366c",
        desc: [
        "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1493770348161-369560ae357d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb2R8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        ],
        goodsId: 1,
        prd_img: "https://danoshop.net/mall/upload/2021/03/22/ukx7m8boo5eby6nqllfx.png",
        prd_name: "다노X디디미니 밀키트 2종",
        prd_sum: "재료 손질 필요없이 근사한 한끼가 뚝딱!",
        detail_info: [
        [
        "용량,수량",
        "매콤달콤 양념치킨 615g / 스리라차 크림 쉬림프 리조또 861g",
        ],
        [
        "배송비 정책",
        "무료배송",
        ],
        [
        "보관방법",
        "냉장보관(0~10도)",
        ],
        [
        "유통기한",
        "매콤달콤 양념 치킨(2~3인분): {매콤달콤 양념 치킨: 제품 후면 표기일까지(제조일로부터 6일)} / 스리라차 크림 쉬림프 리조또(2~3인분): {스리라차 크림 쉬림프 리조또: 제품 후면 표기일까지(제조일로부터 6일)} / 2종 세트: {스리라차 크림 쉬림프 리조또: 제품 후면 표기일까지(제조일로부터 6일), 매콤달콤 양념 치킨: 제품 후면 표기일까지(제조일로부터 6일)}",
        ],
        [
        "식품유형",
        "간편조리세트(매콤달콤 양념치킨)/즉석조리식품(스리라차 크림 쉬림프 리조또)",
        ],
        [
        "생산지",
        "(주)프레시지 / 경기도 용인시 처인구 이동읍 삼배울로 23",
        ],
        [
        "제품원재료명",
        "상세페이지 참조",
        ],
        [
        "영양성분표시",
        "상세페이지 참조",
        ],
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

const getPostDB = () =>{
    return function (dispatch, getState, {history}){

        dispatch(loading(true));

        axios({
            method: "get",
            url:"http://13.125.249.241/api/items",
        }).then(res => {
            const post_list = res.data.result;
            dispatch(setPost(post_list));
        })
    }
}

const getOnePostDB = (id) => {
    return function (dispatch, getState, { history }) {

        dispatch(loading(true));

        axios({
            method: "get",
            url:`http://13.125.249.241/api/items/${id}`,
        }).then(res => {
            const post = res.data.result[0];
            console.log(post);
            dispatch(setPost([post]));
        })
    }};

export default handleActions(
    {
        [SET_POST]: (
            state,
            action //처리할 동작 명시
          ) =>
            produce(state, (draft) => {
              draft.list.push(...action.payload.post_list);
              draft.is_loading = false;
              }),
              [LOADING]: (state, action) => 
              produce(state, (draft) => {
                draft.is_loading = action.payload.is_loading;
              })
    },  initialState
    );
   
    

const actionCreators = {
    setPost,
    getPostDB,
    getOnePostDB
};

export { actionCreators };