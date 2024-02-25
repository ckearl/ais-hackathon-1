import React from "react";
import { Text, View } from "react-native";
import { Navbar, NavItem } from "../../Components/Nav";

export default function User() {
  return (
    <View>
      <Text>User</Text>
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
