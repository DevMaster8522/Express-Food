import { StyleSheet, Text, View } from "react-native";
import HomeHeader from "../components/HomeHeader";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HomeHeader />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
