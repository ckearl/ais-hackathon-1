import React, { useContext } from "react";
import { Text, View, Button } from "react-native";
import UserContext from "../Context/UserContext";
import styles from "../Styles";

export default function LogIn() {
  const { setIsLoggedIn, isLoggedIn } = useContext(UserContext);
  return (
    <View style={styles.page}>
      <Text style={styles.h1}>Log in</Text>
      <Button
        title="Log in with your byu netId"
        onPress={() => {
          setIsLoggedIn(true);
        }}
      />
      <Text>{isLoggedIn ? "logged in" : "not logged in"}</Text>
    </View>
  );
}
