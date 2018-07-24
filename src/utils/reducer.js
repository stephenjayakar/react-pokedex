import { message } from "antd";

const reducer = (state = {favorites: new Set()}, action) => {
  switch (action.type) {
    case "FETCH_REQUESTED":
      return { ...state , pokeData: null, loading: true, };      
    case "FETCH_SUCCEEDED":
      return { ...state, pokeData: action.payload, loading: false, };
    case "FETCH_FAILED":
      message.error("Pokemon fetch failed!");
      return { ...state, pokeData: null, loading: false };
    case "ADD_FAVORITE": {
      const favorites = new Set(state.favorites);
      favorites.add(action.name);
      return { ...state, favorites: favorites};
    }
    case "REMOVE_FAVORITE": {
      const favorites = new Set(state.favorites);
      favorites.delete(action.name);
      return { ...state, favorites: favorites };
    }
    default:
      return state
  }
};

export default reducer;