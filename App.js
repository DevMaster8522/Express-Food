import { StyleSheet, View, StatusBar } from "react-native";
import { Colors } from "./src/globle/Styles";
import RootNavigation from "./src/Navigation/RootNavigation";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.statusbar} />
      <RootNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  StatusBar: {},
});
