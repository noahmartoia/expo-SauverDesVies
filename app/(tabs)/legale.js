import { View, Text, StyleSheet} from "react-native";
import Buttons from "../../components/button";

export default function LegaleScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titre}>Mention Légale</Text>
      <Text style={styles.align}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dignissim enim eu tristique maximus. Donec ac ex egestas, suscipit tellus vel, pulvinar odio</Text>
      <Text style={styles.align}>Praesent ac eros ac lectus volutpat porta. Maecenas luctus dui eget neque molestie, varius auctor est efficitur. Nunc vestibulum sagittis nibh</Text>
      <Text style={styles.align}>at pulvinar tortor pulvinar sed. Mauris id dui eu metus convallis fringilla. Vestibulum convallis nulla arcu, eu ultricies dolor gravida sed.</Text>
      <Buttons/>
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
    margin:'2%',
    textAlign: 'center',
  },
  titre: {
    margin: '5%',
  }
});