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

export default class ProductScreen extends React.Component {
  static navigationOptions = {
    title: 'FEORA',
    headerTintColor: '#FFF',
    headerStyle: { backgroundColor: Colors.tintColor }
  };

  render() {
    return (
      <Grid style={styles.container}>
        <Image source={require('../../assets/images/bg-water.jpg')} style={styles.water} />
        <Row style={{ alignItems: 'center' }}>
          <Image source={require('../../assets/logo/1.png')} style={{ marginBottom: -22 }}/>
        </Row>
        <Row style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
          <Image source={require('../../assets/logo/2.png')} style={{ margin: -22 }}/>
          <Image source={require('../../assets/logo/3.png')} style={{ margin: -22 }}/>
        </Row>
        <Row style={{ justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>
          <Image source={require('../../assets/logo/4.png')}  style={{ margin: -12 }}/>
          <Image source={require('../../assets/logo/5.png')}  style={{ margin: -12 }}/>
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
