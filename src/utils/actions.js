export const changePokemon = (name) => ({
  type: "CHANGE_POKEMON",
  name,
})

export const fetchPokemon = () => ({
  type: "FETCH_REQUESTED",
});

export const fetchSucceeded = (payload) => ({
  type: "FETCH_SUCCEEDED",
  payload,
});

export const fetchFailed = (error) => ({
  type: "FETCH_FAILED",
  error,
});