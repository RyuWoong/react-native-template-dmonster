import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import BackButton from '~/Components/BackButton';
import CustomButton from '~/Components/CustomButton';
import Header from '~/Components/Header';
import {ColorBlue, ColorWhite} from '~/Utils/Colors';

function InsertPage({navigation}) {
	return (
		<SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
			<Header headerLeft={<BackButton onPress={() => navigation.goBack()} />} headerTitle="푸시푸시!" />
			<View style={{flex: 1, justifyContent: 'center', paddingHorizontal: 20}}>
				<Text>PUSH!</Text>
				<Text>PUSH한만큼 화면이 쌓입니다.</Text>
				<Text>이전으로 돌아가기 위해 PUSH한만큼 뒤로가기를 해야합니다.</Text>
				<CustomButton
					label="이동하기 - 삽입"
					labelColor={ColorWhite}
					labelSize={20}
					height={50}
					backgroundColor={ColorBlue}
					borderRadius={10}
					onPress={() => navigation.push('InsertPage')}
				/>
			</View>
		</SafeAreaView>
	);
}

export default InsertPage;
