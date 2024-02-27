import Reac from "react";
import { Text, View } from "react-native";
import EventHistory from "../Components/EventHistory";
import styles from "../../Styles";

export default function Dash() {
  return (
    <View style={styles.page}>
      <Text style={styles.h1}>Dashboard</Text>
      <EventHistory />
    </View>
  );
}
