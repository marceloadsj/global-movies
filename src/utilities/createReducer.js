export default (actions, initialState) => {
  return (state = initialState, action) => {
    return actions
      .filter(({ type }) => action.type === type)
      .reduce((newState, { reducer }) => reducer(newState, action), state);
  };
};
