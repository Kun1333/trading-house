import React from 'react';
import ReactDOM from 'react-dom';

import {Route} from 'react-router';
import {HashRouter} from 'react-router-dom'
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import Immutable from 'immutable';
import registerServiceWorker from './registerServiceWorker';

import { View, View2 } from './components'

const reducer = combineReducers({

});

let initialState = { config: Immutable.Map(window.config) };
let contextPath = initialState.contextPath ? initialState.contextPath : '/';

console.log(window.config);
console.log('context path: ' + contextPath);

const middleware = [];
const store = createStore(reducer, initialState, applyMiddleware(...middleware));

ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <div>
          <Route path='/' render={() => <View /> } />
          <Route path='/x' render={() => <View2 /> } />
        </div>
      </HashRouter>
    </Provider>,
  document.getElementById('root')
);

registerServiceWorker();