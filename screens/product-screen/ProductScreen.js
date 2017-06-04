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
    title: 'FEORA   ',
    headerTintColor: '#FFF',
    headerStyle: { backgroundColor: Colors.tintColor },
    headerTitleStyle: {fontFamily: 'Sukhumvit'}
  };

  _goto = (product_id) => {
    this.props.navigation.navigate('ProductView', {pid: product_id})
  }

  render() {
    return (
      <Grid style={styles.container}>
        <Image source={require('../../assets/images/bg-water.jpg')} style={styles.water} />
        <Row style={{ alignItems: 'center' }}>
          <TouchableOpacity onPress={() => this._goto(1)} >
            <Image source={require('../../assets/logo/1.png')} style={{ width: IMGSIZE, height: IMGSIZE, marginBottom: -22 }} />
          </TouchableOpacity>
        </Row>
        <Row style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => this._goto(2)} >
            <Image source={require('../../assets/logo/2.png')} style={{ width: IMGSIZE, height: IMGSIZE, margin: -22 }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._goto(3)} >
            <Image source={require('../../assets/logo/3.png')} style={{ width: IMGSIZE, height: IMGSIZE, margin: -22 }} />
          </TouchableOpacity>
        </Row>
        <Row style={{ justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => this._goto(4)} >
            <Image source={require('../../assets/logo/4.png')}  style={{ width: IMGSIZE, height: IMGSIZE, margin: -12 }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this._goto(5)} >
            <Image source={require('../../assets/logo/5.png')}  style={{ width: IMGSIZE, height: IMGSIZE, margin: -12 }} />
          </TouchableOpacity>
        </Row>
      </Grid>
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
