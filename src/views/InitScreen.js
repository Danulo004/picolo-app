import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import PlayerListItem from "../components/PlayerListItem";
import { getRandomId } from "../helpers/functions";

export default function InitScrren() {
  const [players, setPlayers] = useState(["", "", ""]);

  const addNewPlayer = () => setPlayers([...players, ""]);

  const setPlayerName = (index, newName) => {
    const playersNames = Array.from(players);
    playersNames[index] = newName;
    setPlayers([...playersNames]);
  };

  return (
    <View style={styles.container}>
      <Text>Picolo</Text>
      <FlatList
        data={players}
        renderItem={({ item, index }) => (
          <PlayerListItem
            item={item}
            index={index}
            setPlayerName={setPlayerName}
          />
        )}
        keyExtractor={getRandomId}
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
