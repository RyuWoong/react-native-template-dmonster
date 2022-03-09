import React, {useCallback, useEffect, useState} from 'react';
import {
	Alert,
	Image,
	KeyboardAvoidingView,
	Platform,
	SafeAreaView,
	ScrollView,
	Text,
	TextInput,
	View,
	BackHandler,
	StatusBar,
	ToastAndroid,
} from 'react-native';
import CustomButton from '~/Components/CustomButton';
import {home} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '~/Store/Modules/user';
import {ColorBlue, ColorWhite} from '~/Utils/Colors';
import {useIsFocused} from '@react-navigation/native';

import img_character from '~/Assets/Images/character.png';

const dummy = {
	id: 'dmonster',
	pw: '1234',
};

function Home({navigation}) {
	const [id, setId] = useState('');
	const [pw, setPw] = useState('');
	const [exitApp, setExitApp] = useState(false);

	// 현재 페이지를 보고 있는지 확인하는 navigation에서 제공하는 함수
	const isFocused = useIsFocused(); // true or false

	//Redux 상태관리
	const dispatch = useDispatch();
	const {token} = useSelector(state => state.user);

	const goLogin = () => {
		if (id === dummy.id && pw === dummy.pw) {
			dispatch(login('id'));
		} else {
			Alert.alert('로그인 오류', '아이디 및 비밀번호를 확인해주세요.', [{text: '확인'}]);
		}
	};

	useEffect(() => {
		if (token) {
			navigation.navigate('List');
		}
	}, [token]);

	// 해당 함수가 들어가있는 페이지에서만 동작합니다.
	// 뒤로가기 두번시 앱종료.
	const backAction = useCallback(() => {
		let timeOut;
		clearTimeout(timeOut);
		if (exitApp) {
			BackHandler.exitApp();
		} else {
			setExitApp(true);
			ToastAndroid.show('한번 더 누르시면 종료됩니다.', ToastAndroid.SHORT);
			timeOut = setTimeout(() => {
				setExitApp(false);
			}, 2000);
		}
		return true;
	}, [exitApp]);

	useEffect(() => {
		if (isFocused) {
			const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
			return () => backHandler.remove();
		} else {
			const backHandler = BackHandler.addEventListener('hardwareBackPress', () => false);
			return () => backHandler.remove();
		}
	}, [exitApp, isFocused]);

	return (
		<SafeAreaView style={home.container}>
			<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{flex: 1}}>
				<View style={{flex: 1, justifyContent: 'center'}}>
					<Image style={home.logo} source={img_character} resizeMode="contain" />
					<Text style={home.title}>Welcome to Dmonster!</Text>
					<View style={home.loginBox}>
						<TextInput
							style={home.input}
							value={id}
							onChangeText={text => setId(text)}
							placeholder="아이디"
							autoCapitalize="none"
						/>
						<TextInput
							style={home.input}
							value={pw}
							onChangeText={text => setPw(text)}
							secureTextEntry
							placeholder="비밀번호"
							autoCapitalize="none"
						/>
					</View>
					<View style={home.buttonBox}>
						<CustomButton
							label="로그인"
							labelColor={ColorWhite}
							labelSize={20}
							height={50}
							backgroundColor={ColorBlue}
							onPress={goLogin}
						/>
					</View>
				</View>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
}

export default Home;
