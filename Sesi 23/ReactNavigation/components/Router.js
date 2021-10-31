import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./Home";
import PostPage from "./PostPage";

const Stack = createBottomTabNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="PostPage" component={PostPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
