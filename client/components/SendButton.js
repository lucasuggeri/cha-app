import React from "react";
import { StyleSheet, Button, View, TouchableOpacity, Text } from "react-native";

const SendButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity title="Enviar" style={styles.button} onPress={() => {}}>
        <Text>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  button: {
    borderRadius: 50, // Define a borda do botão como circular
    backgroundColor: "white", // Define a cor de fundo do botão
    padding: 10, // Define o preenchimento interno do botão
    alignItems: "center", // Alinha o conteúdo no centro do botão
    justifyContent: "center",
    width: 60,
    height: 60,
  },
});

export default SendButton;
