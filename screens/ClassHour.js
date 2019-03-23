import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class ClassHour extends React.Component {
	static navigationOptions = {
    title: 'Select Class and Hour',
  };  
  render() {
    return (
      <View style={styles.container}>
        <Text>
					Class and Hour selection goes here
				</Text>
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
});
