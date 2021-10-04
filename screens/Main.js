import React, { useCallback, useEffect, useState } from "react";
import {
	StyleSheet,
	SafeAreaView,
	View,
	ScrollView,
	Text,
	Dimensions,
	Image
} from "react-native";
import { FlatList, TextInput } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import Card from "../components/image/Card";
import { _getImages } from "../api/getImages";
import { deBouncingFunction } from "../helpers/util";

const Main = () => {
	const [images, setImages] = useState([]);
	const [key, setKey] = useState("");
	useEffect(() => {}, []);

	const searchImage = keyword => {
		if (!keyword) return null;
		fetchImages(keyword);
	};

	const fetchImages = keyword => {
		setImages([]);
		_getImages(keyword).then(res => {
			setImages(res.data.hits);
		});
	};

	const delayFunction = useCallback(deBouncingFunction(searchImage, 1000), []);
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
			<ScrollView>
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
					<FlatList data={images} renderItem={item => <Card image={item} />} />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const style = StyleSheet.create({
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
	}
});
export default Main;
