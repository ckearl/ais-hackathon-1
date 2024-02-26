import React, { useContext } from "react";
import { Button, Text, View } from "react-native";
import LoginContext from "../../Context/LoginContext";

export default function Settings() {
  const { isAdmin, setAdminView } = useContext(LoginContext);

  return (
    <View>
      <Button
        title="go to user view"
        onPress={() => {
          setAdminView(false);
        }}
      />
    </View>
  );
}
