import { useState } from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function Map() {
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
