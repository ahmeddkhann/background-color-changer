import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

const Index = () => {
  const [NewbackgroundColor, setNewBackgroundColor] = useState("#ffffff");

  const backgroundColorChanger = () => {
    const hexRange = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    setNewBackgroundColor(color);
  };

  return (
    <>
      <StatusBar backgroundColor={NewbackgroundColor} />
      <View style={[styles.container, { backgroundColor: NewbackgroundColor }]}>
        <TouchableOpacity onPress={backgroundColorChanger} style={styles.button}>
          <Text style={styles.buttonText}>Change Background Color</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
  },
});
