import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function Map() {
  // Object like this must be passed to initialRegion
  const region = {
    latitude: 41.7151,
    longitude: 44.8271,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  // MapView supports style prop, it needs to be filled, otherwise map will not be visible
  return <MapView style={styles.map} initialRegion={region}></MapView>;
}
const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
