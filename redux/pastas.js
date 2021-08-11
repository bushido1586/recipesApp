import * as ActionTypes from './ActionTypes';

export const pastas = (state=[], action) => {
    switch(action.type){
        case ActionTypes.ADD_PASTA:
            return{...state, pastas:action.payload};
        default:
            return state;
    }
};