import fetchDb from "utilities/fetchDb";

export const GET_CONFIGURATION = "GET_CONFIGURATION";

export default () => {
  return async dispatch => {
    let payload;

    try {
      const response = await fetchDb.get("/3/configuration");

      payload = { success: true, ...response.data };
    } catch (exception) {
      payload = {
        error: true,
        exception,
        message:
          exception?.response?.data?.message ||
          "An unknown error happened, try again in a few minutes"
      };
    }

    dispatch({ type: GET_CONFIGURATION, payload });
  };
};

export function getConfigurationReducer(state, action) {
  return action.payload;
}
