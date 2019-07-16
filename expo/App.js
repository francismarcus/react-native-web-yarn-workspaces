import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [count, setCount] = React.useState(1)

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>{count}</Text>
      <Button title="increment" onPress={() => setCount(count + 1)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
