import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '~/Pages/Home/Home';

const Stack = createNativeStackNavigator();

function Navigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
		</Stack.Navigator>
	);
}

export default Navigator;
