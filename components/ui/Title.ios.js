import { Text, StyleSheet, Platform } from "react-native";
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
    // borderWidth: Platform.OS === "android" ? 2 : 0, // nice example of detecting platform
    borderWidth: Platform.select({ io: 0, android: 2 }), // same result, different form
    padding: 12,
    maxWidth: "80%", // this conforms to the available space provided by the parent.
    width: 300, // if there is a maxWidth, this width will only by applied if the maxWidth is not exceeded, pretty useful
  },
});
