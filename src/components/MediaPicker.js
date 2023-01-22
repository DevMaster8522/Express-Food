import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Modal from "react-native-modal";
import * as ImagePicker from "expo-image-picker";
import { Colors } from "../globle/Styles";

const MediaPicker = ({
  show,
  onClose,
  onCameraPressed,
  onImagePickerSelected,
}) => {
  const CameraSource = require("../../assets/camera.png");
  const imageSource = require("../../assets/gallery.png");
  const pickImageFromGallery = () => {
    ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    })
      .then((Response) => {
        if (Response.cancelled) {
          alert("Image Not Selected");
        } else {
          onImagePickerSelected(Response);
        }
      })
      .catch((error) => {
        alert("Please try again");
      });
  };

  return (
    <View>
      <Modal isVisible={show} animationIn={"wobble"} animationOut={"wobble"}>
        <View
          style={{
            width: "100%",
            height: "40%",
            backgroundColor: "white",
            borderRadius: 10,
          }}
        >
          <Text style={styles.titleName}> Upload Photo</Text>
          <View style={styles.iconCon}>
            <TouchableOpacity onPress={onCameraPressed}>
              <Image
                source={CameraSource}
                style={{
                  width: 110,
                  height: 110,
                  marginVertical: -10,
                }}
              />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "700",
                  paddingHorizontal: 30,
                }}
              >
                Camera
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={pickImageFromGallery}>
              <Image source={imageSource} style={{ width: 85, height: 85 }} />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "700",
                  marginLeft: 23,
                  paddingVertical: 5,
                }}
              >
                Gallery
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.cncelBtn} onPress={onClose}>
            <View>
              <Text style={{ color: "white", fontWeight: "700" }}>Cancel </Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default MediaPicker;

const styles = StyleSheet.create({
  cncelBtn: {
    paddingHorizontal: 130,
    height: 45,
    marginVertical: 10,
    borderRadius: 10,
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: Colors.buttons,
  },
  titleName: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "300",
    alignSelf: "center",
    marginBottom: 15,
  },
  iconCon: {
    width: "90%",
    height: "50%",
    alignSelf: "center",
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
