import React, { useState, useEffect, useContext } from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import UserContext from "../../Context/UserContext";
import { TScan } from "../../Types/db";
import SendScan from "../../Server/SendScan";
import EventContext from "../../Context/EventContext";
import { EventBox } from "../Components/UpcomingEvents";

type TSelectEventProps = {
  setEventId: (arg0: number) => void;
};

function SelectEvent({ setEventId }: TSelectEventProps) {
  const upcomingEvents = useContext(EventContext).upcomingEvents;

  return (
    <View style={styles.selectEventContainer}>
      <Text style={styles.h1}>Select Event</Text>
      {upcomingEvents.map((event, i) => {
        return (
          <TouchableOpacity key={i} onPress={() => setEventId(event.eventId)}>
            <EventBox event={event} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

type TScanStatus = "scanning" | "loading" | "ready" | "failed";

function Scanner({ eventId }: { eventId: number }) {
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
      eventId: eventId,
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
    <View style={styles.scanner}>
      <BarCodeScanner
        onBarCodeScanned={scanStatus !== "scanning" ? undefined : handleBarCodeScanned}
        type={"back"}
        style={StyleSheet.absoluteFillObject}
      />
      {scanStatus === "loading" && (
        <TouchableOpacity style={styles.scanAgainButton}>
          <Text style={styles.scanAgainText}>Loading...</Text>
        </TouchableOpacity>
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
    </View>
  );
}

export default function Code() {
  const [eventId, setEventId] = useState(0);
  const [hasPermission, setHasPermission] = useState<null | boolean>(null);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  if (hasPermission === null) {
    return <Text></Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.page}>
      {eventId ? <Scanner eventId={eventId} /> : <SelectEvent setEventId={setEventId} />}
    </View>
  );
}

const styles = StyleSheet.create({
  page: {},
  selectEventContainer: {
    display: "flex",
    alignItems: "center",
  },
  scanAgainButton: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 10,
  },
  scanAgainText: {
    color: "white",
  },
  h1: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  p: {
    paddingBottom: 20,
  },
  scanner: {
    backgroundColor: "grey",
    height: 1000,
  },
});
