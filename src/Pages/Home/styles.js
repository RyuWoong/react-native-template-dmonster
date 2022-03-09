import {StyleSheet} from 'react-native';
import {ColorWhite} from '~/Utils/Colors';
import {FontCafe24Ssurroundair} from '~/Utils/Fonts';

export const home = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: ColorWhite,
	},
	logo: {
		height: 100,
		width: '100%',
	},
	title: {
		fontWeight: 'bold',
		fontSize: 24,
		textAlign: 'center',
		fontFamily: FontCafe24Ssurroundair,
	},
	loginBox: {
		padding: 20,
	},
	input: {
		height: 50,
		marginVertical: 5,
		paddingHorizontal: 10,
		borderWidth: 1,
		borderColor: '#cccccc',
	},
	buttonBox: {
		paddingHorizontal: 20,
	},
});
