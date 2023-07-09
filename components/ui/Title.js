import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function Title({ children, color }) {
  return (
    <Text style={[styles.title, { color: color, borderColor: color }]}>
      {children}
    </Text>
  );
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    // fontWeight: "bold",
    textAlign: "center",
    borderWidth: 2,
    padding: 12,
  },
});
