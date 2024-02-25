import React, { useContext } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import LoginContext from "../Context/LoginContext";

export default function LogIn() {
  const { setIsLoggedIn, isLoggedIn } = useContext(LoginContext);
  return (
    <View style={styles.page}>
      <Text style={styles.header}>Log in</Text>
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

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: 0,
    width: "100%",
    paddingTop: "15%",
    paddingBottom: "8%",
    backgroundColor: "blue",
    textAlign: "center",
    color: "white",
    fontSize: 20,
  },
  page: {
    position: "relative",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
