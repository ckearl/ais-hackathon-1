import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavItem, Navbar } from "../../Components/Nav";

export default function Admin() {
  return (
    <View style={styles.page}>
      <Text>Admin</Text>

      <Navbar>
        <NavItem>
          <Text>hi</Text>
        </NavItem>
        <NavItem>
          <Text>hi</Text>
        </NavItem>
        <NavItem>
          <Text>hi</Text>
        </NavItem>
      </Navbar>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    height: "100%",
  },
});
