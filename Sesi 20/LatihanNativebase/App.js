import React, { useEffect, useState } from "react";
import {
  NativeBaseProvider,
  Box,
  HStack,
  VStack,
  Text,
  Pressable,
  ScrollView,
  Image,
} from "native-base";

var count = 0;
export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (count < 20) {
      fetch("https://randomuser.me/api")
        .then((response) => response.json())
        .then((data) =>
          setUsers(
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
    <NativeBaseProvider>
      <Box bg="primary.600" py={4} px={3} width={375} width="100%">
        <Text color="white" fontSize={30} fontWeight="bold">
          Customers
        </Text>
      </Box>
      <Box>
        <ScrollView backgroundColor="#c2b8a3" p={10}>
          {users.map((user, idx) => (
            <Box backgroundColor="#fef7dc" p={10} mb={5} rounded="md" key={idx}>
              <Image
                source={{
                  uri: user.img,
                }}
              />
              <Text fontSize={20} fontWeight="bold">
                {user.name}
              </Text>
              <Text>{user.location}</Text>
              <Text>{user.email}</Text>
            </Box>
          ))}
        </ScrollView>
      </Box>
    </NativeBaseProvider>
  );
}
