import React from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';

function Header({headerLeft, headerTitle, headerRight}) {
	return (
		<View style={{height: 50, flexDirection: 'row', alignItems: 'center'}}>
			<View style={{flex: 1}}>{headerLeft}</View>
			<View style={{flex: 2}}>
				<Text style={{textAlign: 'center', fontSize: 16, fontWeight: 'bold'}}>{headerTitle}</Text>
			</View>
			<View style={{flex: 1}}>{headerRight}</View>
		</View>
	);
}

Header.propTypes = {
	headerLeft: PropTypes.node,
	headerTitle: PropTypes.string,
	headerRight: PropTypes.node,
};

export default Header;
