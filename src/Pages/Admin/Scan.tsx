import React, { useState, useEffect, useContext } from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity, ScrollView } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import UserContext from "../../Context/UserContext";
import SendScan from "../../API/InsertScan";
import EventContext from "../../Context/EventContext";
import { EventBox, EventsContainer } from "../../Components/Events";
import styles from "../../Styles";
import { TDbEvent, TDbScan } from "@BackendTypes/db";

function SelectEvent({ setEvent }: { setEvent: (arg0: TDbEvent) => void }) {
  const upcomingEvents = useContext(EventContext).upcomingEvents;

  return (
    <ScrollView>
      <EventsContainer title="Select Event">
        {upcomingEvents.map((event, i) => (
          <TouchableOpacity key={i} onPress={() => setEvent(event)} style={styles.w100}>
            <EventBox event={event} />
          </TouchableOpacity>
        ))}
      </EventsContainer>
    </ScrollView>
  );
}

type TScanStatus = "scanning" | "loading" | "ready" | "failed";

function Scanner({ event }: { event: TDbEvent }) {
  const [scanStatus, setScanStatus] = useState<TScanStatus>("scanning");
  const [errorMessage, setErrorMessage] = useState("Tap to retry...");
  const user = useContext(UserContext).user;

  const handleBarCodeScanned = async ({ data }: { data: string }) => {
    setScanStatus("loading");
    const [memberNetId, plusOne] = data.split("|");
    console.log(data);
    console.log(memberNetId, plusOne);
    const sendData: TDbScan = {
      netId: memberNetId,
      plusOne: Number(plusOne),
      scannerId: user.netId,
      eventId: event.eventId,
    };

    console.log(sendData);

    const scanData = await SendScan(sendData);

    if (scanData.status === "success") {
      setScanStatus("ready");
      return;
    }

    setScanStatus("failed");
    setErrorMessage(scanData?.message);
  };

  return (
    <View>
      <View style={styles.scanHeader}>
        <Text style={styles.h1}>{event.title}</Text>
        <Text style={styles.subHeading}>Scan the code to check in</Text>
      </View>
      <View style={styles.scannerContainer}>
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
          <TouchableOpacity
            style={styles.scanAgainButton}
            onPress={() => setScanStatus("scanning")}
          >
            <Text style={styles.scanAgainText}>Success!! Tap to Scan Again...</Text>
          </TouchableOpacity>
        )}
        {scanStatus === "failed" && (
          <TouchableOpacity
            style={styles.scanAgainButton}
            onPress={() => setScanStatus("scanning")}
          >
            <Text style={styles.scanAgainText}>Failed. {errorMessage} Click to try again.</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

export default function Scan() {
  const [event, setEvent] = useState<TDbEvent>();
  const [hasPermission, setHasPermission] = useState<null | boolean>(null);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  if (hasPermission === null) return <Text></Text>;
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.page}>
      {event ? <Scanner event={event} /> : <SelectEvent setEvent={setEvent} />}
    </View>
  );
}
