import Immutable from 'immutable';

import { CREATE_ITEM_SAVE } from '../actions/ActionConstants';
import { setCreateItemNewItem, setCreateItemActive } from '../actions';


export const createItemMiddleware = store => next => action => {
 switch (action.type) {

 case CREATE_ITEM_SAVE:
   let entries = store.getState().config.getIn(['tradingTable', 'data']).toJS();
   let greatest = 0;
   for(let index in entries) {
     if(entries[index].id > greatest) {
       greatest = entries[index].id;
     }
   }


   let id = greatest + 1;
   let newItem = {
     id: id,
     name: action.value.name,
     price: {in: action.value.price, out: 'unknown'}
   };
   store.dispatch(setCreateItemNewItem(newItem));
   store.dispatch(setCreateItemActive(false));

 break;
 default:
 // NOP
 }
 return next(action);
};
