import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");

  console.log("id", id);

  return (
    <View>
      <Text>ResultsShowScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ResultsShowScreen;
