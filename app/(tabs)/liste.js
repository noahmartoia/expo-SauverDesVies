import { View, Text, StyleSheet, ScrollView, Dimensions} from "react-native";

const {width} = Dimensions.get('window');

export default function ListeScreen() {
  return (
    <ScrollView style={styles.scrollView}>
    <View style={styles.container}>
      <Text>Liste des objectif</Text>
      <Text style={styles.align}>sauver</Text>
      <Text style={styles.align}>des</Text>
      <Text style={styles.align}>vies</Text>
      <Text style={styles.align}>avec</Text>
      <Text style={styles.align}>l'argent</Text>
      <Text style={styles.align}>des</Text>
      <Text style={styles.align}>don</Text>
      <Text style={styles.align}>on</Text>
      <Text style={styles.align}>a</Text>
      <Text style={styles.align}>besoin</Text>
      <Text style={styles.align}>de</Text>
      <Text style={styles.align}>10</Text>
      <Text style={styles.align}>BALLE</Text>
      <Text style={styles.align}>SVP</Text>
      <Text style={styles.align}>bon</Text>
      <Text style={styles.align}>la</Text>
      <Text style={styles.align}>j'ai</Text>
      <Text style={styles.align}>plus</Text>
      <Text style={styles.align}>d'idée</Text>
      <Text style={styles.align}>pour</Text>
      <Text style={styles.align}>augmenter</Text>
      <Text style={styles.align}>le</Text>
      <Text style={styles.align}>nombre</Text>
      <Text style={styles.align}>de</Text>
      <Text style={styles.align}>ligne</Text>
      <Text style={styles.align}>encore</Text>
      <Text style={styles.align}>4</Text>
      <Text style={styles.align}>ligne</Text>
      <Text style={styles.align}>aller</Text>
      <Text style={styles.align}>salut</Text>
      <Text style={styles.align}>enfaite</Text>
      <Text style={styles.align}>non</Text>
      <Text style={styles.align}>a</Text>
      <Text style={styles.align}>c'est</Text>
      <Text style={styles.align}>bon</Text>
      <Text style={styles.align}>aurevoir</Text>
    </View>
      </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  align: {
    textAlign: 'center'
  }
});