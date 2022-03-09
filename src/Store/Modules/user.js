const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const initState = {
	firebasetoken: '',
	token: '',
};

export const login = token => {
	return {
		type: LOGIN,
		token,
	};
};

export const logout = () => {
	return {
		type: LOGOUT,
	};
};

export const userReducer = (state = initState, action) => {
	switch (action.type) {
		case LOGIN:
			return {...state, token: action.token};
		case LOGOUT:
			return {...state, token: ''};
		default:
			return state;
	}
};
