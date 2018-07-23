import { message } from "antd";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_REQUESTED":
      return { ...state , pokeData: null, loading: true, };
    case "FETCH_SUCCEEDED":
      return { ...state, pokeData: action.payload, loading: false, };
    case "FETCH_FAILED":
      message.error("Pokemon fetch failed!");
      return { ...state, pokeData: null, loading: false };
    default:
      return state
  }
};

export default reducer;