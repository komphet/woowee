import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';
import Colors from '../../constants/Colors';
import { Button } from 'react-native-elements';

export default class ScanQRScreen extends React.Component {
  static navigationOptions = {
    title: 'FEORA   ',
    headerTintColor: '#FFF',
    headerStyle: { backgroundColor: Colors.tintColor },
    headerTitleStyle: {fontFamily: 'Sukhumvit'}
  };



  render() {
    return(
      <View style={styles.container}>
        <View style={{ flex: 1, justifyContent: 'space-around' }}>
          <Image source={require('../../assets/images/QRCode.png')} style={{width: 200, height: 200}} />
        </View>
        <Button
          title='SCAN QR'
          onPress={() => this.props.navigation.navigate('ReadQRCodeScreen')}
          buttonStyle={styles.button}
          textStyle={{fontSize: 14, fontFamily: 'Sukhumvit'}}
        />
        <Text style={{ color: 'gray', opacity: 0.9, fontFamily: 'Sukhumvit'}}>Scan QR Code เพื่อลถ้นรับรางวัลที่ท้ายกล่อง FEORA</Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingBottom: 20
  },

  button: {
    width: 200,
    backgroundColor: Colors.tintColor,
    borderRadius: 20,
    padding: 10,
    marginBottom: 40
  }
});
