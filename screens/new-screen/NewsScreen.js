import React from 'react';
import {
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  Alert,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from 'react-native';
import Colors from '../../constants/Colors';
import Url from '../../constants/Url';

export default class NewsScreen extends React.Component {
  static navigationOptions = {
    title: 'FEORA   ',
    headerTintColor: '#FFF',
    headerStyle: { backgroundColor: Colors.tintColor },
    headerTitleStyle: {fontFamily: 'Sukhumvit'}
  };

  constructor(){
    super()
    this.state = {
      data: [],
      onloading: true
    }
  }

  async componentWillMount() {
    await fetch(Url.news, {
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
          {text: 'ตกลง'}
        ])
      })
      .done()
  }

  render() {
    let { data, onloading } = this.state;
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
        <ScrollView style={styles.container}>
          {data.map((item, i) =>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('NewsViewScreen', {data_id: item.id})} key={i}>
              <View style={styles.card} >
                <Image source={{uri: item.image}} style={{width: 270, height: 270, borderRadius: 10, alignSelf: 'center', marginBottom: 10}} />
                <Text style={{alignSelf: 'center', color: 'gray', opacity: 0.9, fontSize: 16, fontFamily: 'Sukhumvit'}}>{item.title}</Text>
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

  card: {
    flex: 1,
    alignSelf: 'center',
    backgroundColor: '#fff',
    width: Dimensions.get('window').width - 50,
    padding: 10,
    margin: 12,
    borderRadius: 9,
    shadowRadius: 3,
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 0},
  },

});
