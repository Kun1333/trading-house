import Immutable from 'immutable'

import * as ActionConstants from '../actions/ActionConstants';

const INITIAL_STATE = Immutable.Map();



export function createItemReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionConstants.CREATE_ITEM_ACTIVE:
      return state
        .set('active', action.value)
        .delete('value');
    default: return state;
  }
  // console.log('view reducer', action);
}