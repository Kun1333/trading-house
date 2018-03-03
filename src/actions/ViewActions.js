import * as ActionConstants from './ActionConstants';



export function changeViewValue(value) {
  return {
    type: ActionConstants.CHANGE_VIEW_VALUE,
    value: value
  }

}