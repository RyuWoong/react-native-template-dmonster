import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {listBar} from './styles';

function ListBar({item, navigation}) {
	return (
		<TouchableOpacity onPress={() => navigation.navigate(item.page)} style={listBar.container}>
			<Text>{item.title}</Text>
			<Text>{'>'}</Text>
		</TouchableOpacity>
	);
}

export default ListBar;
