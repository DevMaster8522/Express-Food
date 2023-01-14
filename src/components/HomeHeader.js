import { Icon, withBadge } from "react-native-elements";
import { StyleSheet, Text, View } from "react-native";
import { Colors, parameters } from "../globle/Styles";
const HomeHeader = () => {
  const BadgeIcon = withBadge(0)(Icon);
  return (
    <View style={styles.Header}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginLeft: 15,
        }}
      >
        <Icon
          type="material-community"
          name="menu"
          color={Colors.cardbackground}
          size={32}
        />
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginLeft: 15,
        }}
      >
        <Text style={styles.text1}> {"Express Food"}</Text>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "flex-end",
          marginRight: 15,
        }}
      >
        <BadgeIcon
          type="material-community"
          name="cart"
          color={Colors.cardbackground}
          size={32}
        />
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  Header: {
    backgroundColor: Colors.buttons,
    height: parameters.headerHeight,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text1: {
    fontSize: 25,
    color: Colors.cardbackground,
    fontWeight: "bold",
  },
});
