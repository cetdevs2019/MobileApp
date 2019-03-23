import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.head}>
          Attendance v0.1
        </Text>
        <TextInput 
          placeholder = "Email"
          placeholderTextColor = "#2196f3"
          style={styles.input}
        />
        <TextInput 
          placeholder = "Password"
          placeholderTextColor = "#2196f3"
          style={styles.input}
        />
        <TouchableOpacity
          style={styles.button}>
          <Text style={{color: 'white',fontSize: 16}}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  head: {
    marginBottom: 20,
    fontSize: 40,
    fontWeight: '700',
    color: '#2196f3',
  },
  input: {
    width: 300,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#2196f3',
    marginBottom: 20,
  },
  button: {
    width: 150,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#2196f3',
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
