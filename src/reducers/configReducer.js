import Immutable from 'immutable'
import * as ActionConstants from '../actions/ActionConstants';


const INITIAL_STATE = Immutable.Map();

export function configReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionConstants.CREATE_ITEM_NEW_ITEM:
      return state.updateIn(['tradingTable', 'data'],
        d => d.push(Immutable.fromJS(action.value)));

    default: return state;
  }

}