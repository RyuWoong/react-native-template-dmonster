import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import BackButton from '~/Components/BackButton';
import Header from '~/Components/Header';
import API from '~/Utils/API';

function ApiGuide({navigation}) {
	const [data1, setData1] = useState();
	const [data2, setData2] = useState();

	// get 통신 예제
	const getData = async () => {
		try {
			const res = await API.get('https://jsonplaceholder.typicode.com/posts', {params: {userId: 1}}); //  https://jsonplaceholder.typicode.com/posts?userId=1
			// 해당 통신에서 에러가 생기지 않는다면 (status Code 200~300 외) 아래 코드를 쭉 실행하게 됩니다.
			console.log(res.data);
			setData1(res.data);
		} catch (error) {
			// 해당 통신에서 문제가 생기면 catch 구문으로 들어오게 됩니다.
			// getData 함수내 발생하는 오류는 모두 이쪽을 통과 하게 됩니다.
			// 만약 통신에서 발생한 문제를 자세하게 확인하고 싶으시다면
			// 아래와 같이 작성하여 확인할 수 있습니다.
			if (axios.isAxiosError(error)) {
				console.error(error.response);
			} else {
				console.error(error);
			}
		}
	};

	// post 통신 예제
	const postData = async () => {
		try {
			//단순 Json 데이터 통신인 경우 아래와 같이 작성하여 전달합니다.
			//저희 회사에서는 대부분 Post로 처리함으로 아래 코드를 메인으로 사용하게 됩니다.
			const data = {
				title: 'foo',
				body: 'bar',
				userId: 1,
			};
			const res = await API.post('https://jsonplaceholder.typicode.com/posts', data);
			console.log(res.data);
			setData2(res.data);
		} catch (error) {
			if (axios.isAxiosError(error)) {
				console.error(error.response);
			} else {
				console.error(error);
			}
		}
	};

	// post 통신 예제 FormData
	const postFormData = async () => {
		try {
			// 이미지 같은 데이터를 전달해야하는 경우가 있습니다.
			// 이럴땐 FormData를 사용하여 처리합니다.

			const data = new FormData();
			// 이미지를 전송할때 서버가 php로 작성되었다면 아래와 같이 key값을 전달해야 서버에서 올바르게 전달 받습니다.
			// 만약 500 network error가 발생한다면 아래 키가 name, type, uri로 올바른지, 포함하고 있는지 확인하세요.
			// const image = {
			// 	name: response.assets[0].fileName,
			// 	type: response.assets[0].type,
			// 	uri: response.assets[0].uri,
			// };
			// data.append('id', 'dmonster');
			// data.append('image', image);
			// FormData로 통신시 headers에 값을 넣어서 Content-type을 multipart/form-data로 기입해야합니다.
			// const res = await API.post('', data, {
			// 	headers: {'Content-Type': 'multipart/form-data'},
			// });
			console.log(res.data);
		} catch (error) {
			if (axios.isAxiosError(error)) {
				console.error(error.response);
			} else {
				console.error(error);
			}
		}
	};

	useEffect(() => {
		getData();
		postData();
		// postFormData();
	}, []);

	return (
		<SafeAreaView>
			<Header headerLeft={<BackButton onPress={() => navigation.goBack()} />} headerTitle="Api Guide" />
			<View>
				<Text>{data1 ? '데이터를 받아왔습니다. 콘솔을 확인해주세요.' : '데이터를 아직 받아오지 못했습니다.'}</Text>
				<Text>{data2 ? '데이터를 받아왔습니다. 콘솔을 확인해주세요.' : '데이터를 아직 받아오지 못했습니다.'}</Text>
			</View>
		</SafeAreaView>
	);
}

export default ApiGuide;
