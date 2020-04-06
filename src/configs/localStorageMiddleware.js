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
      // TODO: I should send the error to an error tracker tool
    }
  }

  return next(action);
};
