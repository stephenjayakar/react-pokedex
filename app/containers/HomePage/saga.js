import { put, takeLatest, select } from "redux-saga/effects";
import { getPokemon } from "./selector";

export function* fetchPokemon() {
  const pokemon = yield select(getPokemon);
  console.log("fetching " + pokemon);
  const fetchURL = "https://pokeapi.co/api/v2/pokemon/" + pokemon;
  try {
    const response = yield fetch(fetchURL);
    const responseBody = yield response.json();
    console.log(responseBody);
    yield put({type: "FETCH_SUCCEEDED", payload: responseBody});
  } catch (error) {
    yield put({type: "FETCH_FAILED", error: error})
  }
}

export default function* rootSaga() {
  yield takeLatest("FETCH_REQUESTED", fetchPokemon);
}