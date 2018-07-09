const reducer = (state = {}, action) => {
  switch (action.type) {
    case "CHANGE_POKEMON":
      console.log("Changing state to " + action.name);
      return { ...state, pokemon: action.name };
    case "FETCH_SUCCEEDED":
      console.log(action.payload);
      return { ...state, pokemonData: action.payload }
    case "FETCH_FAILED":
      console.log(action.error);
      return { ...state, pokemonData: null };
    default: 
      return state;
  }
}

export default reducer;