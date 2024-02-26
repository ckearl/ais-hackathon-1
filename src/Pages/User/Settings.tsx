import React, { useContext } from "react";
import { Button, Text, View } from "react-native";
import UserContext from "../../Context/UserContext";

export default function Settings() {
  const { isAdmin, setAdminView } = useContext(UserContext);
  return (
    <View style={styles.page}>
      <Text style={styles.h1}>User Settings</Text>
      <Text style={styles.p}>View your settings here</Text>
      {isAdmin && (
        <Button
          title="go to admin view"
          onPress={() => {
            setAdminView(true);
          }}
        />
      )}
    </View>
  );
}

const styles = {
  page: {
    display: "flex",
    alignItems: "center",
  },
  p: {
    paddingBottom: 10,
  },
  h1: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10,
  },
} as const;
