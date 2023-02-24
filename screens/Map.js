import { useCallback, useLayoutEffect, useState } from "react";
import { Alert, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import IconButton from "../components/UI/IconButton";

export default function Map({ navigation }) {
  const [selectedLocation, setSelectedLocation] = useState();
  // Object like this must be passed to initialRegion
  const region = {
    latitude: 41.7151,
    longitude: 44.8271,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  function selectLocationHandler(event) {
    // console.log(event);
    // console.log(event.nativeEvent);
    // console.log(event.nativeEvent.coordinate);
    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;
    //  Basically the same as {lat: lat, lng: lng}
    setSelectedLocation({ lat, lng });
  }
  const savePickedLocationHandler = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert("No location picked", "Pick a location by tapping on a map");
      return;
    }
    // This passes data back from map which was open and tapped to AddPlace component (where we choose image, location and so on)
    navigation.navigate("AddPlace", {
      pickedLat: selectedLocation.lat,
      pickedLng: selectedLocation.lng,
    });
  }, [navigation, selectedLocation]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <IconButton
          icon="save"
          size={24}
          color={tintColor}
          onPress={savePickedLocationHandler}
        />
      ),
    });
  }, [navigation, savePickedLocationHandler]);
  // MapView supports style prop, it needs to be filled, otherwise map will not be visible
  return (
    <MapView
      style={styles.map}
      initialRegion={region}
      onPress={selectLocationHandler}
    >
      {selectedLocation && (
        <Marker
          title="Picked Location"
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
          }}
        />
      )}
    </MapView>
  );
}
const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
