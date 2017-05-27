import React from 'react';
import {
  ScrollView,
  Dimensions,
  StyleSheet,
  Alert,
  ActivityIndicator,
  Picker,
  Item,
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
      provinceShowSelect: '',
      proviceSelected: '',
      province: null,

      districtSelected: '',
      district: '',

      subdistrict: '',

      selected: true,
      subdistrictSelected: '',
    }
  }

   async componentWillMount() {
    await fetch(Url.province, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((res) => {
        this.setState({
          province: res,
        });
        console.log(this.state.province);
      })
      .catch((err) => {
        Alert.alert( 'เกิดข่อผิดพลาด', 'พบปัญหาระหว่างการส่งข้อมูล', [
          {text: 'ตกลง'}
        ])
        console.log(err);
      })
    .done();
  }


  _provinceSelected = async(val) => {
    this.setState({
      provinceSelected: val,
      provinceShowSelect: false
    });

    this._getDistrict();
  }

  _getDistrict = async() => {
  }

  render() {
    let {
      provinceShowSelect, province, provinceSelected,
      district, districtShowSelect, districtSelected
    } = this.state;
    if( provinceShowSelect===true)
      return (
        <View style={[StyleSheet.absoluteFill, styles.container, styles.selectStyle]}>
          <View style={styles.form}>
            <Picker
              selectedValue={ provinceSelected}
              onValueChange={(val) => this._provinceSelected(val)}
            >
              {province.map((item, i) =>
                <Picker.Item label={item.name} value={item.id} key={i} />
              )}
            </Picker>
          </View>
        </View>
      )
    else
      return (
        <View style={styles.container}>
          <View style={styles.form}>
            <View>
              <Text style={{ color: 'gray', alignSelf: 'center'}}>ค้นหาตัวแทนจำหน่ายที่ใกล้ที่สุด</Text>
            </View>
            <View>

              <Button
                title={provinceSelected==null? 'จังหวัด': province[provinceSelected-1].name}
                buttonStyle={styles.formStyle}
                textStyle={{ color: 'gray', opacity: provinceSelected==null? 0.8: 1 }}
                onPress={() => this.setState({ provinceShowSelect: true })}
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
