import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";

import reducers from "./reducers";
import history from "./history";

const historyMiddleware = routerMiddleware(history);
const middlewares = applyMiddleware(historyMiddleware, thunk);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(middlewares);

export default createStore(reducers, enhancers);
