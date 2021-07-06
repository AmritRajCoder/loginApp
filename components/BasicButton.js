import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function BasicButton({ text, onPress }) {
   return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
         <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
   );
}

const styles = StyleSheet.create({
   container: {
      baackgroundColor: '#2B35E0',
      borderRadius: 8,
      padding: 10
   },
   text: {
      fontWeight: 'bold',
      fontSize: 18,
      color: 'black',//#FFFFFF
      textAlign: 'center'
   }
});