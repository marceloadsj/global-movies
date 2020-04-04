import createReducer from "utilities/createReducer";
import {
  GET_CONFIGURATION,
  getConfigurationReducer
} from "../actions/getConfiguration";

const actions = [
  {
    type: GET_CONFIGURATION,
    reducer: getConfigurationReducer
  }
];

const initialState = null;

export default createReducer(actions, initialState);
