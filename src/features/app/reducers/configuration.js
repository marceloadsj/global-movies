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

const initialState = { loading: true };

export default createReducer(actions, initialState);
