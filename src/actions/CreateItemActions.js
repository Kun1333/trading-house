import * as ActionConstants from './ActionConstants';


export function setCreateItemActive(value) {
  return {
    type: ActionConstants.CREATE_ITEM_ACTIVE,
    value: value
  };
}

export function setCreateItemChangeValue(id, value) {
  return {
    type: ActionConstants.CREATE_ITEM_CHANGE_VALUE,
    id: id,
    value: value
  };
}

export function setCreateItemSave(value) {
  return {
    type: ActionConstants.CREATE_ITEM_SAVE,
    value: value
  };
}

export function setCreateItemNewItem(value) {
  return {
    type: ActionConstants.CREATE_ITEM_NEW_ITEM,
    value: value
  };
}