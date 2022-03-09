import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import store from '~/Store/Store';
import Navigator from '~/Navigator/Navigator';

function App() {
	useEffect(() => {
		setTimeout(() => {
			SplashScreen.hide();
		}, 2000);
	}, []);

	return (
		<Provider store={store}>
			<NavigationContainer>
				<StatusBar barStyle={'dark-content'} />
				<Navigator />
			</NavigationContainer>
		</Provider>
	);
}

export default App;
