import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
  StatusBar
} from "react-native";
import EmptyTextHandler from "./EmptyTextHandler";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    if (enteredGoalText == "") {
      setModalIsVisible(true);
    } else {
      props.onAddGoal(enteredGoalText);
      setEnteredGoalText("");
    }
  }

  function endEmptyTextHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      <StatusBar
        // animated={true}
        backgroundColor="#311b6b"
        // translucent = {true}
      />

      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
          <Image
            style={styles.image}
            source={require("../assets/images/goalPic.png")}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Your course goal"
            placeholderTextColor="#FFFFFF"
            onChangeText={goalInputHandler}
            value={
              enteredGoalText
              // (enteredGoalText) =>
              // enteredGoalText === '' &&
              // <EmptyTextHandler/>
            } //Two way binding is present here, after tapping ADD GOAL the text input box will be blank
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Add Goal"
                onPress={addGoalHandler}
                color="#5e0acc"
              />
            </View>
            <View style={styles.button}>
              <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
            </View>
          </View>

          <EmptyTextHandler
            visible={modalIsVisible}
            onExit={endEmptyTextHandler}
          />
        </View>
      </Modal>
    </>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    position: "relative",
    // backgroundColor: "#311b6b",
    backgroundColor: "#311b6b",
  },

  textInput: {
    // flex: 1,
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    color: "white",
    padding: 8,
    borderRadius: 8,
    placeholderTextColor: "white",
    position: "relative",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
    paddingTop: 10,
  },
  image: {
    margin: 10,
    shadowColor: "#ffffff",
    // position: 'absolute',
    top: 10,
    left: 30,
    width: 300,
    height: 300,
  },
});
