import axios from 'axios';

const API = axios.create({
	// baseURL: 'API주소의 기본 값을 입력해주세요. ex) https://dmonster1004.cafe24.com',
	headers: {
		'Content-Type': 'application/json; charset=UTF-8',
		// 헤더 기본 값을 설정 할 수 있습니다.
		// 만약 데이터 통신을 기본적으로 form-data를 사용하신다면,
		//'Content-Type' : 'multipart/form-data'로 변경 또는
		//해당 함수를 호출할때 heaers에 새로 입력하여 덮어 씌울수 있습니다.
	},
});

export default API;
