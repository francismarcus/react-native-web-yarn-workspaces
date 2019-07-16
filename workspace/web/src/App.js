import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

function App() {
  return (
    <View style={styles.box}>
      <Text style={styles.heading}> React </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: { 
    alignItems: 'center',
  },
  heading: { 
    fontWeight: 'bold',
    fontSize: 48
  }
});


export default App;
