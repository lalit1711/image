import React from "react";
import { StyleSheet, SafeAreaView, Image, View, Text } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const Welcome = () => {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
			<Image
				source={{
					uri: "https://cdn.pixabay.com/photo/2021/09/14/17/07/scooter-6624573_960_720.jpg"
				}}
				style={style.image}
			/>
			<View style={style.indicatorContainer}>
				<View style={style.indicator}></View>
				<View style={style.indicator}></View>
				<View style={[style.indicator, style.active]}></View>
			</View>
			<View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
				<View>
					<Text style={style.title}>Find your </Text>
					<Text style={style.title}>Image </Text>
				</View>
			</View>
			<View style={{ margin: 20 }}>
				<Text style={style.textStyle}>Search, View, Download any images</Text>
				<Text style={style.textStyle}>View in few click</Text>
			</View>
			<View style={{ flex: 1, justifyContent: "flex-end", paddingBottom: 40 }}>
				<Pressable>
					<View style={style.btn}>
						<Text style={{ color: "#ffffff" }}>Get Started</Text>
					</View>
				</Pressable>
			</View>
		</SafeAreaView>
	);
};

const style = StyleSheet.create({
	image: {
		height: 420,
		width: 420,
		borderBottomLeftRadius: 100
	},
	indicatorContainer: {
		height: 20,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center"
	},
	indicator: {
		height: 3,
		width: 30,
		backgroundColor: "grey",
		margin: 3
	},
	active: {
		backgroundColor: "#201F1F"
	},
	title: {
		fontSize: 52,
		fontWeight: "bold"
	},
	textStyle: {
		fontSize: 20,
		color: "grey"
	},
	btn: {
		backgroundColor: "black",
		height: 60,
		borderRadius: 15,
		marginHorizontal: 20,
		justifyContent: "center",
		alignItems: "center"
	}
});
export default Welcome;
