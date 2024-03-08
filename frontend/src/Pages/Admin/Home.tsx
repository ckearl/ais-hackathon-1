import React, { useContext } from "react";
import { ScrollView, Text, View } from "react-native";
import styles from "../../Styles";
import { UpcomingEvents } from "../../Components/Events";
import EventContext from "../../Context/EventContext";
import { A } from "@expo/html-elements";

export default function Home() {
  const events = useContext(EventContext).upcomingEvents;
  return (
    <ScrollView>
      <View style={styles.page}>
        <Text style={styles.h1}>Home</Text>
        <UpcomingEvents />
      </View>
    </ScrollView>
  );
}
