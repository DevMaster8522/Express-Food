import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AuthStack, Navigation } from "./authStack";

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
