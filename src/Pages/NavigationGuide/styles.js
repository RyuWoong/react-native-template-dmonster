import {StyleSheet} from 'react-native';
import {ColorWhite} from '~/Utils/Colors';
import {FontCafe24Ssurroundair} from '~/Utils/Fonts';

export const navigationGuide = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: ColorWhite,
	},
	section: {
		marginVertical: 10,
		paddingHorizontal: 10,
	},
	title: {
		fontFamily: FontCafe24Ssurroundair,
		fontSize: 20,
		marginBottom: 5,
	},
});
