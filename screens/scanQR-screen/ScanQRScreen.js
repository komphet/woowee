import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text
} from 'react-native';
import Colors from '../../constants/Colors';
import Expo, { BarCodeScanner, Permissions } from 'expo';

export default class ScanQRScreen extends React.Component {
  static navigationOptions = {
    title: 'FEORA',
    headerTintColor: '#FFF',
    headerStyle: { backgroundColor: Colors.tintColor }
  };

  state = {
    hasCameraPermission: null,
  }


  render() {
      const { hasCameraPermission } = this.state;
    return(
      <View style={{flex: 1}}>
          <BarCodeScanner
            torchMode='on'
            onBarCodeRead={this._handleBarCodeRead}
            style={StyleSheet.absoluteFill}
          />
        </View>
    )
  }

  _handleBarCodeRead = (data) => {
    alert(JSON.stringify(data));
  }



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
