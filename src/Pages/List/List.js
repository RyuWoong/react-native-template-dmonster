import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import BackButton from '~/Components/BackButton';
import CustomButton from '~/Components/CustomButton';
import Header from '~/Components/Header';
import {logout} from '~/Store/Modules/user';
import {ColorBlue, ColorWhite} from '~/Utils/Colors';
import {FontCafe24Ssurroundair} from '~/Utils/Fonts';
import ListBar from './ListBar/ListBar';
import {list} from './styles';

const dummy = [
	{key: 1, title: '스타일링 하기', page: 'StyleGuide'},
	{key: 2, title: '네비게이션 사용하기', page: 'NavigationGuide'},
	{key: 3, title: 'redux 사용하기', page: 'ReduxGuide'},
	{key: 4, title: '서버와 통신하기', page: 'ApiGuide'},
];

function List({navigation}) {
	const dispatch = useDispatch();
	const {token} = useSelector(state => state.user);

	useEffect(() => {
		if (!token) {
			navigation.navigate('Home');
		}
	}, [token]);

	return (
		<SafeAreaView style={list.container}>
			<Header headerTitle="리스트" />
			<FlatList
				data={dummy}
				keyExtractor={item => `list-${item.key}`}
				renderItem={({item}) => <ListBar navigation={navigation} item={item} />}
				ListHeaderComponent={
					<View>
						<Text style={{textAlign: 'center', fontFamily: FontCafe24Ssurroundair}}>
							기본 작성법을 알아 봅시다. 코드도 함께 확인해 주세요.
						</Text>
					</View>
				}
			/>
			<View>
				<CustomButton
					label="로그아웃"
					labelSize={20}
					labelColor={ColorWhite}
					backgroundColor={ColorBlue}
					height={40}
					onPress={() => dispatch(logout())}
				/>
			</View>
		</SafeAreaView>
	);
}

export default List;
