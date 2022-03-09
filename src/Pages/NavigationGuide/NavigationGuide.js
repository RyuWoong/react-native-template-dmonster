import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import BackButton from '~/Components/BackButton';
import CustomButton from '~/Components/CustomButton';
import Header from '~/Components/Header';
import {ColorBlue, ColorWhite} from '~/Utils/Colors';
import {navigationGuide} from './styles';

function NavigationGuide({navigation}) {
	return (
		<SafeAreaView style={navigationGuide.container}>
			<Header headerLeft={<BackButton onPress={() => navigation.goBack()} />} headerTitle="네비게이션 가이드" />
			<View style={navigationGuide.section}>
				<Text style={navigationGuide.title}>뒤로가기 - 해당 페이지가 제거 되고 이전 페이지를 보여줍니다.</Text>
				<CustomButton
					label="뒤로가기"
					labelColor={ColorWhite}
					labelSize={20}
					height={50}
					backgroundColor={ColorBlue}
					borderRadius={10}
					onPress={() => navigation.goBack()}
				/>
			</View>
			<View style={navigationGuide.section}>
				<Text style={navigationGuide.title}>이동하기 - 삽입</Text>
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
			<View style={navigationGuide.section}>
				<Text style={navigationGuide.title}>이동하기 - 끌어올리기</Text>
				<CustomButton
					label="이동하기 - 끌어올리기"
					labelColor={ColorWhite}
					labelSize={20}
					height={50}
					backgroundColor={ColorBlue}
					borderRadius={10}
					onPress={() => navigation.navigate('List')}
				/>
			</View>
			<View style={navigationGuide.section}>
				<Text style={navigationGuide.title}>초기화</Text>
				<CustomButton
					label="초기화"
					labelColor={ColorWhite}
					labelSize={20}
					height={50}
					backgroundColor={ColorBlue}
					borderRadius={10}
				/>
			</View>
		</SafeAreaView>
	);
}

export default NavigationGuide;
