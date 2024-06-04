import { View, Text , TextInput, StyleSheet} from "react-native";
import ButtonDonate from "../../components/buttonRestart";

export default function DonateScreen() {
  return (
    <View style={styles.container}>
      <Text>Don</Text>
      <Text style={styles.align}>SVP 10€ BB MALADE</Text>
      <Text style={styles.align}>OU 3 BITCOIN C COMME TU VEUX</Text>
      <TextInput style={styles.input}></TextInput>
      <ButtonDonate/>
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
  },
  input: {
    borderColor: "black",
    borderStyle: 'solid',
    borderWidth: 1,
    width: 200,
    textAlign:'center',
    margin:20,
  }
});