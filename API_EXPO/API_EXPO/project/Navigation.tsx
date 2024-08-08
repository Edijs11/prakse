import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";
import { Post } from "./Post";

export type StackParams = {
    Home: undefined;
    PostScreen: { item: Post };
};

export const Stack = createNativeStackNavigator<StackParams>();

export function useStackNavigation() {
    return useNavigation<NativeStackNavigationProp<StackParams>>();
}
