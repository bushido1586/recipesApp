import * as ActionTypes from './ActionTypes';

export const sauces = (state=[], action) => {
    switch(action.type){
        case ActionTypes.ADD_SAUCE:
            return{...state, sauces:action.payload};
        default:
            return state;
    }
};