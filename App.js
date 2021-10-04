import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "./screens/Welcome";
import Main from "./screens/Main";

import { styles } from "./styles/app";
import DetailedImage from "./screens/DetailedImage";

const Stack = createStackNavigator();
export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false
				}}
				initialRouteName={"Welcome"}>
				<Stack.Screen name="Welcome" component={Welcome} />
				<Stack.Screen name="Main" component={Main} />
				<Stack.Screen name="DetailedImage" component={DetailedImage} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
