import React, { useState, useEffect, useContext } from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import UserContext from "../../Context/UserContext";
import { TScanData } from "../../Types/ScanData";
import SendScan from "../../Server/SendScan";

type TSelectEventProps = {
  eventId: string;
  setEventId: (arg0: string) => void;
};

function SelectEvent({ eventId, setEventId }: TSelectEventProps) {
  return <Button title="select event" onPress={() => setEventId("1234")} />;
}

function Scanner({ eventId }: { eventId: string }) {
  const [scanned, setScanned] = useState(false);
  const { user } = useContext(UserContext);

  const handleBarCodeScanned = ({ data }: { data: string }) => {
    console.log(data);
    setScanned(true);
    const [memberNetId, plusOne] = data.split("|");
    const sendData: TScanData = {
      memberNetId: memberNetId,
      plusOne: plusOne,
      adminNetId: user.netId,
      eventId: eventId,
    };

    SendScan(sendData).then((res) => {
      alert(JSON.stringify(res.data));
    });
  };
  return (
    <>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        type={"back"}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <TouchableOpacity style={styles.scanAgainButton} onPress={() => setScanned(false)}>
          <Text style={styles.scanAgainText}> Tap to Scan Again</Text>
        </TouchableOpacity>
      )}
    </>
  );
}

export default function App() {
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
