import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./Header";
import Posts from "./Posts";

export default function PostPage() {
  return (
    <>
      <View style={styles.container}>
        <Header />
        <Posts />
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
  },
});
