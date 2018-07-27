import './App.css'

import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import AppLayout from 'containers/AppLayout';
import { persistor, store } from './configureStore';


const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppLayout />
    </PersistGate>
  </Provider>
);

export default App;