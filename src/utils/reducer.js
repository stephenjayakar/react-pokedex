import { message } from 'antd';

import { FAVORITES_PATH, SEARCH_PATH } from 'utils/constants';

const defaultState = {
  favorites: new Set(),
  currentPage: 'search',
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
      const favorites = new Set(state.favorites);
      favorites.add(action.name);
      return { ...state, favorites: favorites};
    }
    case 'REMOVE_FAVORITE': {
      const favorites = new Set(state.favorites);
      favorites.delete(action.name);
      return { ...state, favorites: favorites };
    }
    default:
      return state
  }
};

export default reducer;