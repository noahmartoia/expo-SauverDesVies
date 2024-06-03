import { View, Text, StyleSheet} from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text>About</Text>
      <Text style={styles.align}>Nous somme une ONG humanitaire qui lutte contre la pauvreté et la faim dans le monde.</Text>
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