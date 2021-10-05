import React from "react";
import { StyleSheet, View, Text } from "react-native";

function NoImage() {
	return (
		<View style={style.container}>
			<Text>No Image </Text>
		</View>
	);
}

const style = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	}
});

export default NoImage;
