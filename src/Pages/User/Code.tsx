import React from "react";
import { Text, View } from "react-native";
import QRCode from "react-native-qrcode-svg";
const logo = require("../../icon.png");

export default function Code() {
  let code;

  return (
    <View>
      <QRCode value="cgp27" />
    </View>
  );
}
