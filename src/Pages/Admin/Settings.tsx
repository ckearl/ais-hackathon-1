import React, { useContext } from "react";
import { Button, Text, View } from "react-native";
import UserContext from "../../Context/UserContext";
import styles from "../../Styles";

export default function Settings() {
  const { isAdmin, setAdminView } = useContext(UserContext);

  return (
    <View style={styles.page}>
      <Text style={styles.h1}>Settings</Text>
      <Text style={styles.subHeading}>View your settings here</Text>

      <Button
        title="go to user view"
        onPress={() => {
          setAdminView(false);
        }}
      />
    </View>
  );
}
