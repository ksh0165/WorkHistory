import * as types from '../actions/ActionTypes';

export const visibilityFilter = (state='SHOW_ALL', action) =>{
    if(action.type === types.SET_VISIBILITY_FILTER){
        return action.filter;
    } else {
        return state;
    }
}