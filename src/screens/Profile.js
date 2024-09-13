import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { useRoute } from "@react-navigation/native";
import NavBar from "../components/Navbar/Navbar";
import { colors } from "../style/Colors";
import Reload from "../components/Reload";
const Profile = () => {
  const route = useRoute();
  const screenName = route.name;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Profile</Text>
      <Reload />
      <NavBar screenName={screenName} />
    </SafeAreaView>
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
export default Profile;
