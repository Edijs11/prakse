import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import PostScreen from "./PostScreen";
import Home from "./Home";
import { Stack } from "./Navigation";

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen
                    name="PostScreen"
                    component={PostScreen}
                    options={({ route }) => ({ title: route.params.item.title })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
