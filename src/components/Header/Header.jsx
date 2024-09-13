import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { colors } from "../../style/Colors";

const Header = () => {
  return <View style={styles.container}></View>;
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 150,
    borderBottomColor: colors.graySecondary,
    borderBottomWidth: 1,
    backgroundColor: colors.blackSecondary,
    position: "absolute",
    top: 0,
  },
  text: {
    color: colors.white,
  },
});

export default Header;
