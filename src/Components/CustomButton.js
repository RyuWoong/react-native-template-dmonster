import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

function CustomButton({
	height,
	label,
	labelColor,
	labelFont,
	labelSize,
	labelWeight,
	backgroundColor,
	borderWidth,
	borderColor,
	borderRadius,
	onPress,
}) {
	return (
		<TouchableOpacity
			style={{width: '100%', justifyContent: 'center', height, backgroundColor, borderWidth, borderColor, borderRadius}}
			onPress={onPress}>
			<Text
				style={{
					color: labelColor,
					fontSize: labelSize,
					fontFamily: labelFont,
					fontWeight: labelWeight,
					textAlign: 'center',
				}}>
				{label}
			</Text>
		</TouchableOpacity>
	);
}

export default CustomButton;
