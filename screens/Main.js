import React, { useCallback, useState } from "react";
import {
	SafeAreaView,
	View,
	Text,
	ActivityIndicator,
	StyleSheet
} from "react-native";
import { FlatList, TextInput } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import Card from "../components/card";
import { _getImages } from "../api/getImages";
import { deBouncingFunction } from "../helpers/util";
import { StatusBar } from "expo-status-bar";
import { useDispatch, useSelector } from "react-redux";
import { getImages } from "../config/store";
import NoImage from "../components/noImage";

const Main = ({ navigation }) => {
	const images = useSelector(state => state.images);
	const dispatch = useDispatch();

	const [offSet, setOffSet] = useState(1);
	const [loading, setLoading] = useState(false);
	const [key, setKey] = useState("");

	const searchImage = keyword => {
		if (!keyword) return null;
		fetchImages(keyword);
	};

	const fetchImages = keyword => {
		setLoading(true);
		addImagesToStore([]);
		_getImages(keyword)
			.then(res => {
				addImagesToStore(res.data.hits);
				setOffSet(1);
				setLoading(false);
			})
			.catch(err => setLoading(false));
	};

	const endReached = distanceFromEnd => {
		if (offSet < 5) {
			setLoading(true);
			_getImages(key, offSet)
				.then(res => {
					addImagesToStore([...images, ...res.data.hits]);
					setOffSet(offSet + 1);
					setLoading(false);
				})
				.catch(err => setLoading(false));
		}
	};

	const addImagesToStore = img => {
		dispatch(getImages(img));
	};

	const delayFunction = useCallback(deBouncingFunction(searchImage, 1000), []);

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
			<StatusBar translucent={false} color="white" />
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					paddingHorizontal: 20,
					marginVertical: 20
				}}>
				<View style={style.inputContainer}>
					<Icon name="search" size={25} color={"grey"} />
					<TextInput
						placeholder="Enter Key to search Image"
						style={style.textInput}
						autoCapitalize="none"
						value={key}
						onChangeText={e => {
							setKey(e);
							delayFunction(e);
						}}
					/>
				</View>
			</View>
			<View>
				<FlatList
					data={images}
					onEndReached={distanceFromEnd => endReached(distanceFromEnd)}
					onEndReachedThreshold={0.1}
					renderItem={(item, index) => (
						<Card image={item} navigation={navigation} />
					)}
					keyExtractor={(item, index) => index}
					ListEmptyComponent={<NoImage />}
				/>
			</View>
			<View style={style.activity}>
				<Text>{loading && <ActivityIndicator color="#009387" />}</Text>
			</View>
		</SafeAreaView>
	);
};

export const style = StyleSheet.create({
	inputContainer: {
		height: 50,
		backgroundColor: "#E3DFDF",
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 20,
		borderRadius: 10,
		width: 350
	},
	textInput: {
		marginLeft: 20
	},
	floatButton: {
		width: 60,
		height: 60,
		alignItems: "center",
		justifyContent: "center",
		shadowColor: "#333",
		shadowOpacity: 0.1,
		shadowOffset: { x: 2, y: 0 },
		shadowRadius: 2,
		borderRadius: 30,
		position: "absolute",
		bottom: 20,
		right: 20,
		backgroundColor: "#009387"
	},
	activity: {
		marginTop: 10,
		flex: 1,
		alignItems: "center"
	}
});

export default Main;
