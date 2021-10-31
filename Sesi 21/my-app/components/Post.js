import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Modal,
  TouchableHighlight,
  TextInput,
} from "react-native";

export default function Post({ post, idx, deleteFromState }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const deletePost = () => {
    fetch(`http://192.168.1.7:4000/posts/${post.id}`, {
      method: "DELETE",
    })
      .then(() => deleteFromState(idx))
      .catch((err) => console.log(err));
  };

  const updatePost = (t, d) => {
    if (title == "") setTitle(t);
    if (description == "") setDescription(d);
    fetch(`http://192.168.1.7:4000/posts/${post.id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ title, description }),
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <View>
        <View style={styles.scroll}>
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
                onPress={() => setModalOpen(true)}
              />
            </View>
          </View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalOpen}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalOpen(!modalOpen);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                {/* <Text style={styles.modalText}>Hello World!</Text> */}
                <TextInput
                  placeholder="Title"
                  placeholderTextColor="#ffffff"
                  style={styles.txtInput}
                  onChangeText={(text) => setTitle(text)}
                  defaultValue={post.title}
                />
                <TextInput
                  placeholder="Description"
                  placeholderTextColor="#ffffff"
                  style={styles.txtInput}
                  onChangeText={(text) => setDescription(text)}
                  defaultValue={post.description}
                />
                <View style={{ flexDirection: "row" }}>
                  <TouchableHighlight
                    style={[styles.button, styles.buttonUpdate]}
                    onPress={() => updatePost(post.title, post.description)}
                  >
                    <Text style={styles.textStyle}>Update</Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalOpen(!modalOpen)}
                  >
                    <Text style={styles.textStyle}>Cancel</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
          </Modal>
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "red",
  },
  buttonUpdate: {
    backgroundColor: "green",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  txtInput: {
    color: "black",
    padding: 5,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
    alignSelf: "flex-start",
    width: 200,
  },
});
