import React from 'react';
import ReactDOM from 'react-dom';

import {Route} from 'react-router';
import {HashRouter} from 'react-router-dom'
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import Immutable from 'immutable';
import registerServiceWorker from './registerServiceWorker';

import { TradingTable } from './components'
import { createItemReducer, configReducer } from './reducers'
import { middleware } from './middleware'

const reducer = combineReducers({
 config: configReducer,
 createItem: createItemReducer
});

let initialState = { config: Immutable.fromJS(window.config) };
let contextPath = initialState.contextPath ? initialState.contextPath : '/';

console.log(window.config);
console.log('context path: ' + contextPath);

const store = createStore(reducer, initialState, applyMiddleware(...middleware));

ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <div>
          <Route path='/' render={() => <TradingTable/> } />
        </div>
      </HashRouter>
    </Provider>,
  document.getElementById('root')
);

registerServiceWorker();