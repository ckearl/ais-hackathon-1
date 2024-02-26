import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

function SelectEvent({ setEventSelected }: { setEventSelected: (arg0: boolean) => void }) {
  return <Button title="select event" onPress={() => setEventSelected(true)} />;
}

function Scanner() {
  const [scanned, setScanned] = useState(false);
  const [hasPermission, setHasPermission] = useState<null | boolean>(null);

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ data }: { data: string }) => {
    setScanned(true);
    alert(`${data}`);
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
  const [eventSelected, setEventSelected] = useState(false);

  return (
    <View style={styles.page}>
      {eventSelected ? <Scanner /> : <SelectEvent setEventSelected={setEventSelected} />}
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
