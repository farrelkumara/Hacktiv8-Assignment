import { StatusBar } from "expo-status-bar";
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Button,
} from "react-native";

var count = 0;

const themes = {
  light: {
    scrollColor: "#85e0e0",
    boxColor: "#e6ffff",
  },
  dark: {
    scrollColor: "#155151",
    boxColor: "#009999",
  },
};

const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState(themes.light);
  const [gender, setGender] = useState("all");

  return (
    <ThemeContext.Provider value={theme}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            Users
            <View style={styles.button}>
              <Button
                title="Go Dark"
                color="black"
                onPress={() => setTheme(themes.dark)}
              />
              <Button
                title="Go Light"
                color="green"
                onPress={() => setTheme(themes.light)}
              />
            </View>
          </Text>
        </View>
        <View>
          <Button title="Female" onPress={() => setGender("female")} />
          <Button title="Male" onPress={() => setGender("male")} />
          <Button title="All" onPress={() => setGender("all")} />
        </View>
        <ListItem gender={gender} />
        <StatusBar style="auto" />
      </View>
    </ThemeContext.Provider>
  );
};

function ListItem(gender) {
  return <ThemedListItem gender={gender} />;
}

function ThemedListItem(gender) {
  let userGender = gender.gender.gender;
  console.log(userGender);
  const theme = useContext(ThemeContext);
  const [users, setUser] = useState([]);

  useEffect(() => {
    if (count < 20) {
      console.log(count);
      fetch("https://randomuser.me/api")
        .then((response) => response.json())
        .then(function (data) {
          // console.log(data.results[0].gender);
          // if (data.results[0].gender == userGender) {
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
              gender: data.results[0].gender,
            })
          );
          //}
        });
    }
    count++;
    // if (userGender == "female") {
    //   setUser(users.filter((user) => user.gender == userGender));
    // }
  });

  return (
    <ScrollView style={{ backgroundColor: theme.scrollColor, padding: 10 }}>
      {users.map((user, idx) => (
        <View
          style={{
            backgroundColor: theme.boxColor,
            padding: 10,
            marginBottom: 10,
          }}
          key={idx}
        >
          <Image
            style={styles.img}
            source={{
              uri: user.img,
            }}
          />
          <Text style={styles.title}>{user.name}</Text>
          <Text>{user.location}</Text>
          <Text>{user.email}</Text>
          <Text>{user.gender}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
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
    backgroundColor: "#004080",
    padding: 10,
    marginTop: -25,
  },
  button: {
    // display: "inline",
    marginLeft: "30",
  },
});

export default App;
