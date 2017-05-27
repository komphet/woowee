import React from 'react';
import {
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
  View,
  Text
} from 'react-native';
import Colors from '../../constants/Colors';
import { Button, List, ListItem } from 'react-native-elements';
import Url from '../../constants/Url';

export default class DealerScreen extends React.Component {
  static navigationOptions = {
    title: 'FEORA   ',
    headerTintColor: '#FFF',
    headerStyle: { backgroundColor: Colors.tintColor }
  };

  constructor() {
    super()
    this.state = {
      data: null
    }
  }

  async componentWillMount() {
    let { provinceSelected, districtSelected, subdistrictSelected} = this.props.navigation.state.params;
    console.log(Url.domain);
    await fetch(Url.domain + `dealers?provinceId=${provinceSelected}&districtId=${districtSelected}&subdistrictId=${subdistrictSelected}`, {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((res) => {
        this.setState({
          data: res
        })
      })
      .catch((err) => {
        Alert.alert('พบข้อผิดพลาด', 'ไม่สามารถส่งข้อมูลได้', [
          {text: 'ตกลง', onPress: () => this.props.navigtation.goBack()}
        ])
      })
    .done()
  }

  render() {
    return (
      <ScrollView style={styles.container}>

        <View style={styles.card}>
          <Image source={require('../../assets/logo/1.png')} style={{width: 100, height: 100}}/>
          <View style={{ alignItems: 'flex-end', justifyContent: 'center'}}>
            <Text style={{color: 'gray', opacity: 0.9, margin: 5}}>นายโครตโหด กระโดยิง</Text>
            <Text style={{color: 'gray', opacity: 0.9, margin: 5}}>กรุงเทพ</Text>
          </View>
          <View style={styles.cardUnderline}>
            <Text style={{ marginRight: 12, fontSize: 12, alignSelf: 'flex-end', color: '#fff'}}>FEDRA-00fsdf-sdf</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  cardUnderline: {
    position: 'absolute',
    top: 110,
    width: Dimensions.get('window').width-20,
    backgroundColor: Colors.tintColor,
    height: 15,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },

  card: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: Dimensions.get('window').width - 20,
    padding: 10,
    margin: 15,
    borderRadius: 9,
    shadowRadius: 3,
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 0},
  },
});
