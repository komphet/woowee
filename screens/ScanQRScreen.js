import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text
} from 'react-native';
import Colors from '../constants/Colors';

export default class ScanQRScreen extends React.Component {
  static navigationOptions = {
    title: 'Feora',
    headerTintColor: '#FFF',
    headerStyle: { backgroundColor: Colors.tintColor }
  };

  render() {
    return (
      <View>
        <Text>ScanQRScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
