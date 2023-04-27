import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

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
    borderRadius: 50, 
    backgroundColor: "white",
    padding: 10, 
    alignItems: "center", 
    justifyContent: "center",
    width: 60,
    height: 60,
  },
});

export default SendButton;
