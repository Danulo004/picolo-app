import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

export default function InitScrren() {
  const [players, setPlayers] = useState(["", "", ""]);

  const renderItem = ({ item, index }) => {
    console.log(item);
    return (
      <View style={styles.listItem}>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={(text) => {
            const playersNames = Array.from(players);
            playersNames[index] = text;
            setPlayers([...playersNames]);
          }}
          value={players[index]}
        />
      </View>
    );
  };

  const addNewPlayer = () => setPlayers([...players, ""]);

  return (
    <View style={styles.container}>
      <Text>Picolo</Text>
      <FlatList
        data={players}
        renderItem={renderItem}
        keyExtractor={(item) => item}
        style={styles.playerList}
        ListFooterComponent={() => (
          <TouchableOpacity onPress={addNewPlayer}>
            <Ionicons name="add-circle" size={32} color="#fff" />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B586B",
    alignItems: "center",
    justifyContent: "center",
  },
  playerList: {
    width: "40%",
    borderWidth: 1,
  },
  listItem: {
    height: 50,
    borderBottomWidth: 1,
  },
});
