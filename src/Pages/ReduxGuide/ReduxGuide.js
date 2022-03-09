import React, {useState} from 'react';
import {SafeAreaView, Text, TextInput, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import BackButton from '~/Components/BackButton';
import CustomButton from '~/Components/CustomButton';
import Header from '~/Components/Header';
import {setReset, setTitle} from '~/Store/Modules/temp';
import {ColorBlack, ColorBlue} from '~/Utils/Colors';
import {reduxGuide} from './styles';

function ReduxGuide({navigation}) {
	// Redux의 원하는 곳에 값을 담기 위해서는 useDispatch를 선언해줘야합니다.
	const dispatch = useDispatch();

	// Redux에서 원하는 값을 가져오기 위해서는 useSelectoer를 선언해줘야합니다.
	// temp에 있는 title이라는 값을 가져옵니다.
	const {title} = useSelector(state => state.temp);

	const [text, setText] = useState('');

	const onSubmit = () => {
		// tempReducer에 만든 함수가 동작하고, dispatch가 작동하여 설정한대로 state를 변경시켜줍니다.
		// setTitle이라는 함수는 tempReducer에서 action.type으로 TITLE이 들어가 case를 따라가면 title값을 text변수의 값으로 변경시켜줍니다.
		dispatch(setTitle(text));
	};

	const onReset = () => {
		dispatch(setReset());
	};

	return (
		<SafeAreaView style={reduxGuide.container}>
			<Header
				headerLeft={<BackButton onPress={() => navigation.goBack()} />}
				headerTitle={title ? title : '리덕스 가이드'}
			/>
			<View style={reduxGuide.section}>
				<Text>함수형 방식으로 리액트를 작성한다면,</Text>
				<Text>Hook을 사용하여 상태를 관리할 수 있습니다.</Text>
				<Text>상태를 불러온다면, useSelector</Text>
				<Text>상태를 입력한다면, useDispatch</Text>
			</View>
			<View style={reduxGuide.section}>
				<Text>한번 사용해 볼까요?</Text>
				<Text>아래에 값을 입력하면 헤더 타이틀이 변경 됩니다.</Text>
				<Text>해당 값은 뒤로 갔다가 다시 들어와도 유지 됩니다.</Text>
				<View style={reduxGuide.inputBox}>
					<TextInput
						style={{flex: 1, height: 50, marginHorizontal: 10}}
						placeholder="10자이내로 입력해주세요."
						value={text}
						onChangeText={value => setText(value)}
						maxLength={10}
					/>
					<View style={{width: 50}}>
						<CustomButton label="등록" onPress={onSubmit} backgroundColor={ColorBlue} height={50} />
					</View>
				</View>
			</View>
			<View style={reduxGuide.section}>
				<Text>초기화를 누르면 해당 값을 초기화 시킵니다.</Text>
				<Text>temp state가 전부 initState로 초기화 됩니다.</Text>
				<View style={{paddingHorizontal: 10, width: '100%'}}>
					<CustomButton label="초기화" onPress={onReset} backgroundColor={ColorBlue} height={50} />
				</View>
			</View>

			<View style={reduxGuide.section}>
				<Text>자세한 설정은 Store폴더를 확인 해주세요</Text>
				<Text>Store.js에서 리듀서를 통합하며, 각 리듀서는 Modules폴더에 있습니다.</Text>
			</View>
		</SafeAreaView>
	);
}

export default ReduxGuide;
