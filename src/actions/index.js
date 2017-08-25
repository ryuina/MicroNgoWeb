export const SET_INPUTS = 'SET_INPUTS';

export function setInputs(keyword, place) {
    return {
        type: SET_INPUTS,
        keyword: keyword,
        place: place
    };
}