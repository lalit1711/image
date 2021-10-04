import React from "react";
import { StyleSheet, View, Image, Dimensions, Pressable } from "react-native";

const Card = ({ image, navigation }) => {
	return (
		<View style={style.card}>
			<Pressable
				onPress={() =>
					navigation.navigate("DetailedImage", { image: image.item })
				}>
				<Image
					style={style.cardImage}
					source={{ uri: image.item.previewURL }}
				/>
			</Pressable>
		</View>
	);
};

const { width } = Dimensions.get("screen");
const style = StyleSheet.create({
	card: {
		height: 250,
		backgroundColor: "#ffffff",
		elevation: 10,
		width: width - 40,
		marginHorizontal: 20,
		marginVertical: 10,
		borderRadius: 20
	},
	cardImage: {
		width: "100%",
		height: "100%",
		borderRadius: 15
	}
});
export default Card;
