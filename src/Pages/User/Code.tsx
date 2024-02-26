import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import QRCode from "react-native-qrcode-svg";
const logo = require("../../icon.png");

type TSelectPlusOneProps = {
  setPlusOne: (value: boolean) => void;
  setShowCode: (value: boolean) => void;
};

function SelectPlusOne({ setPlusOne, setShowCode }: TSelectPlusOneProps) {
  return (
    <View>
      <Button
        title="I have a Plus One"
        onPress={() => {
          setPlusOne(true);
          setShowCode(true);
        }}
      />
      <Button
        title="I am attending alone"
        onPress={() => {
          setPlusOne(false);
          setShowCode(true);
        }}
      />
    </View>
  );
}

export default function Code() {
  let netId = "cgp27";
  const [plusOne, setPlusOne] = useState(false);
  const [showCode, setShowCode] = useState(false);
  let codeValue = netId + "|" + (plusOne ? "1" : "0");

  return (
    <View>
      {showCode ? (
        <View style={styles.qr}>
          <Text style={styles.p}>Ask an AIS officer scan this QR code to check in.</Text>
          <QRCode value={codeValue} size={200} />
        </View>
      ) : (
        <SelectPlusOne setPlusOne={setPlusOne} setShowCode={setShowCode} />
      )}
    </View>
  );
}

const styles = {
  qr: {
    display: "flex",
    alignItems: "center",
  },
  p: {
    paddingBottom: 20,
  },
} as const;
