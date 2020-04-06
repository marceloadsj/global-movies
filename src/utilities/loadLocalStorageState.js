export default () => {
  try {
    const state = localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE_KEY);

    if (state) return JSON.parse(state);
  } catch (error) {
    // TODO: I should send the error to an error tracker tool
  }
};
