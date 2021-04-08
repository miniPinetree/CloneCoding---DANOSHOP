import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

import User from "./modules/user";
import Prd from "./modules/prd";
export const history = createBrowserHistory();

const rootReducer = combineReducers({
  user: User,
  prd:Prd,
  router:connectRouter(history),
});

const middlewares = [thunk.withExtraArgument({history:history})];

const env = process.env.NODE_ENV;

//개발환경에서 logger 사용
if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}
//devTools 설정
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

//미들웨어 통합
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

//루트 리듀서와 미들웨어를 엮어 스토어 생성
let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();
