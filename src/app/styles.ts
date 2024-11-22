import { StyleSheet } from "react-native";
import { colors } from "../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.green[900],
    fontSize: 22,
  }
});

export default styles;
