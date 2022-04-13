import { React, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../utils/colors";
import { TextInput } from "react-native-paper";
import { RoundedButton } from "../components/RoundedBUtton";

export const Focus = () => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(e) => {
            setSubject(e);
          }}
          style={styles.textInput}
          label="What would you like to focus on?"
        />
        <View style={styles.button}>
          <RoundedButton title="+" size={50} style={styles.button} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: colors.white,
  },
  inputContainer: {
    padding: 25,
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  textInput: {
    flex: 1,
    marginRight: 10,
  },
  button: {
    justifyContent: "center",
  },
});
