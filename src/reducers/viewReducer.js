import Immutable from 'immutable'

import * as ActionConstants from '../actions/ActionConstants';

const INITIAL_STATE = Immutable.Map();



export function viewReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionConstants.CHANGE_VIEW_VALUE:
      console.log('view reducer', action);
      return state;
    default: return state;
  }
  // console.log('view reducer', action);
}