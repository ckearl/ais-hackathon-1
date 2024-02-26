import React, { useState, useEffect, useContext } from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import UserContext from "../../Context/UserContext";
import { TScan } from "../../Types/db";
import SendScan from "../../Server/SendScan";
import axios from "axios";

type TSelectEventProps = {
  eventId: string;
  setEventId: (arg0: string) => void;
};

function SelectEvent({ eventId, setEventId }: TSelectEventProps) {
  eventId = Math.random().toString(36).substring(7);
  return <Button title="select event" onPress={() => setEventId(eventId)} />;
}

type TScanStatus = "scanning" | "loading" | "ready" | "failed";

function Scanner({ eventId }: { eventId: string }) {
  const [scanStatus, setScanStatus] = useState<TScanStatus>("scanning");
  const { user } = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState("Tap to retry...");

  const handleBarCodeScanned = async ({ data }: { data: string }) => {
    setScanStatus("loading");
    const [memberNetId, plusOne] = data.split("|");
    const sendData: TScan = {
      netId: memberNetId,
      plusOne: Number(plusOne),
      scannerId: user.netId,
      eventId: Number(eventId),
    };

    const res = await SendScan(sendData);

    if (res?.data.status === "success") {
      setScanStatus("ready");
      return;
    }

    setScanStatus("failed");
    setErrorMessage(res?.data.message);
  };

  return (
    <>
      <BarCodeScanner
        onBarCodeScanned={scanStatus !== "scanning" ? undefined : handleBarCodeScanned}
        type={"back"}
        style={StyleSheet.absoluteFillObject}
      />
      <Text>{scanStatus}</Text>

      {scanStatus === "loading" && (
        <View style={StyleSheet.absoluteFillObject}>
          <Text>Loading...</Text>
        </View>
      )}
      {scanStatus === "ready" && (
        <TouchableOpacity style={styles.scanAgainButton} onPress={() => setScanStatus("scanning")}>
          <Text style={styles.scanAgainText}>Success!! Tap to Scan Again...</Text>
        </TouchableOpacity>
      )}
      {scanStatus === "failed" && (
        <TouchableOpacity style={styles.scanAgainButton} onPress={() => setScanStatus("scanning")}>
          <Text style={styles.scanAgainText}>Failed. {errorMessage}</Text>
        </TouchableOpacity>
      )}
    </>
  );
}

export default function Scan() {
  const [eventId, setEventId] = useState("");
  const [hasPermission, setHasPermission] = useState<null | boolean>(null);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  if (hasPermission === null) {
    return <Text>Requesting camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.page}>
      {eventId ? (
        <Scanner eventId={eventId} />
      ) : (
        <SelectEvent eventId={eventId} setEventId={setEventId} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  scanAgainButton: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 10,
  },
  scanAgainText: {
    color: "white",
  },
});
