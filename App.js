import { StyleSheet, View, StatusBar } from "react-native";
import { Colors } from "./src/globle/Styles";
import { SignIn } from "./src/screens/authScreen/SignInScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.statusbar} />
      <SignIn />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  StatusBar: {},
});
