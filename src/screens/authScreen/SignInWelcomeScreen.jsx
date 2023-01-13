import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-swiper";
import { Button } from "react-native-elements";
import { Colors } from "../../globle/Styles";

const SignInWelcomeScreen = ({ navigation }) => {
  const imageSource = require("../../../assets/Splashscreen1.png");
  const imageSource2 = require("../../../assets/Splashscreen2.png");
  const imageSource3 = require("../../../assets/Splashscreen3.png");

  const goToSignIn = () => {
    navigation.navigate("SignInScreen");
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#FF8344" }}>
      <Swiper style={styles.wrapper} showsButtons loop={true} autoplay={true}>
        <ImageBackground
          testID="Hello"
          style={styles.slide1}
          source={imageSource}
        >
          <View style={{ marginTop: 70 }}>
            <Text style={styles.text}>
              {"Choose your favorite dishes from"}
            </Text>
            <Text style={styles.text}>
              {"   the nearest restaurant or cafe"}
            </Text>
          </View>
        </ImageBackground>
        <ImageBackground
          testID="Hello"
          style={styles.slide2}
          source={imageSource2}
        >
          <View style={{ marginTop: 70 }}>
            <Text style={styles.text}>{"Test fresh delicious meals"}</Text>
            <Text style={styles.text}>{"    anytime and anywhere"}</Text>
          </View>
        </ImageBackground>
        <ImageBackground
          testID="Hello"
          style={styles.slide3}
          source={imageSource3}
        >
          <View style={{ marginTop: 70 }}>
            <Text style={styles.text}>{"Test fresh delicious meals"}</Text>
            <Text style={styles.text}>{"    anytime and anywhere"}</Text>
          </View>
        </ImageBackground>
      </Swiper>
      <View
        style={{
          marginHorizontal: 20,
          marginVertical: 5,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ alignItems: "flex-start" }}>
          <Button
            title="Sign-In an account"
            buttonStyle={styles.createButton}
            titleStyle={styles.createButtonTitle}
            onPress={goToSignIn}
          />
        </View>
        <View
          style={{
            alignItems: "flex-end",
          }}
        >
          <Button
            title="Create an account"
            buttonStyle={styles.createButton1}
            titleStyle={styles.createButtonTitle1}
          />
        </View>
      </View>
    </View>
  );
};

export default SignInWelcomeScreen;
const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#FF8344",
  },
  slide2: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF8344",
    width: "100%",
    height: "100%",
  },
  slide3: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF8344",
    width: "100%",
    height: "100%",
  },
  text: {
    color: "#fff",
    fontSize: 18,
  },
  createButton: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    height: 50,
    width: 150,
    marginBottom: 20,
  },
  createButtonTitle: {
    color: Colors.buttons,
    fontSize: 15,
    fontWeight: "400",
  },
  createButton1: {
    backgroundColor: "#FF8344",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    height: 50,
    borderColor: "white",
    marginBottom: 20,
    borderWidth: 2,
  },
  createButtonTitle1: {
    color: "white",
    fontSize: 15,
    fontWeight: "400",
  },
});
