import {combineReducers, createStore} from 'redux';
import {tempReducers} from './Modules/temp';
import {userReducer} from './Modules/user';

/*
 * 모든 리듀서를 합쳐주는 부분입니다.
 * 원하는 주제의 이름으로 분리해서 저장할수 있는 공간을 만드는 것을 리듀서라고 생각하시면 편합니다.
 * 유저에 관한 정보는 현재 userReducer에 담겨 있습니다.
 * 리덕스 가이드에 있는 상태는 tempReducer에 담겨 있습니다.
 */
const rootReducer = combineReducers({
	user: userReducer,
	temp: tempReducers,
});

const store = createStore(rootReducer);

export default store;
