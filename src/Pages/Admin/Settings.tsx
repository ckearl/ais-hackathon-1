import React, { useContext } from "react";
import { Button, Text, View } from "react-native";
import UserContext from "../../Context/UserContext";

export default function Settings() {
  const { isAdmin, setAdminView } = useContext(UserContext);

  return (
    <View style={styles.page}>
      <Text style={styles.h1}>Settings</Text>
      <Text style={styles.p}>View your settings here</Text>

      <Button
        title="go to user view"
        onPress={() => {
          setAdminView(false);
        }}
      />
    </View>
  );
}

const styles = {
  page: {
    display: "flex",
    alignItems: "center",
  },
  h1: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  p: {
    paddingBottom: 10,
  },
} as const;
