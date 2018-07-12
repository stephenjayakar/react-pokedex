const reducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_SUCCEEDED":
      return { ...state, pokeData: action.payload };
    case "FETCH_FAILED":
      console.log(action.error);
      return { ...state, pokeData: null };
    default:
      return state
  }
};

export default reducer;