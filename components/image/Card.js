import React from "react";
import { StyleSheet, View, Image, Dimensions } from "react-native";

const Card = ({ image }) => {
	console.log(image);
	return (
		<View style={style.card}>
			<Image
				style={style.cardImage}
				source={{ uri: image.item.largeImageURL }}
			/>
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
		margin: 10,
		borderRadius: 20
	},
	cardImage: {
		width: "100%",
		height: "100%",
		borderRadius: 15
	}
});
export default Card;
