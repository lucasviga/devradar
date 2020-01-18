import React from 'react';
import {
  View,
  Text,
  StyleSheet  
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",    
    backgroundColor: '#7159c1'
  },
  text: {
    color: '#fff',
    fontSize: 22
  }
});

function App() {
  return (
    <View style={styles.container}> 
      <Text style={styles.text}>Hello Omnistack</Text>
    </View>
  );
};



export default App;
