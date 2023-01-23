import {
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
  Switch,
} from "react-native";
import { Icon } from "react-native-elements";
import { Colors } from "../globle/Styles";
import { CustomCamera } from "../components/CusotmCamera";
import MediaPicker from "../components/MediaPicker";
import { useState } from "react";
import { HomeScreen } from "./HomeScreen";

const MyAccountScreen = ({ focussed, size, navigation }) => {
  const [isPickerShown, setIsPickerShown] = useState(false);
  const [isCameraShown, setIsCameraShown] = useState(false);
  const [imageFromPicker, setImageFromPicker] = useState("");
  const [imageFromCamera, setImageFromCamera] = useState("");
  const onImagePress = () => {
    setIsPickerShown(!isPickerShown);
  };
  const onImageCameFromGallery = (Image) => {
    setImageFromPicker(Image.uri);
    setIsPickerShown(false);
  };
  const profileImage = require("../../assets/Profile1.png");

  return (
    <View style={styles.mainCon}>
      <View style={styles.uperCon}>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <TouchableOpacity onPress={onImagePress} style={styles.imageCon}>
            <ImageBackground source={profileImage} style={styles.profileView}>
              <Image
                source={{ uri: imageFromPicker || imageFromCamera }}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 40,
                }}
                resizeMode={"contain"}
              />
            </ImageBackground>
          </TouchableOpacity>
          <View style={styles.nameCon}>
            <Text style={styles.Name}>{"Mohsin khan"}</Text>
            <Text style={styles.Email}>{"mohsin@gmail.com"}</Text>
          </View>
        </View>
        <View style={styles.secCon}>
          <View style={styles.Follower}>
            <Text style={styles.Name}>{"1"}</Text>
            <Text style={styles.followersCon}>{"My Followers"}</Text>
          </View>
          <View style={styles.Follower}>
            <Text style={styles.Name}>{"0"}</Text>
            <Text style={styles.followersCon}>{"Shopping Cart"}</Text>
          </View>
        </View>
        <View style={{ marginTop: 60 }}>
          <TouchableOpacity style={{ alignItems: "center", marginTop: 5 }}>
            <View style={styles.flex2}>
              <View style={{ marginLeft: 10, alignSelf: "center" }}>
                <Icon
                  type="material-community"
                  name="credit-card-outline"
                  color={focussed ? "blue" : Colors.grey2}
                  size={size}
                />
              </View>
              <Text style={styles.text1}>Payment</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: "center", marginTop: 5 }}>
            <View style={styles.flex2}>
              <View style={{ marginLeft: 10, alignSelf: "center" }}>
                <Icon
                  type="material-community"
                  name="tag-heart"
                  color={focussed ? "blue" : Colors.grey2}
                  size={size}
                />
              </View>
              <Text style={styles.text1}>Promotion</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: "center", marginTop: 5 }}>
            <View style={styles.flex2}>
              <View style={{ marginLeft: 10, alignSelf: "center" }}>
                <Icon
                  type="material-community"
                  name="cog-outline"
                  color={focussed ? "blue" : Colors.grey2}
                  size={size}
                />
              </View>
              <Text style={styles.text1}>Settings</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: "center", marginTop: 5 }}>
            <View style={styles.flex2}>
              <View style={{ marginLeft: 10, alignSelf: "center" }}>
                <Icon
                  type="material-community"
                  name="lifebuoy"
                  color={focussed ? "blue" : Colors.grey2}
                  size={size}
                />
              </View>
              <Text style={styles.text1}>{"Helps"}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.switchText}>
          <Text
            style={{ fontSize: 15, fontWeight: "600", color: Colors.grey2 }}
          >
            Dark Theme
          </Text>
          <View style={{ paddingRight: 10 }}>
            <Switch
              trackColor={{ false: "#767577", true: "#81boff" }}
              thumbColor="#f4f3f4"
            />
          </View>
        </View>
        <TouchableOpacity
          style={{
            alignItems: "center",
          }}
        >
          <View style={styles.signOutBtn}>
            <View style={{ marginLeft: 10, alignSelf: "center" }}>
              <Icon
                type="material-community"
                name="logout-variant"
                color={focussed ? "blue" : Colors.cardbackground}
                size={size}
              />
            </View>
            <Text style={styles.text2}>{"Sign-out"}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <CustomCamera
        show={isCameraShown}
        onClose={() => setIsCameraShown(false)}
        onPictureTaken={(Response) => {
          setIsPickerShown(false);
          setIsCameraShown(false);
          setImageFromCamera(Response.uri);
        }}
      />
      <MediaPicker
        show={isPickerShown}
        onClose={onImagePress}
        onImagePickerSelected={(ImageSelected) => {
          onImageCameFromGallery(ImageSelected);
        }}
        onCameraPressed={() => {
          setIsCameraShown(!isCameraShown);
        }}
      />
    </View>
  );
};

export default MyAccountScreen;

const styles = StyleSheet.create({
  mainCon: {
    flex: 1,
  },
  uperCon: {
    width: "100%",
    height: "30%",
    backgroundColor: Colors.buttons,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    shadowColor: Colors.grey2,
    shadowOffset: 20,
  },

  profileView: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "white",
    marginTop: 20,
    marginLeft: 20,
  },
  Name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  Email: {
    fontSize: 18,
    fontWeight: "300",
    color: "white",
  },
  nameCon: {
    flexDirection: "column",
    alignItems: "center",
    marginLeft: 30,
    marginTop: 40,
  },
  Follower: {
    flexDirection: "column",
    marginLeft: 30,
    marginTop: 20,
    alignItems: "center",
  },
  followersCon: {
    flexDirection: "column",
    alignItems: "center",
    fontSize: 14,
    fontWeight: "300",
    color: "white",
  },
  secCon: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginRight: 20,
    marginTop: 10,
  },
  flex2: {
    // backgroundColor: Colors.grey5,
    width: "95%",
    height: 40,
    borderRadius: 5,
    flexDirection: "row",
  },
  text1: {
    marginLeft: 20,
    alignSelf: "center",
    fontSize: 15,
    fontWeight: "600",
    color: Colors.grey3,
  },
  switchText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 25,
    paddingRight: 10,
    paddingVertical: 5,
    marginTop: 10,
  },
  text2: {
    color: Colors.cardbackground,
    marginLeft: 10,
    alignSelf: "center",
    fontSize: 15,
    fontWeight: "600",
  },
  signOutBtn: {
    backgroundColor: Colors.buttons,
    width: "40%",
    height: 40,
    borderRadius: 10,
    flexDirection: "row",
    marginTop: 100,
    justifyContent: "center",
    marginRight: 10,
  },
});
