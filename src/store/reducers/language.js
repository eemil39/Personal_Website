import * as actionTypes from '../actions/actionTypes';

import  { updateObject } from '../../shared/uitility';

const intialState = {
    language: 'Fin',
};

const setLanguage = (state, action) => {
    return updateObject(state, { language: action.language});
};


const reducer = (state = intialState, action) => {
    switch (action.type) {
        case actionTypes.SET_LANGUAGE: return setLanguage(state, action);
        default:
            return state;      
    };
};

export default reducer;