import { View, Text, StyleSheet} from "react-native";

export default function DonateScreen() {
  return (
    <View style={styles.container}>
      <Text>Don</Text>
      <Text style={styles.align}>SVP 10€ BB MALADE</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  align: {
    textAlign: 'center'
  }
});