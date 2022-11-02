import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={styles.background}>
      <Feather name="search" size={30} />
      <Text>SearchBar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#f0eeee",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
  },
});

export default SearchBar;
