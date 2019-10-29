import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback
} from "react-native";

const GoalItem = props => {
  return (
    // <TouchableHighlight activeOpacity onPress={props.onDelete}>
    // <TouchableWithoutFeedback onPress={props.onDelete}>
    // <TouchableNativeFeedback onPress={props.onDelete.bind(this, props.id)}>
    <TouchableOpacity
      activeOpcaity={0.8}
      onPress={props.onDelete.bind(this, props.id)}
    >
      <View style={styles.listItem}>
        <Text>{props.child}</Text>
      </View>
    </TouchableOpacity>
    //  </TouchableNativeFeedback>
    // </TouchableWithoutFeedback>
    //  </TouchableHighlight>
  );
};
const styles = StyleSheet.create({
  listItem: {
    padding: 0,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1
  }
});
export default GoalItem;
