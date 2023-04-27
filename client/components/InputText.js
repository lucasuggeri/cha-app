import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

const CustomTextInput = () => {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onChangeText={setText}
        value={text}
        placeholder="Digite aqui"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  textInput: {
    backgroundColor: "#999",
    height: 40,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    paddingHorizontal: 10,
    width: 300,
  },
});

export default CustomTextInput;
