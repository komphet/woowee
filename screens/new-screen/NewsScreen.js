import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Colors from '../../constants/Colors';

export default class NewsScreen extends React.Component {
  static navigationOptions = {
    title: 'FEORA   ',
    headerTintColor: '#FFF',
    headerStyle: { backgroundColor: Colors.tintColor }
  };

  render() {
    return (
      <View>
        <Text>NewsScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
});
