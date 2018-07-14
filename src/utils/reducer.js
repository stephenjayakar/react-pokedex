const reducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_REQUESTED":
      return { ...state , pokeData: null, loading: true, };
    case "FETCH_SUCCEEDED":
      return { ...state, pokeData: action.payload, loading: false, };
    case "FETCH_FAILED":
      console.log(action.error);
      return { ...state, pokeData: null, loading: false };
    default:
      return state
  }
};

export default reducer;