import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, Modal } from "react-native";

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.InputCon}>
        <TextInput
          placeholder="Course Goal"
          style={styles.Input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.ButtonCon}>
          <View style={styles.Button}>
            <Button title="add" onPress={addGoalHandler} />
          </View>
          <View style={styles.Button}>
            <Button title="cancel" color="red" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  Input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    margin: 10
  },

  InputCon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  ButtonCon: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%"
  },

  Button: {
    width: "40%"
  }
});

export default GoalInput;
