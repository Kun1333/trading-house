import * as ActionConstants from './ActionConstants';


export function setCreateItemActive(value) {
  return {
    type: ActionConstants.CREATE_ITEM_ACTIVE,
    value: value
  };
}