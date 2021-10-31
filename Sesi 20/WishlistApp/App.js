import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  NativeBaseProvider,
  Box,
  Text,
  FormControl,
  Input,
  Stack,
  AddIcon,
  Button,
  Center,
  Icon,
  VStack,
  View,
  Checkbox,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import BouncyCheckBox from "react-native-bouncy-checkbox";

export default function App() {
  const [items, setItems] = useState("");
  const [itemsList, setItemsList] = useState([]);
  const [checked, setChecked] = useState([]);
  // const [garis, setGaris] = useState("none");

  const [garis, setGaris] = useState([]);

  const addItem = () => {
    setItemsList([...itemsList, items]);
    setItems("");
    setGaris(garis.concat(["none"]));
    console.log(itemsList.length);
  };

  const deleteItem = (index) => {
    if (checked.length != 0) {
      let item = [];
      let garisItem = [];
      checked.forEach((i) => {
        item.push(itemsList[i]);
        garisItem.push(i);
      });
      setItemsList(itemsList.filter((i) => item.indexOf(i) === -1));
      setGaris(garis.filter((i) => garisItem[i] === i));
      // console.log(item);
    } else {
      setItemsList(
        itemsList.filter(function (item) {
          return item != itemsList[index];
        })
      );
    }
    setChecked([]);
  };

  const check = (e, index) => {
    if (e) {
      setChecked(checked.concat([index]));
      //setGaris("line-through");
      garis[index] = "line-through";
      setGaris(garis);
    } else {
      setChecked(
        checked.filter(function (item) {
          return item != index;
        })
      );
      // setGaris("none");
      garis[index] = "none";
      setGaris(garis);
    }
    //console.log(checked);
    console.log(index);
    console.log(garis);
  };

  return (
    <NativeBaseProvider>
      <Box>
        <Box py={4} px={3} width={375} width="100%">
          <Text fontSize={30} fontWeight="bold" color="primary.400">
            Wishlist
          </Text>
        </Box>
        <FormControl>
          <Stack>
            <Input
              InputRightElement={
                <Button
                  variant="ghost"
                  size="sm"
                  onPress={addItem}
                  disabled={items.length < 1}
                >
                  <Icon
                    as={<MaterialIcons name="add" />}
                    size={6}
                    ml="2"
                    mr="2"
                  />
                </Button>
              }
              mx="5"
              w={{
                base: "90%",
                md: "25%",
              }}
              width="100%"
              size="lg"
              placeholder="Item baru"
              onChangeText={(text) => setItems(text)}
              value={items}
            />
          </Stack>
        </FormControl>
        <Box py={4} px={3} width={375} width="100%" mx={3}>
          {itemsList.map((item, index) => {
            return (
              <VStack mb="3" key={index} alignItems="flex-start">
                <Checkbox onChange={(e) => check(e, index)} mr="5">
                  <Text style={{ textDecorationLine: garis[index] }}>
                    {item}
                  </Text>
                  <Button
                    variant="ghost"
                    size="sm"
                    alignItems="flex-end"
                    onPress={() => deleteItem(index)}
                  >
                    <Icon
                      as={<MaterialIcons name="delete" />}
                      size={6}
                      ml="2"
                      mr="2"
                    />
                  </Button>
                </Checkbox>
              </VStack>
            );
          })}
        </Box>
      </Box>
    </NativeBaseProvider>
  );
}
