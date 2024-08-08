import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, RefreshControl } from "react-native";
import React, { useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParams, useStackNavigation } from "./Navigation";
import { Post } from "./Post";

type HomeProps = NativeStackScreenProps<StackParams, "Home">;
type LoadingState = { status: "loading" } | { status: "success"; posts: Post[] } | { status: "failure" };

export default function Home({ navigation }: HomeProps) {
    const [data, setData] = useState<Post[]>([]);
    const [loadingState, setLoadingState] = useState<LoadingState>({ status: "loading" });
    const [refreshing, setRefreshing] = useState(true);

    const fetchData = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            setRefreshing(false);
            const jsonData = await response.json();
            setData(jsonData);
            setLoadingState({ status: "success", posts: jsonData });
        } catch (error) {
            console.error("Error fetching data: ", error);
            setLoadingState({ status: "failure" });
        }
    };

    useEffect(() => {
        fetchData();
    }, []); // [] - useEffect to call once

    const handleRefresh = () => {
        setRefreshing(true);
        fetchData().then(() => {
            setRefreshing(false);
        });
    };

    if (loadingState.status === "loading") {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    } else if (loadingState.status === "success") {
        return (
            <View>
                {refreshing ? <ActivityIndicator /> : null}
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <PostListItem item={item} />}
                    ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
                />
            </View>
        );
    } else {
        <View>
            <Text>Error loading data!</Text>
        </View>;
    }
}

const PostListItem = ({ item }: { item: Post }) => {
    const navigation = useStackNavigation();

    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate("PostScreen", { item });
            }}
        >
            <View style={{ margin: 5 }}>
                <Text numberOfLines={1} ellipsizeMode="tail" style={{ fontWeight: "bold" }}>
                    {item.title}
                </Text>
                <Text numberOfLines={2} ellipsizeMode="tail">
                    {item.body}
                </Text>
            </View>
        </TouchableOpacity>
    );
};
