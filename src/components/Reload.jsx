import { StyleSheet, Text, View, DevSettings, Pressable } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { colors } from "../style/Colors";

const Reload = () => {
  const handleReload = () => {
    DevSettings.reload();
    console.warn("reload");
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.reload} onPress={handleReload}>
        <FontAwesome6 name="repeat" size={24} color={colors.white} />
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  reload: {
    backgroundColor: colors.red,
    padding: 5,
    borderRadius: 5,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: "100%",
    position: "absolute",
    top: 50,
    left: 10,
  },
});
export default Reload;
