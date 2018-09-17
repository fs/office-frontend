import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import authReducer from './store/reducers/auth';
import tablesReducer from './store/reducers/tables';
import usersReducer from './store/reducers/users';
import connectApiReducer from './store/reducers/connectApi';
import * as actions from './store/actions/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  auth: authReducer,
  tables: tablesReducer,
  users: usersReducer,
  connectApi: connectApiReducer,
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
store.dispatch(actions.authCheckState());
store.dispatch(actions.tablesCheckState());

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
