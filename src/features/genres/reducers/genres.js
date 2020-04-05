import createReducer from "utilities/createReducer";
import { GET_GENRES, getGenresReducer } from "../actions/getGenres";

const actions = [
  {
    type: GET_GENRES,
    reducer: getGenresReducer,
  },
];

const initialState = null;

export default createReducer(actions, initialState);
