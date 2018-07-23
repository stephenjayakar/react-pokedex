import { takeLatest, put } from "redux-saga/effects";
import { fetchSucceeded, fetchFailed } from "utils/actions";

export function* fetchPokemon(action) {
  const pokemon = action.name;
  const fetchURL = "https://pokeapi.co/api/v2/pokemon/" + pokemon;  
  try {
    const response = yield fetch(fetchURL);
    if (response.status !== 200) {
      throw new Error("Pokemon not found");
    }
    const responseBody = yield response.json();  
    yield put(fetchSucceeded(responseBody));
  } catch (error) {        
    yield put(fetchFailed(error));
  }
}

export default function* rootSaga() {
  yield takeLatest("FETCH_REQUESTED", fetchPokemon);
}