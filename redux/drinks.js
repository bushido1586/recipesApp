import * as ActionTypes from './ActionTypes';

export const drinks = (state=[], action) => {
    switch(action.type){
        case ActionTypes.ADD_DRINK:
            return{...state, drinks:action.payload};
        default:
            return state;
    }
};