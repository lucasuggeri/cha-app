import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CustomTextInput from "./components/InputText";
import SendButton from "./components/SendButton";
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CustomTextInput />
      <SendButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#001",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
});
