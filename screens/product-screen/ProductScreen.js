import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from 'react-native';
import Colors from '../../constants/Colors';
import { Button, Grid, Col, Row } from 'react-native-elements';

const IMGSIZE = 175;

export default class ProductScreen extends React.Component {
  static navigationOptions = {
    title: 'Woowee',
    headerTintColor: '#FFF',
    headerStyle: { backgroundColor: Colors.tintColor },
    headerTitleStyle: {fontFamily: 'Sukhumvit'}
  };

  _goto = (product_id) => {
    this.props.navigation.navigate('ProductView', {pid: product_id})
  }

  render() {
    return (
        <Text>Welcome to Woowee</Text>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  water: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: 150,
    top: Dimensions.get('window').height-72-24-150
  }
});
