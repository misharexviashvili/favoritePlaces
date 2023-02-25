// FIXME: THIS COMPONENT DOES NOT WORK AS INTENDED, TAKEN IMAGE DOES NOT GET STORED
import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
  requestCameraPermissionsAsync,
} from "expo-image-picker";
import { useEffect, useState } from "react";
import { Colors } from "../../constants/colors";
import OutlinedButton from "../UI/OutlinedButton";

function ImagePicker({ onTakeImage }) {
  const [pickedImage, setPickedImage] = useState();
  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();
  useEffect(() => {
    requestCameraPermissionsAsync();
    [];
  });
  async function takeImageHandler() {
    // const hasPermission = await verifyPermissions();
    // if (!hasPermission) {
    //   return;
    // }
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    console.log(image);
    setPickedImage('https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg?cs=srgb&dl=pexels-pixabay-533769.jpg&fm=jpg');
    onTakeImage('https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg?cs=srgb&dl=pexels-pixabay-533769.jpg&fm=jpg');
  }
  let imagePreview = <Text>No image taken yet.</Text>;

  if (pickedImage) {
    imagePreview = <Image style={styles.image} source={{ uri: pickedImage }} />;
  }
  return (
    <View>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <OutlinedButton onPress={takeImageHandler} icon="camera">
        Take Image
      </OutlinedButton>
    </View>
  );
}

export default ImagePicker;

const styles = StyleSheet.create({
  imagePreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 4,
  },
});
