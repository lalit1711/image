import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import DetailedImage from "./screens/DetailedImage";
import Main from "./screens/Main";
import Welcome from "./screens/Welcome";
import { styles } from "./styles/app";

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar translucent={false} backgroundColor="white" />
			<DetailedImage />
		</View>
	);
}
