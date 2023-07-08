import { View, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ onReset }) {
  return (
    <View style={styles.screen}>
      <Title color={Colors.secondary500}>Game Over</Title>
      <PrimaryButton onPress={onReset} />
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    marginTop: 150,
    padding: 50,
    flex: 1,
  },
});
