import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import history from "./history";
import configuration from "features/app/reducers/configuration";
import genres from "features/genres/reducers/genres";

export default combineReducers({
  router: connectRouter(history),
  configuration,
  genres,
});
