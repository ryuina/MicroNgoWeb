export const SET_INPUTS = 'SET_INPUTS';
export const SET_LOGIN = 'SET_LOGIN';

export function setInputs(keyword, place) {
    return {
        type: SET_INPUTS,
        keyword: keyword,
        place: place
    };
}

export function setLogin(login, member) {
	return {
		type: SET_LOGIN,
		login: login,
		memberStatus: {ID: member.ID, 
	  		Name: member.Name, 
	  		Img: member.Img, 
	  		Email: member.Email}
	};
}