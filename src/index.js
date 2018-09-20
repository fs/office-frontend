import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import authReducer from './store/auth/reducer';
import tablesReducer from './store/tables/reducer';
import usersReducer from './store/users/reducer';
import { subscribeAuth } from './store/auth/actions';
import { subscribeTables } from './store/tables/actions';
import { subscribeUsers } from './store/users/actions';

// eslint-disable-next-line
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  auth: authReducer,
  tables: tablesReducer,
  users: usersReducer,
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
store.dispatch(subscribeAuth());
store.dispatch(subscribeTables());
store.dispatch(subscribeUsers());

const app = (
  // eslint-disable-next-line
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
