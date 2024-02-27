import React, { useState, useEffect, useContext } from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import UserContext from "../../Context/UserContext";
import { TEvent, TScan } from "../../Types/db";
import SendScan from "../../Server/SendScan";
import EventContext from "../../Context/EventContext";
import { EventBox } from "../Components/UpcomingEvents";
import styles from "../../Styles";

type TSelectEventProps = {
  setEvent: (arg0: TEvent) => void;
};

function SelectEvent({ setEvent }: TSelectEventProps) {
  const upcomingEvents = useContext(EventContext).upcomingEvents;

  return (
    <>
      <Text style={styles.h1}>Code Scanner</Text>
      <Text style={styles.subHeading}>Select Event</Text>
      <View style={styles.outerEventsBox}>
        {upcomingEvents.map((event, i) => {
          return (
            <TouchableOpacity
              key={i}
              onPress={() => setEvent(event)}
              style={styles.eventsContainer}
            >
              <EventBox event={event} />
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
}

type TScanStatus = "scanning" | "loading" | "ready" | "failed";

function Scanner({ event }: { event: TEvent }) {
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
      eventId: event.eventId,
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
      <Text style={styles.h1}>{event.title}</Text>
      <Text style={styles.subHeading}>Scan the code to check in</Text>
      <View style={styles.scanner}>
        <BarCodeScanner
          onBarCodeScanned={scanStatus !== "scanning" ? undefined : handleBarCodeScanned}
          type={"back"}
          style={StyleSheet.absoluteFillObject}
        />
      </View>
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
  const [event, setEvent] = useState<TEvent>();
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
      {event ? <Scanner event={event} /> : <SelectEvent setEvent={setEvent} />}
    </View>
  );
}
