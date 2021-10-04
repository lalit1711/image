import React from "react";
import {
	ImageBackground,
	SafeAreaView,
	StyleSheet,
	Text,
	View
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function DetailedImage() {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
			<View style={style.backgroundImageContainer}>
				<ImageBackground
					style={style.backgroundImage}
					source={{ uri: data.largeImageURL }}>
					<View style={style.header}>
						<View style={style.headerBtn}>
							<Icon name="chevron-left" size={20} />
						</View>
						<View style={style.headerBtn}>
							<Icon name="heart" size={20} color="red" />
						</View>
					</View>
				</ImageBackground>
			</View>
		</SafeAreaView>
	);
}

const style = StyleSheet.create({
	backgroundImageContainer: {
		elevation: 20,
		marginHorizontal: 20,
		alignItems: "center",
		height: 350
	},
	backgroundImage: {
		height: 420,
		width: 400,
		borderRadius: 20,
		overflow: "hidden"
	},
	header: {
		paddingVertical: 20,
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 10
	},
	headerBtn: {
		height: 50,
		width: 50,
		backgroundColor: "#ffffff",
		borderRadius: 5,
		justifyContent: "center",
		alignItems: "center"
	}
});

const data = {
	collections: 629,
	comments: 50,
	downloads: 143725,
	id: 2791980,
	imageHeight: 2955,
	imageSize: 2248486,
	imageWidth: 4446,
	largeImageURL:
		"https://pixabay.com/get/g976d0de9f7b253fa18f09104df9487ddfdca7b5687ea02307a56c70c9be8178261c3ebbe6b8e992d3cac5010050f294a32bf1de64bf2880cd69bd112fbd6c22a_1280.jpg",
	likes: 505,
	pageURL: "https://pixabay.com/photos/tiger-eyes-bathing-submerged-2791980/",
	previewHeight: 99,
	previewURL:
		"https://cdn.pixabay.com/photo/2017/09/27/12/55/tiger-2791980_150.jpg",
	previewWidth: 150,
	tags: "tiger, eyes, bathing",
	type: "photo",
	user: "IanZA",
	userImageURL:
		"https://cdn.pixabay.com/user/2017/09/27/13-12-29-269_250x250.jpg",
	user_id: 2026973,
	views: 192691,
	webformatHeight: 425,
	webformatURL:
		"https://pixabay.com/get/g49ecc423bbb0f18d9e697192f854c5548de1d5b8c0370abe827c20ff0889875f36faf15b90a1f3af26d0053dfe6755ae_640.jpg",
	webformatWidth: 640
};

export default DetailedImage;
