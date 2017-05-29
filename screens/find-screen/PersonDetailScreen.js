import React from 'react';
import {
  ScrollView,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  View,
  Text
} from 'react-native';
import Colors from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { Button, Avatar} from 'react-native-elements';
import Url from '../../constants/Url';

export default class PersonDetailScreen extends React.Component {
  static navigationOptions = {
    title: 'FEORA   ',
    headerTintColor: '#FFF',
    headerStyle: { backgroundColor: Colors.tintColor }
  };

  constructor() {
    super()
    this.state = {
      data: [],
      onloading: true
    }
  }

  async componentWillMount() {
    let id = this.props.navigation.state.params.person_id;
    await fetch(Url.dealerInfo+ id, {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((res) => {
        this.setState({
          onloading: false,
          data: res
        })
      })
      .catch((err) => {
        Alert.alert( 'เกิดข่อผิดพลาด', 'พบปัญหาระหว่างการส่งข้อมูล', [
          {text: 'ตกลง', onPress: () => this.props.navigation.goBack() }
        ])
        console.log(err);
      })
      .done()
  }

  render() {
    let { onloading, data } = this.state;
    if(onloading === true)
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
      <View style={styles.container}>
          <Image source={{uri: data.coverImage}} style={styles.image} />
          <Image source={{uri: data.image}} style={styles.imgProfile} />
        <View style={styles.form}>

          <View style={{ alignItems: 'center', marginTop: 200 }}>
            <Text style={{ color: 'gray', opacity: 0.9}}>{data.name}</Text>
            <Text style={{ color: 'gray', opacity: 0.9 }}>{data.provinceName} - {data.districtName}</Text>
          </View>

          <View style={[ styles.contact, {marginTop: 20} ]}>
            <Image source={require('../../assets/band/call.jpg')} style={styles.icon} />
            <Text>   {data.telephone}</Text>
          </View>
          <View style={styles.contact}>
            <Image source={require('../../assets/band/line.png')} style={styles.icon} />
            <Text>   {data.line}</Text>
          </View>
          <View style={styles.contact}>
            <Image source={require('../../assets/band/facebook.png')} style={styles.icon} />
            <Text>   {data.facebook}</Text>
          </View>
          <View style={styles.contact}>
            <Image source={require('../../assets/band/instragram.jpg')} style={styles.icon} />
            <Text>   {data.instragram}</Text>
          </View>

          <View style={{flexDirection: 'row', marginTop: 28}}>
            <Ionicons name='ios-checkbox-outline' size={14} color='green' /><Text style={{color: 'gray', opacity: 0.9, fontSize: 12}}> Approved By FEORA</Text>
          </View>

          <View style={styles.cardUnderline}>
            <Text style={{ marginRight: 12, fontSize: 12, alignSelf: 'flex-end', color: '#fff'}}>{data.dealerNumber}</Text>
          </View>
        </View>

      </View>
      );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
  },

  form: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: Dimensions.get('window').width - 40,
    borderRadius: 9,
    shadowRadius: 3,
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 0},
  },

  cardUnderline: {
    position: 'absolute',
    top: 509,
    width: Dimensions.get('window').width - 40,
    backgroundColor: Colors.tintColor,
    height: 15,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },

  image: {
    position: 'absolute',
    width: Dimensions.get('window').width - 40,
    height: 150,
    zIndex: 1,
    alignSelf: 'center',
    top: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },

  imgProfile: {
    alignSelf: 'center',
    width: 100,
    height: 100,
    position: 'absolute',
    zIndex: 3,
    borderRadius: 50,
    top: 120
  },

  contact: {
    alignSelf: 'flex-start',
    alignItems: 'center',
    marginLeft: 80,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginBottom: 10
  },

  icon: {
    width: 40,
    height: 40
  }
});
