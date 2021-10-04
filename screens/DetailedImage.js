import React from "react";
import {
	ImageBackground,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	Image,
	Pressable
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function DetailedImage({ navigation, ...props }) {
	const data = props.route.params.image;
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
			<View style={style.backgroundImageContainer}>
				<ImageBackground
					style={style.backgroundImage}
					source={{ uri: data.largeImageURL }}>
					<View style={style.header}>
						<Pressable onPress={() => navigation.navigate("Main")}>
							<View style={style.headerBtn}>
								<Icon name="chevron-left" size={20} />
							</View>
						</Pressable>

						<View style={style.headerBtn}>
							<Icon name="heart" size={20} color="red" />
						</View>
					</View>
				</ImageBackground>
			</View>
			<View style={style.detailsContainer}>
				<View style={style.userInfo}>
					<Image style={style.userImg} source={{ uri: data.userImageURL }} />
					<Text style={style.userName}>{data.user}</Text>
				</View>
				<View style={style.userInfo}>
					<Icon name="eye" size={20} color="black" />
					<Text style={{ fontSize: 15, marginHorizontal: 10, color: "grey" }}>
						{data.views}
					</Text>
					<Icon name="thumbs-up" size={20} color="black" />
					<Text style={{ fontSize: 15, marginHorizontal: 10, color: "grey" }}>
						{data.likes}
					</Text>
					<Icon name="comment" size={20} color="black" />
					<Text style={{ fontSize: 15, marginLeft: 10, color: "grey" }}>
						{data.comments}
					</Text>
				</View>
				<View style={style.userInfo}>
					{data.tags.split(",").map(o => (
						<Tag tag={o} key={o} />
					))}
				</View>
				<View style={style.userInfo}>
					<Icon name="area-chart" size={20} color="black" />
					<Text style={{ fontSize: 20, fontWeight: "bold" }}>
						{" " + data.imageWidth + " x " + data.imageHeight}
					</Text>
				</View>

				<View style={style.userInfo}>
					<Icon name="database" size={20} color="black" />
					<Text style={{ fontSize: 20, fontWeight: "bold" }}>
						{" " + parseInt(data.imageSize / 1024) + " MB"}
					</Text>
				</View>
			</View>
		</SafeAreaView>
	);
}

const Tag = ({ tag }) => {
	return (
		<View style={style.tag}>
			<Text style={{ color: "#ffffff" }}>{tag}</Text>
		</View>
	);
};

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
	},
	detailsContainer: {
		flex: 1,
		paddingHorizontal: 40,
		marginTop: 80
	},
	userInfo: {
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		marginVertical: 10
	},
	userImg: {
		width: 50,
		height: 50,
		borderRadius: 50,
		marginRight: 20
	},
	userName: {
		fontSize: 30,
		fontWeight: "bold"
	},
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

export default DetailedImage;
