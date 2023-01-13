import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Colors, parameters } from "../globle/Styles";
import { Icon } from "react-native-elements";
function Header({ title, type, navigation }) {
  return (
    <View style={styles.header}>
      <View style={styles.headerIcon}>
        <Icon
          type="material-community"
          name={type}
          color={Colors.headerText}
          size={28}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}

export { Header };

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.buttons,
    flexDirection: "row",
    height: parameters.headerHeight,
  },
  headerText: {
    color: Colors.headerText,
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 30,
  },
  headerIcon: {
    marginLeft: 20,
  },
});
