import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Modal,
} from "react-native";
import Posts from "./Posts";

export default function Post({ post, idx, deleteFromState }) {
  const [data, setData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => setData(data));
  });

  const deletePost = () => {
    fetch(`http://localhost:3000/posts/${post.id}`, {
      method: "DELETE",
    })
      .then(() => deleteFromState(idx))
      .catch((err) => console.log(err));
  };

  const changeModalOpen = (bool) => {
    setModalOpen(bool);
    console.log(bool);
  };

  return (
    <>
      <View>
        <View style={styles.scroll}>
          {/* {data.map((post) => ( */}
          <View style={styles.box}>
            <Text style={styles.title}>{post.title}</Text>
            <Text>{post.description}</Text>
            <View style={{ width: 50, marginLeft: 300, marginTop: -40 }}>
              <Button title="X" color="red" onPress={deletePost} />
            </View>
            <View style={{ width: 50, marginLeft: 250, marginTop: -40 }}>
              <Button
                title="update"
                color="green"
                onPress={() => changeModalOpen(true)}
              />
            </View>
          </View>
          <Modal
            transparent={true}
            animationType="fade"
            visible={false}
            // nRequestClose={() => changeModalOpen(false)}
          >
            <View>
              <Text>Test</Text>
              <Button title="update" />
              <Button title="cancel" onPress={() => setModalOpen(false)} />
            </View>
          </Modal>
          {/* ))} */}
        </View>
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
  scroll: {
    padding: 10,
  },
  box: {
    backgroundColor: "#fef7dc",
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
