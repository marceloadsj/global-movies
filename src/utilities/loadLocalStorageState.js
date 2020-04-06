export default () => {
  try {
    const state = localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE_KEY);

    if (state) return JSON.parse(state);
  } catch (error) {
    window.ga("send", "exception", {
      exDescription: error?.message || "loadLocalStorageState unknown error",
      exFatal: false,
    });
  }
};
