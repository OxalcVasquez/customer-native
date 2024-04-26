/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text style={styles.textMain}>Lista de clientes</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textMain: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
