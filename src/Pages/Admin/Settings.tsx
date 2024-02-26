import React, { useContext } from "react";
import { Button, Text, View } from "react-native";
import UserContext from "../../Context/UserContext";

export default function Settings() {
  const { isAdmin, setAdminView } = useContext(UserContext);

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
