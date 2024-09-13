import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../src/screens/Home";
import Alphabet from "../src/screens/Alphabet";
import Defi from "../src/screens/Defi";
import Profile from "../src/screens/Profile";

const Stack = createStackNavigator();
const options = {
  headerShown: false,
  presentation: "transparentModal",
  animationEnabled: false,
};

const Index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={options} />
        <Stack.Screen name="Alphabet" component={Alphabet} options={options} />
        <Stack.Screen name="Defi" component={Defi} options={options} />
        <Stack.Screen name="Profile" component={Profile} options={options} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Index;
