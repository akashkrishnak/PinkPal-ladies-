import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";

const SearchScreen = ({ navigation }) => {
  return (
    <View>
      <Image style={styles.imge} source={require("../../assets/pinkpal.png")} />
      <Text style={styles.txt}>
        You are being connected to nearest police station.
      </Text>
      <Text> some loading motion in the middle.</Text>
      <Text style={styles.txt2}>
        If Help was pressed wrongly you can cancel within 15 seconds
      </Text>
      <Button onPress={navigation.navigate("Default")} title="Cancel" />
      <Button
        onPress={() => navigation.navigate("Locate")}
        title="for the third screen(just for now)"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imge: {
    marginLeft: 50,
    marginTop: 20,
  },
  txt: {
    color: "#b80646",
    marginTop: 0,
    marginLeft: 30,
    marginRight: 30,
    fontSize: 30,
  },
  txt2: {
    color: "#b80646",
    marginTop: 90,
    marginLeft: 30,
    marginRight: 30,
    fontSize: 30,
  },
});

export default SearchScreen;
