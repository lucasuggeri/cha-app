import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomTextInput from "./components/InputText";
import SendButton from "./components/SendButton";
import Server from "./components/Server";

export default function App() {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    // Envia a mensagem para o servidor WebSocket
    WebSocketServer.sendMessage(message);
    // Limpa o texto do input
    setMessage('');
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CustomTextInput 
      placeholder={"Digite aqui"}
      onChangeText={setMessage} 
      value={message}
      />
      <SendButton 
      title="Enviar"
      onPress={handleSendMessage}
      />
      <Server />
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
}