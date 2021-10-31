import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Header from "./components/Header";
import Posts from "./components/Posts";

export default function App() {
  return (
    <>
      <View>
        <Header />
        <Posts />
        <StatusBar style="auto" />
      </View>
    </>
  );
}
