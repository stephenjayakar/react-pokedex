import './App.css'

import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import { BrowserRouter } from 'react-router-dom';

import AppLayout from 'containers/AppLayout';

import rootReducer from 'utils/reducer';
import rootSaga from 'utils/saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  </Provider>
);

export default App;