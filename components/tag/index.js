import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Tag({ tag }) {
	return (
		<View style={style.tag}>
			<Text style={{ color: "#ffffff" }}>{tag}</Text>
		</View>
	);
}

const style = StyleSheet.create({
	tag: {
		backgroundColor: "#63A4F7",
		color: "#ffffff",
		padding: 10,
		height: 30,
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "center",
		marginRight: 5
	}
});

export default Tag;
