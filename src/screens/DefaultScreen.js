import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const DefaultScreen = ({ navigation }) => {
  return (
    <View>
      <MaterialIcons name="account-circle" size={90} color="black" />
      <Image style={styles.imge} source={require("../../assets/pinkpal.png")} />
      <Text style={styles.txt}>For emergency press the help button below</Text>
      <Button
        onPress={() => {
          navigation.navigate("Search");
        }}
        title="Help!!!"
      />
      <TouchableOpacity onPress={() => navigation.navigate("Search")}>
        <Text>Help</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  imge: {
    marginLeft: 50,
    marginTop: 30,
  },
  txt: {
    color: "#b80646",
    fontWeight: "bold",
    fontSize: 30,
    marginLeft: 60,
    marginRight: 40,
  },
  button: {
    marginTop: 40,
    marginHorizontal: 20,
  },
});

export default DefaultScreen;
