import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export default function ButtonDonate(props) {
    const { onPress, title = 'DONNER THUNE' } = props;
    return (
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    );
}
 
  
const styles = StyleSheet.create({
  button: {
    margin:"5%",
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#c26879',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
