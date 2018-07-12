import "./App.css"

import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga";

import HomePage from "containers/HomePage";

import rootReducer from "utils/reducer";
import rootSaga from "utils/saga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
  }
}