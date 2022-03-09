const TITLE = 'TITLE';
const RESET = 'RESET';

const initState = {
	title: '',
};

export const setTitle = title => {
	return {
		type: TITLE,
		title,
	};
};

export const setReset = () => {
	return {
		type: RESET,
	};
};

export const tempReducers = (state = initState, action) => {
	switch (action.type) {
		case TITLE:
			return {...state, title: action.title};
		case RESET:
			return initState;
		default:
			return state;
	}
};
