import React, { useContext, useState } from "react";
import { Button, ScrollView, Text, TouchableOpacity, View } from "react-native";
import QRCode from "react-native-qrcode-svg";
import styles from "../../Styles";
import UserContext from "../../Context/UserContext";

type TSelectPlusOneProps = {
  setPlusOne: (value: boolean) => void;
  setShowCode: (value: boolean) => void;
};

function SelectPlusOne({ setPlusOne, setShowCode }: TSelectPlusOneProps) {
  return (
    <View style={{ marginTop: 50 }}>
      <Text style={styles.h3}>Do you have a plus one?</Text>
      <View style={styles.flexRow}>
        <TouchableOpacity
          style={styles.plusOneButton}
          onPress={() => {
            setPlusOne(true);
            setShowCode(true);
          }}
        >
          <Text style={styles.plusOneButtonText}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.plusOneButton}
          onPress={() => {
            setPlusOne(false);
            setShowCode(true);
          }}
        >
          <Text style={styles.plusOneButtonText}>No</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function Scan() {
  const netId = useContext(UserContext).user.netId;
  const [plusOne, setPlusOne] = useState(false);
  const [showCode, setShowCode] = useState(false);
  let codeValue = netId + "|" + (plusOne ? "1" : "0");

  return (
    <ScrollView>
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
    </ScrollView>
  );
}
