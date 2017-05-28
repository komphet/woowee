import React from 'react';
import {
  ScrollView,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
  Image,
  Alert,
  View,
  Text
} from 'react-native';
import Colors from '../../constants/Colors';
import { Button } from 'react-native-elements';
import Url from '../../constants/Url';
import { Ionicons } from '@expo/vector-icons';


export default class NewsViewScreen extends React.Component {
  static navigationOptions = {
    title: 'FEORA',
    headerTintColor: '#FFF',
    headerStyle: { backgroundColor: Colors.tintColor }
  };

  constructor(){
    super()
    this.state = {
      data: [],
      onloading: true
    }
  }

  async componentWillMount() {
    let id  = this.props.navigation.state.params.data_id;
    await fetch(Url.news + id, {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((res) => {
        this.setState({
          data: res,
          onloading: false
        })
      })
      .catch((err) => {
        Alert.alert('พบข้อผิดพลาด', 'ไม่สามารถส่งข้อมูลได้', [
          {text: 'ตกลง', onPress: () => this.props.navigation.goBack()}
        ])
      })
      .done()
  }

  render() {
    let { data, onloading } = this.state;
    if(onloading===true)
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
          <View style={styles.form}>
            <Text style={{color: 'gray', opacity: 0.9, fontSize: 16, marginBottom: 15}}>{data.title}</Text>

            <Image source={{uri: data.image}} style={{width: 120, height: 120, borderRadius: 10, marginBottom: 7}} />
            <View style={{ flexDirection: 'row'}}>
              <Ionicons name='ios-time-outline' size={12}  /><Text style={{fontSize: 10, marginBottom: 20, color: Colors.tintColor}}> {data.timestamp.date.substr(0, data.timestamp.date.indexOf(' '))}  </Text>
              <Ionicons name='ios-person' size={12}  /><Text style={{fontSize: 10, marginBottom: 20, color: Colors.tintColor}}> {data.writer}</Text>
            </View>

            <Text style={{ color: 'gray'}}>{data.content}</Text>
          </View>

        </ScrollView>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 70,
  },

  form: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: Dimensions.get('window').width - 100,
    padding: 12,
    borderRadius: 9,
    shadowRadius: 3,
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 0},
  },

});
