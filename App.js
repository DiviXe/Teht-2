import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native";
import { useState } from "react";
const secretNum = Math.floor(Math.random() * 100) + 1;

export default function App() {
  const [guessNumber, setGuessNumber] = useState();
  const initialText = "Guess a number between 1-100";
  const [resultText, setResultText] = useState(initialText);
  const [numOfGuesses, setNumOfGuesses] = useState(0);

  const buttonPressed = () => {
    console.log(secretNum);
    let text;
    setNumOfGuesses((prevNumber) => prevNumber + 1);
    if (guessNumber > secretNum) {
      text = "your guess " + guessNumber + " is too high";
      setGuessNumber("");
    }
    if (guessNumber < secretNum) {
      text = "your guess " + guessNumber + " is too low";
      setGuessNumber("");
    }
    if (guessNumber === secretNum) {
      Alert.alert(`you guessed the number in ${numOfGuesses} guesses`);
      setResultText(initialText);
      setNumOfGuesses(0);
    }
    setResultText(text);
  };

  return (
    <View style={styles.container}>
      <Text>{resultText}</Text>
      <View style={styles.textInput}>
        <TextInput
          value={guessNumber}
          onChangeText={(text) => setGuessNumber(Number(text))}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.buttonStyle}>
        <Button onPress={buttonPressed} title="Make guess" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    width: 80,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 5,
  },

  buttonStyle: {
    width: "40%",
    padding: 10,
  },
});
