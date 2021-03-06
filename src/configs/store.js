import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";

import loadLocalStorageState from "utilities/loadLocalStorageState";
import reducers from "./reducers";
import history from "./history";
import localStorageMiddleware from "./localStorageMiddleware";

const historyMiddleware = routerMiddleware(history);
const middlewares = applyMiddleware(
  historyMiddleware,
  thunk,
  localStorageMiddleware
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(middlewares);

const preloadedState = loadLocalStorageState();

export default createStore(reducers, preloadedState, enhancers);
