import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import { View } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
import Ionicons from "react-native-vector-icons/Ionicons";

import Home from "./Home";
import Profile from "./Profile";

const homeName = "Home";
const profileName = "Profile";

const Tab = createBottomTabNavigator();

// const Tab = createBottomTabNavigator(
//   {
//     HomePage: {
//       screen: Home,
//       navigationOptions: {
//         tabBarIcons: ({ tintColor }) => (
//           <View>
//             <Icon style={[{ color: tintColor }]} name={"home"} size={25} />
//           </View>
//         ),
//       },
//     },
//     ProfilePage: {
//       screen: Profile,
//       navigationOptions: {
//         tabBarIcons: ({ tintColor }) => (
//           <View>
//             <Icon style={[{ color: tintColor }]} name={"profile"} size={25} />
//           </View>
//         ),
//       },
//     },
//   },
//   {
//     initialRouteName: "HomePage",
//     activeColor: "#f0edf6",
//     inactiveColor: "#226557",
//     barStyle: { backgroundColor: "#f69b31" },
//   }
// );

const Router = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={homeName}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let rn = route.name;

              if (rn === homeName) {
                iconName = focused ? "home" : "home-outline";
              } else if (rn === profileName) {
                iconName = focused ? "person" : "person-outline";
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name={homeName} component={Home} />
          <Tab.Screen name={profileName} component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Router;
