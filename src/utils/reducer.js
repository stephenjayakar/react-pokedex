const reducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_SUCCEEDED":
      return { ...state, pokeData: action.payload };
    default:
      return state
  }
};

export default reducer;