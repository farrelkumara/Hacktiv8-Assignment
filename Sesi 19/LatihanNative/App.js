import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";

var count = 0;
const App = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    if (count < 20) {
      fetch("https://randomuser.me/api")
        .then((response) => response.json())
        .then((data) =>
          setUser(
            users.concat({
              name:
                data.results[0].name.first + " " + data.results[0].name.last,
              img: data.results[0].picture.thumbnail,
              location:
                data.results[0].location.street.number +
                " " +
                data.results[0].location.street.name +
                ", " +
                data.results[0].location.city +
                ", " +
                data.results[0].location.state,
              email: data.results[0].email,
            })
          )
        );
      count++;
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
          Customer
        </Text>
      </View>
      <ScrollView style={styles.scroll}>
        {users.map((user, idx) => (
          <View style={styles.box} key={idx}>
            <Image
              style={styles.img}
              source={{
                uri: user.img,
              }}
            />
            <Text style={styles.title}>{user.name}</Text>
            <Text>{user.location}</Text>
            <Text>{user.email}</Text>
          </View>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
  },
  scroll: {
    backgroundColor: "#c2b8a3",
    padding: 10,
  },
  box: {
    backgroundColor: "#fef7dc",
    marginBottom: 10,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  img: {
    width: 100,
    height: 100,
  },
  header: {
    backgroundColor: "#c2b8a3",
    padding: 10,
    marginTop: -25,
  },
});

export default App;
