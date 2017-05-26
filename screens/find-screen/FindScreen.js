import React from 'react';
import {
  ScrollView,
  Dimensions,
  StyleSheet,
  View,
  Text
} from 'react-native';
import Colors from '../../constants/Colors';
import { Button, FormLabel, FormInput } from 'react-native-elements';

export default class FindScreen extends React.Component {
  static navigationOptions = {
    title: 'FEORA',
    headerTintColor: '#FFF',
    headerStyle: { backgroundColor: Colors.tintColor }
  };

  constructor() {
    super()
    this.state = {
      province: '',
      district: '',
      subdistrict: '',
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.form}>
          <View>
            <Text style={{ color: 'gray', alignSelf: 'center'}}>ค้นหาตัวแทนจำหน่ายที่ใกล้ที่สุด</Text>
          </View>
        <View>
          <FormInput
            ref="f1"
            placeholder="จังหวัด"
            value={this.state.province}
            returnKeyLabel={"next"}
            onChangeText={(value) => this.setState({province: value})}
            containerStyle={styles.formStyle}
            inputStyle={styles.inputStyle}
            underlineColorAndroid='rgba(0,0,0,0)'
          />

          <FormInput
            ref="f2"
            placeholder="อำเภอ"
            value={this.state.district}
            returnKeyLabel={"next"}
            onChangeText={(value) => this.setState({district: value})}
            containerStyle={styles.formStyle}
            inputStyle={styles.inputStyle}
            underlineColorAndroid='rgba(0,0,0,0)'
          />

          <FormInput
            ref="f3"
            placeholder="ตำบล"
            value={this.state.subdistrict}
            returnKeyLabel={"done"}
            onChangeText={(value) => this.setState({subdistrict: value})}
            containerStyle={styles.formStyle}
            inputStyle={styles.inputStyle}
            underlineColorAndroid='rgba(0,0,0,0)'
          />
        </View>

        <View>
          <Button
            title='ค้นหา'
            buttonStyle={{ borderRadius: 25, padding: 8, backgroundColor: Colors.tintColor }}
          />
        </View>
      </View>

    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingBottom: 60,
  },

  form: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    width: Dimensions.get('window').width - 100,
    borderRadius: 9,
    shadowRadius: 3,
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 0},
  },

  formStyle: {
    borderWidth: 1,
    borderRadius: 20,
    borderBottomColor: 'black',
    borderColor: 'black',
    margin: 10
  },
  inputStyle: {
    paddingLeft: 12,
  },

});
