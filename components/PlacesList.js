import { FlatList, StyleSheet, View } from "react-native";
import PlaceItem from "./PlaceItem";

export default function PlacesList({ places }) {
  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>No palces added yet!</Text>
      </View>
    );
  }
  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ itemData }) => (
        <PlaceItem
          place={item /* item has structore of defined class Place*/}
        />
      )}
    />
  );
}
const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    fontSize: 16,
  },
});
