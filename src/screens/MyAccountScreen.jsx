import {
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
} from "react-native";
import { Icon } from "react-native-elements";
import { Colors } from "../globle/Styles";
import { CustomCamera } from "../components/CusotmCamera";
import MediaPicker from "../components/MediaPicker";
import { useState } from "react";

const MyAccountScreen = ({ focussed, size }) => {
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
      </View>

      <View style={styles.home}>
        <Icon
          type="material-community"
          name="home"
          color={focussed ? "blue" : Colors.grey4}
          size={size}
        />
      </View>
      <View style={styles.home}>
        <Icon
          type="material-community"
          name="home"
          color={focussed ? "blue" : Colors.grey4}
          size={size}
        />
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
  home: {
    marginTop: 20,
    // backgroundColor: Colors.grey2,
    width: "100%",
    height: 50,
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
});
