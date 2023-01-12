import { StyleSheet, View, Text, TextInput } from "react-native";
import { Header } from "../../components/Header";
import { Colors, title } from "../../globle/Styles";
import * as animatable from "react-native-animatable";
import { Icon } from "react-native-elements";
import { useState, useRef } from "react";

function SignIn() {
  const [textInputFocused, setTextInputFocused] = useState(false);
  const textInput1 = useRef(1);
  const textInput2 = useRef(2);
  return (
    <View style={styles.container}>
      <Header title={"SigIn"} type="arrow-left" />
      <View>
        <Text style={title}>{"Sign-In"}</Text>
      </View>
      <View style={{ alignItems: "center", marginTop: 10 }}>
        <Text style={styles.text1}>
          {"Please enter your email and password"}
        </Text>
        <Text style={styles.text1}>{"Register with your account"}</Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <View>
          <TextInput
            style={styles.textInput1}
            placeholder={"Email"}
            ref={textInput1}
          />
        </View>
        <View style={styles.textInput2}>
          <animatable.View
            animation={textInputFocused ? "" : "fadeInLeft"}
            duration={400}
          >
            <Icon
              name="lock"
              iconStyle={{ color: Colors.grey3 }}
              type="material"
            />
          </animatable.View>
          <TextInput
            style={{ width: "80%" }}
            placeholder={"Password"}
            onFocus={() => {
              setTextInputFocused(false);
            }}
            onBlur={() => {
              setTextInputFocused(true);
            }}
          />
          <animatable.View
            animation={textInputFocused ? "" : "fadeInLeft"}
            duration={400}
          >
            <Icon
              name="visibility-off"
              iconStyle={{ color: Colors.grey3 }}
              type="material"
              style={{ marginRight: 10 }}
              // ref={textInput2}
            />
          </animatable.View>
        </View>
      </View>
    </View>
  );
}
export { SignIn };
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    fontSize: 16,
    fontWeight: "400",
    color: Colors.grey3,
  },
  textInput1: {
    borderRadius: 12,
    marginHorizontal: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#86939e",
    height: 50,
    paddingLeft: 15,
  },
  textInput2: {
    borderRadius: 12,
    marginHorizontal: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#86939e",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    paddingLeft: 15,
  },
});
