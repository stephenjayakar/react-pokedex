import { message } from 'antd';

import { FAVORITES_PATH, SEARCH_PATH } from 'utils/constants';

const defaultState = {
  favorites: {},
  currentPage: SEARCH_PATH,
}

const reducer = (state=defaultState, action) => {
  switch (action.type) {
    case 'TO_FAVORITES':
      return { ...state, currentPath: FAVORITES_PATH };
    case 'TO_SEARCH':
      return { ...state, currentPath: SEARCH_PATH };
    case 'FETCH_REQUESTED':
      return { ...state , pokeData: null, loading: true, };      
    case 'FETCH_SUCCEEDED':
      return { ...state, pokeData: action.payload, loading: false, };
    case 'FETCH_FAILED':
      message.error('Pokemon fetch failed!');
      return { ...state, pokeData: null, loading: false };
    case 'ADD_FAVORITE': {
      const newFavorite = {};
      newFavorite[action.name] = {id: 2};
      const favorites = {...state.favorites, ...newFavorite};      
      console.log(favorites);
      return { ...state, favorites: favorites};
    }
    case 'REMOVE_FAVORITE': {
      const favorites = {...state.favorites}
      delete favorites[action.name];
      console.log(favorites);
      return { ...state, favorites: favorites };
    }
    default:
      return state
  }
};

export default reducer;