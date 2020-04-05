import fetchDb from "utilities/fetchDb";

export const GET_GENRES = "GET_GENRES";

export default () => {
  return async (dispatch) => {
    dispatch({ type: GET_GENRES, payload: { state: "loading" } });

    let payload;

    try {
      const response = await fetchDb.get("/3/genre/movie/list");

      payload = { state: "success", data: response.data.genres };
    } catch (exception) {
      payload = {
        state: "error",
        exception,
      };
    }

    dispatch({ type: GET_GENRES, payload });
  };
};

export function getGenresReducer(state, action) {
  return action.payload;
}
