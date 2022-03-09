import {StyleSheet} from 'react-native';
import {ColorWhite} from '~/Utils/Colors';

export const reduxGuide = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: ColorWhite,
	},
	section: {
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 10,
	},
	inputBox: {
		flexDirection: 'row',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: '#e3e3e3',
		marginHorizontal: 20,
	},
});
