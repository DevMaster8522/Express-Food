import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Header } from "../../components/Header";
import { Colors, parameters, title } from "../../globle/Styles";
import * as animatable from "react-native-animatable";
import { Button, Icon, SocialIcon } from "react-native-elements";
import { useState, useRef } from "react";
import ClientTab from "../../Navigation/ClientTab";

function SignInScreen({ navigation }) {
  const [textInputFocused1, setTextInputFocused1] = useState(false);
  const [textInputFocused2, setTextInputFocused2] = useState(false);
  const textInput1 = useRef(1);
  const textInput2 = useRef(2);
  const goToHome = () => {
    navigation.navigate(ClientTab);
  };
  return (
    <ScrollView style={styles.container}>
      <Header title={"SigIn"} type="arrow-left" navigation={navigation} />
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
        <View style={styles.textInput1}>
          <animatable.View></animatable.View>
          <TextInput
            placeholder={"Email"}
            ref={textInput1}
            style={{ width: "90%" }}
            onFocus={() => {
              setTextInputFocused2(false);
            }}
            onBlur={() => {
              setTextInputFocused2(true);
            }}
          />
          <animatable.View
            animation={textInputFocused2 ? "" : "fadeInLeft"}
            duration={400}
            style={{ marginRight: 10 }}
          >
            <Icon
              name="mail"
              iconStyle={{ color: Colors.grey3 }}
              type="material"
            />
          </animatable.View>
        </View>
        <View style={styles.textInput2}>
          <animatable.View
            animation={textInputFocused1 ? "" : "fadeInLeft"}
            duration={400}
          ></animatable.View>
          <TextInput
            style={{ width: "90%" }}
            placeholder={"Password"}
            onFocus={() => {
              setTextInputFocused1(false);
            }}
            onBlur={() => {
              setTextInputFocused1(true);
            }}
          />
          <animatable.View
            animation={textInputFocused1 ? "" : "fadeInLeft"}
            duration={400}
          >
            <Icon
              name="visibility-off"
              iconStyle={{ color: Colors.grey3 }}
              type="material"
              style={{ marginRight: 10 }}
            />
          </animatable.View>
        </View>
        <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
          <Button
            title={"SIGN IN"}
            buttonStyle={parameters.buttonStyle}
            titleStyle={parameters.buttonTitleStyle}
            onPress={goToHome}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.text3}>{"Forget Password?"}</Text>
        </TouchableOpacity>
        <Text style={styles.text4}>{"OR"}</Text>
      </View>
      <View style={{ marginHorizontal: 10, marginTop: 10 }}>
        <SocialIcon
          title="Login with Facebook"
          button
          type="facebook"
          style={styles.SocialIcon}
        />
      </View>
      <View style={{ marginHorizontal: 10, marginTop: 10 }}>
        <SocialIcon
          title="Login with Google"
          button
          type="google"
          style={styles.SocialIcon}
        />
      </View>
      <View>
        <Text style={styles.text5}>{"New on Express Food"}</Text>
      </View>
      <View style={{ alignItems: "flex-end", marginRight: 20 }}>
        <Button
          title="Create an account"
          buttonStyle={styles.createButton}
          titleStyle={styles.createButtonTitle}
        />
      </View>
    </ScrollView>
  );
}
export { SignInScreen };
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
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
  text3: {
    fontSize: 15,
    fontWeight: "300",
    textDecorationLine: "underline",
    alignSelf: "center",
  },
  text4: {
    fontSize: 15,
    fontWeight: "700",
    alignSelf: "center",
    marginTop: 15,
  },
  SocialIcon: {
    borderRadius: 12,
    height: 50,
  },
  text5: {
    fontSize: 15,
    fontWeight: "300",
    textDecorationLine: "underline",
    marginHorizontal: 20,
    marginTop: 10,
  },
  createButton: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    height: 45,
    borderColor: Colors.buttons,
    marginTop: 10,
    borderWidth: 2,
  },
  createButtonTitle: {
    color: Colors.buttons,
    fontSize: 15,
    fontWeight: "400",
  },
});
