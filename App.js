import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { colors } from "./src/style/Colors";
import Index from "./navigation";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navigationContainer}>
        <Index />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blackMain,
    height: "100%",
    //flex: 1, // Assure que SafeAreaView prend tout l'espace
  },
  navigationContainer: {
    height: "100%",
    //flex: 1, // Assure que le View prend tout l'espace disponible
  },
});


