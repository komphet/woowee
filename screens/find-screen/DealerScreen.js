import React from 'react';
import {
  ScrollView,
  Dimensions,
  Image,
  ActivityIndicator,
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
      data: []
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
    let { data } = this.state;
    if(data.length == 0)
      return(
        <ActivityIndicator
          color="gray"
          animating
          size="large"
          style={{ flex: 1, justifyContent: 'center', height: Dimensions.get('window').height-(56*2)-42-24 /*tabbar:56,navigatebar:56,segment:42,statusbar:24*/ }}
        />
      )
    else
      return (
        <ScrollView style={styles.container}>

          {data.map((item, i) =>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('PersonDetailScreen', {person_id: item.id})} key={i}>
            <View style={styles.card}>
              <View style={{width:100, height: 100, justifyContent: 'center'}}>
                <Image source={{uri: item.image}} style={{width: 70, height: 70, borderRadius: 35}} />
              </View>
              <View style={{ alignItems: 'flex-end', justifyContent: 'center'}}>
                <Text style={{color: 'gray', opacity: 0.9, margin: 5}}>{item.title}</Text>
                <Text style={{color: 'gray', opacity: 0.9, margin: 5}}>{item.provinceName}</Text>
              </View>
              <View style={styles.cardUnderline}>
                <Text style={{ marginRight: 12, fontSize: 12, alignSelf: 'flex-end', justifyContent: 'center', color: '#fff'}}>{item.dealerNumber}</Text>
              </View>
            </View>
          </TouchableOpacity>
          )}
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
    top: 105,
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
