import React from 'react';
import ReactDOM from 'react-dom';
import ReduxPromise from 'redux-promise'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

//CSS
import './stylesheets/styles.css';

//REDUCERS
import reducers from './reducers';

//COMPONENTS
import App from './components/app';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root'));