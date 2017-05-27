import React from 'react';
import {
  ScrollView,
  Dimensions,
  StyleSheet,
  Picker,
  Item,
  Alert,
  View,
  Text
} from 'react-native';
import Colors from '../../constants/Colors';
import { Button, FormLabel, FormInput } from 'react-native-elements';
import Url from '../../constants/Url';

export default class FindScreen extends React.Component {
  static navigationOptions = {
    title: 'FEORA',
    headerTintColor: '#FFF',
    headerStyle: { backgroundColor: Colors.tintColor }
  };

  constructor() {
    super()
    this.state = {
      province: null,
      provinceSelected: 0,
      district: null,
      districtSelected: 0,
      subdistrict: null,
      subdistrictSelected: 0,
    }
  }

  async componentWillMount() {
    await fetch(Url.province, {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((res) => {
        this.setState({
          province: res
        })
      })
      .catch((err) => {
        Alert.alert('พบข้อผิดพลาด', 'ไม่สามารถส่งข้อมูลได้', [
          {text: 'ตกลง'}
        ])
      })
    .done()
  }


  _openModal = (dest, data, selected) => {
      this.props.navigation.navigate(dest, {data: data, onSelected: selected})
  }

  _provinceSelect = (id) => {
    this.setState({
      provinceSelected: id
    })
    this._getDistrict(id);
  }

  _districtSelect = (id) => {
    this.setState({
      districtSelected: id
    })
    this._getsubDistrict(id);
  }

  _subdistrictSelect = (id) => {
    this.setState({
      subdistrictSelected: id,
    })
  }

  _getDistrict = async(id) => {
    if(this.state.provinceSelected!=0)
      id = this.state.provinceSelected
    await fetch(Url.district+ id +Url.end_district, {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((res) => {
        this.setState({
          district: res
        })
      })
      .catch((err) => {
        Alert.alert('พบข้อผิดพลาด', 'ไม่สามารถส่งข้อมูลได้', [
          {text: 'ตกลง'}
        ])
      })
    .done()
  }

  _getsubDistrict = async(id) => {
    if(this.state.districtSelected!=0)
      id = this.state.districtSelected
    await fetch(Url.subdistrict+ id +Url.end_subdistrict, {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((res) => {
        this.setState({
          subdistrict: res
        })
      })
      .catch((err) => {
        Alert.alert('พบข้อผิดพลาด', 'ไม่สามารถส่งข้อมูลได้', [
          {text: 'ตกลง'}
        ])
      })
    .done()
  }

  _submit = () => {
    let { provinceSelected, districtSelected, subdistrictSelected} = this.state;
    this.props.navigation.navigate('DealerScreen', {provinceSelected: provinceSelected, districtSelected: districtSelected, subdistrictSelected: subdistrictSelected})
  }

  render() {
    let { province, district, subdistrict,subdistrictSelected } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <View>
            <Text style={{ color: 'gray', alignSelf: 'center'}}>ค้นหาตัวแทนจำหน่ายที่ใกล้ที่สุด</Text>
          </View>
          <View>

            <Button
              title='จังหวัด'
              buttonStyle={styles.formStyle}
              textStyle={{ color: 'gray', opacity: 0.9}}
              onPress={() => this._openModal('SelectScreen', province, this._provinceSelect)}
            />

            <Button
              title='อำเภอ-เขต'
              buttonStyle={styles.formStyle}
              textStyle={{ color: 'gray', opacity: 0.9}}
              onPress={() => this._openModal('SelectScreen', district, this._districtSelect)}
              disabled={district==null? true: false}
            />

            <Button
              title='แขวง-ตำบล'
              buttonStyle={styles.formStyle}
              textStyle={{ color: 'gray', opacity: 0.9}}
              onPress={() => this._openModal('SelectScreen', subdistrict, this._subdistrictSelect)}
              disabled={subdistrict==null? true: false}
            />

          </View>

          <View>
            <Button
              title='ค้นหา'
              buttonStyle={{ borderRadius: 25, padding: 8, backgroundColor: Colors.tintColor }}
              onPress={this._submit}
              disabled={subdistrictSelected==0? true: false}
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
    paddingTop: 70,
    paddingBottom: 70,
  },

  selectStyle: {
    paddingTop: 180,
    paddingBottom: 180,
    backgroundColor: 'rgba(0,0,0,0.4)',
    alignItems: 'center',
    justifyContent: 'center'
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
    backgroundColor: 'rgba(0,0,0,0)',
    padding: 6,
    borderWidth: 1,
    borderRadius: 20,
    borderBottomColor: 'gray',
    borderColor: 'gray',
    margin: 10
  },
  inputStyle: {
    paddingLeft: 12,
  },

});
