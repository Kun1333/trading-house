import Immutable from 'immutable'

import * as ActionConstants from '../actions/ActionConstants';

const INITIAL_STATE = Immutable.Map();



export function createItemReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionConstants.CREATE_ITEM_ACTIVE:
      return state
        .set('active', action.value)
        .set('value', state.get('value') ? state.get('value') : Immutable.fromJS({}))
        ;
    case ActionConstants.CREATE_ITEM_CHANGE_VALUE:
      return state
        .setIn(['value', action.id], action.value);
    default: return state;
  }
  // console.log('view reducer', action);
}