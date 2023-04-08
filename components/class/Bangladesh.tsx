import {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Bangladesh extends Component {
  
  render() {
    return (
      <>
        <View>
          <Text>Bangladesh is a Beautiful country.</Text>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  textColor: {
    color: 'yellow',
    font:'bold',
    textAlign: 'center'
  }
})

export default Bangladesh;
