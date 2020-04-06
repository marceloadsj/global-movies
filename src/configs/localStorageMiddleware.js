import loadLocalStorageState from "utilities/loadLocalStorageState";

export default () => (next) => (action) => {
  if (action.saveToLocalStorage) {
    try {
      const state = loadLocalStorageState() || {};

      state[action.saveToLocalStorage] = action.payload;

      localStorage.setItem(
        process.env.REACT_APP_LOCAL_STORAGE_KEY,
        JSON.stringify(state)
      );
    } catch (error) {
      window.ga("send", "exception", {
        exDescription: error?.message || "localStorageMiddleware unknown error",
        exFatal: false,
      });
    }
  }

  return next(action);
};
