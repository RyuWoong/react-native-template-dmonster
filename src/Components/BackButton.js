import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

function BackButton({onPress}) {
	return (
		<TouchableOpacity style={{padding: 10}} onPress={onPress}>
			<Text>뒤로가기</Text>
		</TouchableOpacity>
	);
}

export default BackButton;
