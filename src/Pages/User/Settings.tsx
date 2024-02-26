import React, { useContext } from "react";
import { Button, Text, View } from "react-native";
import LoginContext from "../../Context/LoginContext";

export default function Settings() {
  const { isAdmin, setAdminView } = useContext(LoginContext);
  return (
    <View style={styles.page}>
      {isAdmin && (
        <Button
          title="go to admin view"
          onPress={() => {
            setAdminView(true);
          }}
        />
      )}
      <Text style={styles.p}>User Settings</Text>
      <Text style={styles.p}>View your settings here</Text>
      <Text style={styles.p}>If you're an admin user, switch dashboards here</Text>
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
} as const;
