import * as React from "react";
import { Text, View } from "react-native";
import Svg, { G, Path } from "react-native-svg";
import { colors } from "../../style/Colors";
import ButtonLevels from "./Button";
const Levels = (props) => (
  <View>
    <ButtonLevels level={"I"} state={parseInt(10)} />
  </View>
);

export default Levels;
