import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Button,
} from "react-native";
import Post from "./Post";

export default function Posts() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posts, setPosts] = useState([]);

  const addPost = () => {
    setTitle("");
    setDescription("");
    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ title, description }),
    })
      .then((res) => res.json())
      .then((data) => setPosts([...posts, data]))
      .catch((err) => console.log(err));
  };

  const deleteFromState = (id) => {
    let tmp = [...posts];
    tmp.splice(id, 1);
    setPosts(tmp);
  };

  return (
    <>
      <View style={styles.scroll}>
        <TextInput
          placeholder="Title"
          placeholderTextColor="#ffffff"
          style={styles.txtInput}
          onChangeText={(text) => setTitle(text)}
          defaultValue={title}
        />
        <TextInput
          placeholder="Description"
          placeholderTextColor="#ffffff"
          style={styles.txtInput}
          onChangeText={(text) => setDescription(text)}
          defaultValue={description}
        />
        <Button
          color="blue"
          title="save"
          onPress={addPost}
          disabled={title.length < 1 || description.length < 1}
        />
      </View>
      <ScrollView style={styles.scroll}>
        {posts.map((post, idx) => (
          <Post
            key={post.id}
            post={post}
            idx={idx}
            deleteFromState={deleteFromState}
          />
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: "#7c9473",
    padding: 10,
  },
  txtInput: {
    color: "#ffffff",
    padding: 5,
    borderWidth: 1,
    borderColor: "#ffffff",
    marginBottom: 5,
  },
});
