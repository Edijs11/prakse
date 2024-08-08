import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList, ActivityIndicator, RefreshControl } from "react-native";
import { StackParams } from "./Navigation";
import { Comment } from "./Comment";

type PostScreenProps = NativeStackScreenProps<StackParams, "PostScreen">;
type LoadingState = { status: "loading" } | { status: "success"; comments: Comment[] } | { status: "failure" };

export default function PostScreen(props: PostScreenProps) {
    const post = props.route.params.item;
    const [comment, setComment] = useState<Comment[]>([]);
    const [loadingState, setLoadingState] = useState<LoadingState>({ status: "loading" });
    const [refreshing, setRefreshing] = useState(true);

    const fetchComments = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`);

            if (!response.ok) {
                throw new Error("http error: ${response.status}");
            }

            const jsonData = await response.json();
            setRefreshing(false);
            setComment(jsonData);
            setLoadingState({ status: "success", comments: jsonData });
        } catch (error) {
            console.error("Error fetching data: ", error);
            setLoadingState({ status: "failure" });
        }
    };

    useEffect(() => {
        fetchComments();
    }, [post.id]);

    const handleRefresh = () => {
        setRefreshing(true);
        fetchComments().then(() => {
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
            <View style={{ paddingHorizontal: 16, paddingTop: 16 }}>
                {refreshing ? <ActivityIndicator /> : null}
                <Text style={{ fontWeight: "bold", marginBottom: 16 }}>{post.title}</Text>
                <Text>{post.body}</Text>

                <Text style={{ fontSize: 20, paddingTop: 25 }}>Comments:</Text>

                <FlatList
                    data={comment}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <RenderCommentItem item={item} />}
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={fetchComments} />}
                />
            </View>
        );
    } else {
        <View>
            <Text>Error loading data!</Text>
        </View>;
    }
}

const RenderCommentItem = ({ item }: { item: Comment }) => (
    <View style={{ padding: 10 }}>
        <Text>email: {item.email}</Text>
        <Text>name: {item.name}</Text>
        <Text>comment: {item.body}</Text>
    </View>
);
