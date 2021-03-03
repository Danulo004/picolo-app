import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function InitScrren() {
  const [name, setName] = useState(["", "", ""]);

  return (
    <View style={styles.listItem}>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={setName}
        value={name}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    height: 50,
    borderBottomWidth: 1,
  },
});
