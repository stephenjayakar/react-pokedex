const reducer = (state = {}, action) => {
  switch (action.type) {
    case "CHANGE_POKEMON":
      return { ...state, pokemon: action.name };
    case "FETCH_SUCCEEDED":
      return { ...state, pokeData: action.payload };
    default:
      return state
  }
};

export default reducer;