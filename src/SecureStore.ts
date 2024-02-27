import * as SecureStore from "expo-secure-store";

export async function Save(key: string, value: string) {
  await SecureStore.setItemAsync(key, value);
}

export async function Load(key: string) {
  return await SecureStore.getItemAsync(key);
}
