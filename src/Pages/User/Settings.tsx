import React, { useContext } from "react";
import { Button, ScrollView, Text, View } from "react-native";
import UserContext from "../../Context/UserContext";
import styles from "../../Styles";

export default function Settings() {
  const { isAdmin, setAdminView } = useContext(UserContext);
  return (
    <ScrollView>
      <View style={styles.page}>
        <Text style={styles.h1}>Settings</Text>
        <Text style={styles.subHeading}>View your settings here</Text>
        {isAdmin && (
          <Button
            title="go to admin view"
            onPress={() => {
              setAdminView(true);
            }}
          />
        )}
      </View>
    </ScrollView>
  );
}
