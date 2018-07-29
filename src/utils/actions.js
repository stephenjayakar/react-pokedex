export const toFavorites = () => ({
  type: 'TO_FAVORITES'
});

export const toSearch = () => ({
  type: 'TO_SEARCH'
});

export const fetchPokemon = (name) => ({
  type: 'FETCH_REQUESTED',
  name,
});

export const fetchSucceeded = (payload) => ({
  type: 'FETCH_SUCCEEDED',
  payload,
});

export const fetchFailed = (error) => ({
  type: 'FETCH_FAILED',
  error,
});

export const addFavorite = (pokeData) => ({
  type: 'ADD_FAVORITE',
  pokeData
});

export const removeFavorite = (name) => ({
  type: 'REMOVE_FAVORITE',
  name
});