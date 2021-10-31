// //tanpa nativebase
// import React from "react";
// import { Pressable, StyleSheet, Text, View, Image } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.topContainer}>
//         <View style={styles.metaContainer}>
//           <View>
//             <Text style={styles.timings}>Today @ 9PM</Text>
//             <Text style={styles.description}>Let's talk about avatar!</Text>
//           </View>
//           <Pressable style={styles.button}>
//             <Text style={styles.buttonText}>Remind me</Text>
//           </Pressable>
//         </View>
//         <Image
//           source={{
//             uri: "https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg",
//           }}
//           style={styles.avatar}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#0891b2",
//     paddingVertical: 16,
//     paddingHorizontal: 12,
//     borderRadius: 5,
//     alignSelf: "center",
//     width: 375,
//     maxWidth: "100%",
//   },
//   timings: {
//     color: "#fff",
//     fontSize: 14,
//   },
//   metaContainer: {
//     justifyContent: "space-between",
//   },
//   topContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   avatar: {
//     height: 100,
//     width: 100,
//     borderRadius: 100,
//   },
//   description: {
//     color: "white",
//     marginTop: 5,
//     fontSize: 20,
//   },
//   button: {
//     backgroundColor: "#22d3ee",
//     alignSelf: "flex-start",
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 3,
//   },
//   buttonText: {
//     fontWeight: "bold",
//     color: "white",
//     textTransform: "uppercase",
//     fontSize: 14,
//   },
// });

import React from "react";
import {
  NativeBaseProvider,
  Box,
  HStack,
  VStack,
  Text,
  Pressable,
  Image,
} from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Box
        bg="primary.600"
        py={4}
        px={3}
        rounded="md"
        alignSelf="center"
        width={375}
        maxWidth="100%"
      >
        <HStack justifyContent="space-between">
          <Box justifyContent="space-between">
            <VStack space={2}>
              <Text fontSize="sm" color="white">
                Today @ 9PM
              </Text>
              <Text color="white" fontSize="lg">
                Let's talk about avatar !
              </Text>
            </VStack>
            <Pressable
              rounded="sm"
              bg="primary.400"
              alignSelf="flex-start"
              py={2}
              px={3}
            >
              <Text
                textTransform="uppercase"
                fontSize={"sm"}
                fontWeight="bold"
                color="white"
              >
                Remind me
              </Text>
            </Pressable>
          </Box>
          <Image
            source={{
              uri: "https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg",
            }}
            alt="Aang flying and surrounded by clouds"
            height={100}
            rounded="full"
            width={100}
          />
        </HStack>
      </Box>
    </NativeBaseProvider>
  );
}
