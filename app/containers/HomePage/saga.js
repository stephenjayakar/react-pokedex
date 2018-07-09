import { call, put, takeLatest } from "redux-saga/effects";

export function* fetchPokemon(action) {
  console.log("fuck");
  //const pokemon = action.payload.name.toLowerCase();
  const pokemon = "pikachu";
  const fetchURL = "https://pokeapi.co/api/v2/pokemon/" + pokemon;
  try {
    const response = yield fetch(fetchURL);
    const responseBody = yield response.json();
    console.log(responseBody);
    yield put({type: "FETCH_SUCCEEDED", responseBody});
  } catch (error) {
    yield put({type: "FETCH_FAILED", error})
  }
}

export default function* rootSaga() {
  yield takeLatest("FETCH_REQUESTED", fetchPokemon);
}