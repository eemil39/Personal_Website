import * as actionTypes from './actionTypes';

export const changeLanguage = (language) => {
    return{
        type: actionTypes.SET_LANGUAGE,
        language: language
    }
}