import React, { useContext, useState } from "react";
import { Text, View, TextInput } from "react-native";
import styles from "../Styles";
import { Load, Save } from "../SecureStore";
import UserContext from "../Context/UserContext";

function InvalidNetId({ netId }: { netId: string }) {
  return (
    <Text style={styles.alert}>
      Invalid NetID: <Text style={styles.textBlack}>{netId}</Text>. Please try again or contact an
      administrator.
    </Text>
  );
}

type TLogInProps = {
  attemptedLogin: boolean;
  setAttemptedLogin: (arg: boolean) => void;
};

export default function LogIn({ attemptedLogin, setAttemptedLogin }: TLogInProps) {
  const failedLoginAttempt = useContext(UserContext).failedLoginAttempt;
  const [netId, setNetId] = useState("");

  async function submitHandler(e: any) {
    const netId = e.nativeEvent.text;
    await Save("netId", netId);
    setNetId(netId);
    setAttemptedLogin(!attemptedLogin);
  }

  return (
    <View style={styles.page}>
      <Text style={styles.h1}>Log in</Text>
      {failedLoginAttempt && <InvalidNetId netId={netId} />}
      <TextInput
        style={styles.input}
        placeholder="Enter Your NetID"
        onSubmitEditing={submitHandler}
      />
    </View>
  );
}
