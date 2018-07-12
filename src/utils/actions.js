export const fetchPokemon = (name) => ({
  type: "FETCH_REQUESTED",
  name,
});

export const fetchSucceeded = (payload) => ({
  type: "FETCH_SUCCEEDED",
  payload,
});

export const fetchFailed = (error) => ({
  type: "FETCH_FAILED",
  error,
});