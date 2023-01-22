import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { useState, useEffect, useRef } from "react";
import { Camera, CameraType } from "expo-camera";
import Modal from "react-native-modal";
import { Ionicons } from "@expo/vector-icons";

const CustomCamera = ({ show, onClose, onPictureTaken }) => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const cameraRef = useRef();
  useEffect(() => {
    Camera.requestCameraPermissionsAsync();
  }, []);

  const toggleCameraType = () => {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  };
  const CameraSource = require("../../assets/flipcamera.png");
  const __takePicture = () => {
    if (cameraRef) {
      cameraRef.current
        .takePictureAsync()
        .then((response) => {
          onPictureTaken(response);
        })
        .catch((error) => {
          alert(error);
        });
    }
  };
  return (
    <View>
      <Modal
        isVisible={show}
        animationIn={"slideInUp"}
        animationOut={"slideOutDown"}
      >
        <View
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "white",
            borderRadius: 10,
          }}
        >
          <Camera style={styles.camera} type={type} ref={cameraRef}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={toggleCameraType}
              >
                <View style={styles.reverseCamera}>
                  <Image
                    source={CameraSource}
                    style={{
                      width: 35,
                      height: 35,
                      alignSelf: "center",
                      marginTop: 3,
                    }}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={onClose}>
                <Ionicons name={"close-circle"} color={"white"} size={50} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={__takePicture}>
              <View
                style={{
                  alignSelf: "center",
                  marginTop: "170%",
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  borderWidth: 5,
                  alignItems: "center",
                  borderColor: "white",
                }}
              ></View>
            </TouchableOpacity>
          </Camera>
        </View>
      </Modal>
    </View>
  );
};

export { CustomCamera };

const styles = StyleSheet.create({
  camera: {
    flex: 1,
  },
  flipButton: {
    height: 100,
    width: 100,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonCon: {
    height: "90%",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    marginHorizontal: 25,
  },
  reverseCamera: {
    alignSelf: "center",
    width: 40,
    height: 40,
    backgroundColor: "white",
    borderRadius: 20,
    marginHorizontal: 10,
    marginVertical: 10,
  },
});
