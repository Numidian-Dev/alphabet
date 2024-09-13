import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../style/Colors";
import Reload from "../components/Reload";
import NavBar from "../components/Navbar/Navbar";
import { useRoute } from "@react-navigation/native";
import Header from "../components/Header/Header";
import Levels from "../components/Levels/Levels";
const Home = () => {
  const route = useRoute();
  const screenName = route.name;
  return (
    <View style={styles.container}>
      <Header />
      <Levels />
      <Reload />
      <NavBar screenName={screenName} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blackMain,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.white,
  },
});

export default Home;
