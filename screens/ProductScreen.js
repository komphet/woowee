import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../constants/Colors';


export default class ProductScreen extends React.Component {
  static navigationOptions = {
    title: 'Feora',
    headerTintColor: '#FFF',
    headerStyle: { backgroundColor: Colors.tintColor }
  };

  render() {
    return (
      <View >
        <TouchableOpacity>
          <Text>ProductScreen</Text>
      </TouchableOpacity>
      </View>
    );
  }

}

const styles = StyleSheet.create({
});
