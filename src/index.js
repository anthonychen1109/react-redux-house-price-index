import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/styles.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import reducers from './reducers';

// Components
import App from './components/app';

const createStoreWithMiddleWare = applyMiddleware(reduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleWare(reducers)}>
    <App />
  </Provider>, document.getElementById('root'));
