import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import QRCode from "react-native-qrcode-svg";
import styles from "../../Styles";

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

export default function Scan() {
  let netId = "cgp27";
  const [plusOne, setPlusOne] = useState(false);
  const [showCode, setShowCode] = useState(false);
  let codeValue = netId + "|" + (plusOne ? "1" : "0");

  return (
    <View style={styles.page}>
      {showCode ? (
        <View style={styles.qr}>
          <Text style={styles.p}>Ask an AIS officer scan this QR code to check in.</Text>
          <QRCode value={codeValue} size={200} />
        </View>
      ) : (
        <>
          <Text style={styles.h1}>User Code</Text>
          <SelectPlusOne setPlusOne={setPlusOne} setShowCode={setShowCode} />
        </>
      )}
    </View>
  );
}
