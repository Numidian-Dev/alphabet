import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Pressable } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../style/Colors";

const NavBar = ({ screenName }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.replace("Home")}>
        <AntDesign
          name="home"
          size={30}
          color={screenName === "Home" ? colors.white : colors.grayThird}
        />
      </Pressable>
      <Pressable onPress={() => navigation.replace("Alphabet")}>
        <MaterialCommunityIcons
          name="book-open-page-variant-outline"
          size={30}
          color={screenName === "Alphabet" ? colors.white : colors.grayThird}
        />
      </Pressable>
      <Pressable onPress={() => navigation.replace("Defi")}>
        <MaterialCommunityIcons
          name="calendar-check-outline"
          size={30}
          color={screenName === "Defi" ? colors.white : colors.grayThird}
        />
      </Pressable>
      <Pressable onPress={() => navigation.replace("Profile")}>
        <FontAwesome6
          name="user"
          size={30}
          color={screenName === "Profile" ? colors.white : colors.grayThird}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    position: "absolute",
    bottom: 50,
    borderRadius: 30,
    backgroundColor: colors.blackSecondary,
    borderColor: colors.graySecondary,
    borderWidth: 1,
  },
});

export default NavBar;
