import { StyleSheet, View } from "react-native";
import LoginRouter from "./src/Pages/LoginRouter";
import useLogin from "./src/Hooks/useLogin";
import LoginContext from "./src/Context/LoginContext";

export default function App() {
  return (
    <LoginContext.Provider value={useLogin()}>
      <View style={styles.app}>
        <LoginRouter />
      </View>
    </LoginContext.Provider>
  );
}

const styles = StyleSheet.create({
  app: {
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
