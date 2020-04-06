import fetchDb from "utilities/fetchDb";

export const GET_CONFIGURATION = "GET_CONFIGURATION";

export default () => {
  return async (dispatch) => {
    dispatch({ type: GET_CONFIGURATION, payload: { state: "loading" } });

    let payload;

    try {
      const response = await fetchDb.get("/3/configuration");

      payload = { state: "success", ...response.data };
    } catch (exception) {
      payload = {
        state: "error",
        exception,
        message:
          exception?.response?.data?.message ||
          "An unknown error happened, try again in a few minutes",
      };
    }

    dispatch({
      type: GET_CONFIGURATION,
      payload,
      saveToLocalStorage: "configuration",
    });
  };
};

export function getConfigurationReducer(state, action) {
  return action.payload;
}
