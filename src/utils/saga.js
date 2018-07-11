import { selectPokemon } from "./selector";
import { takeLatest, put, select } from "redux-saga/effects";
import { fetchSucceeded, fetchFailed } from "utils/actions";

export function* fetchPokemon() {
  const pokemon = yield select(selectPokemon);
  const fetchURL = "https://pokeapi.co/api/v2/pokemon/" + pokemon;
  console.log(fetchURL);
  try {
    const response = yield fetch(fetchURL);
    const responseBody = yield response.json();    
    yield put(fetchSucceeded(responseBody));
  } catch (error) {
    alert(error);
    yield put(fetchFailed(error));
  }
}

export default function* rootSaga() {
  yield takeLatest("FETCH_REQUESTED", fetchPokemon);
}