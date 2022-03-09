import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import BackButton from '~/Components/BackButton';
import Header from '~/Components/Header';
import {styleGuide} from './styles';

function StyleGuide({navigation}) {
	return (
		<SafeAreaView style={styleGuide.container}>
			<Header headerLeft={<BackButton onPress={() => navigation.goBack()} />} headerTitle="스타일링 하기" />
			<View style={styleGuide.section}>
				<Text>스타일을 폴더 구조와 함께 확인 해주세요.</Text>
				<Text>어느 페이지든 공통으로 사용할 여지가 있다면,{'\n'} Components폴더에서 만들어주세요.</Text>
				<Text>현재 Header와 BackButton, CustomButton이 예입니다.</Text>
				<Text>그외 아주 일부, 또는 해당 페이지 안에서만 사용하는 컴포넌트라면</Text>
				<Text>페이지 안에 폴더를 만들어 컴포넌트명으로 파일을 만들고 styles.js도 만들어주세요.</Text>
				<Text>List 폴더를 확인하시면 쉽게 이해하실수 있으실겁니다!</Text>
				<Text>styles.js에서 export되는 변수명은 컴포넌트명과 똑같이 해주시되 카멜표기법으로 부탁드립니다.</Text>
			</View>
			<View style={styleGuide.section}>
				<Text>
					스타일은 flex와 패딩, 마진으로 잡아주세요. 모든 컴포넌트에 width와 height를 고정값을 줘서 잡는 것은 좋지
					않습니다.
				</Text>
				<Text>필요시 width='100%' 또는 height를 고정적으로 잡아줍니다.</Text>
			</View>

			<View style={styleGuide.section}>
				<Text>자주 사용하는 색상과 폰트는 Utils폴더 내에 Colors.js, Fonts.js에 변수로 등록하여 사용합시다.</Text>
			</View>
		</SafeAreaView>
	);
}

export default StyleGuide;
