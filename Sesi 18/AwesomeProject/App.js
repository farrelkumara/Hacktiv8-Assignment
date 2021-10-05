import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  ToastAndroid,
} from "react-native";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const showToast = () => {
    ToastAndroid.show("clicked !", ToastAndroid.SHORT);
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: "https://www.shareicon.net/data/256x256/2016/07/08/117367_logo_512x512.png",
        }}
      />
      <Text style={styles.txt}>Mari kita belajar React Native</Text>
      <StatusBar style="auto" />
      <Text style={{ marginTop: 20 }}> Username </Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(username) => setUsername(username)}
        defaultValue={username}
      />
      <Text style={{ marginTop: 20 }}> Password </Text>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Password"
        onChangeText={(password) => setPassword(password)}
        defaultValue={password}
      />
      <Text style={{ padding: 10, fontSize: 42 }}>
        {username
          .split("")
          .map((word) => word && "")
          .join("")}
      </Text>
      <Button title="Login" color="blue" onPress={() => showToast()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    fontSize: 25,
    color: "black",
  },
  img: {
    height: 100,
    width: 100,
  },
  input: {
    height: 40,
    width: 300,
    borderWidth: 1,
    borderColor: "blue",
  },
});
