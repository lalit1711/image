import { Provider } from "react-redux";
import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "./screens/Welcome";
import Main from "./screens/Main";
import DetailedImage from "./screens/DetailedImage";
import { store } from "./config/store";

const Stack = createStackNavigator();
export default function App() {
	return (
		<Provider store={store}>
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
		</Provider>
	);
}
