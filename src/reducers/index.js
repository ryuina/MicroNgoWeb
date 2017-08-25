import { combineReducers } from 'redux';
import { SET_INPUTS } from '../actions';


const inputs = (state = { keyword: '', place: '' }, action) => {
    switch(action.type) {
    	case SET_INPUTS:
    	return Object.assign({}, state, {
                keyword: action.keyword,
                place: action.place,
            });

    	default: 
    	return state;
    }
};

const microNGOApp = combineReducers( {
	inputs,

});

export default microNGOApp;