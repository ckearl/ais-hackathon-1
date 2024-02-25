import { StyleSheet, View } from "react-native";
import LoginRouter from "./src/LoginRouter";

export default function App() {
  return (
    <View style={styles.app}>
      <LoginRouter />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
