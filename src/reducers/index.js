import { combineReducers } from 'redux';
import { SET_INPUTS, SET_LOGIN } from '../actions';


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

let initialLoginStatus = {
			login: false,
			memberStatus: {
				ID: '',
				Name: '',
				Img: '',
				Email: ''
			}
		};

const loginStatus = (state = initialLoginStatus, action) => {
	switch(action.type) {
		case SET_LOGIN:
		return Object.assign({}, state, {
			login: action.login,
			memberStatus: {
				ID: action.memberStatus.ID,
				Name: action.memberStatus.Name,
				Img: action.memberStatus.Img,
				Email: action.memberStatus.Email
			}
		});
		default:
		return state;
	}
}

const microNGOApp = combineReducers( {
	inputs,
	loginStatus
});

export default microNGOApp;