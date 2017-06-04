import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  Alert,
  ActivityIndicator,
  View,
} from 'react-native';
import Colors from '../../constants/Colors';
import Url from '../../constants/Url';
import HtmlText from 'react-native-html-to-text';

export default class ProductView extends React.Component {
  static navigationOptions = {
    title: 'FEORA   ',
    headerTintColor: '#FFF',
    headerStyle: { backgroundColor: Colors.tintColor },
    headerTitleStyle: {fontFamily: 'Sukhumvit'}
  };

  constructor() {
    super()
    this.state = {
      onloading: true,
      product: null
    }
  }

  async componentWillMount() {
    let { pid } = this.props.navigation.state.params;
    await fetch(Url.product + pid, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((res) => {
        this.setState({
          onloading: false,
          product: res
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
    let { onloading, product } = this.state;
    if(onloading === true) {
      return (
        <ActivityIndicator
          color="gray"
          animating
          size="large"
          style={{ flex: 1, justifyContent: 'center', height: Dimensions.get('window').height-(56*2)-42-24 /*tabbar:56,navigatebar:56,segment:42,statusbar:24*/ }}
        />
      );
    }
    else
      return (
        <ScrollView style={styles.container}>
          <Image source={require('../../assets/images/bg-water.jpg')} style={styles.water} />
          <View style={styles.onCard}>
            <Image source={{uri: product.image}} style={{ width: 150, height: 150 }} />
            <Text style={{ marginTop: 10, fontSize: 18, width: 200, color: 'gray', fontFamily: 'Sukhumvit' }}>{ product.name }</Text>
          </View>
          <View style={styles.card}>
            <Text style={{ color: 'gray', fontSize: 18 , fontFamily: 'Sukhumvit'}}>รายละเอียดสินค้า</Text>
            <HtmlText style={{ color: 'gray', fontFamily: 'Sukhumvit'}} html={product.content}></HtmlText>
          </View>
        </ScrollView>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 25,
    paddingBottom: 25
  },

  water: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height-72-24-350, //350 => I guess
    top: Dimensions.get('window').height-72-24-150
  },

  onCard: {
    alignItems: 'center',
    margin: 20
  },

  card: {
    flex: 1,
    width: Dimensions.get('window').width - 100,
    backgroundColor: '#fff',
    padding: 15,
    alignSelf: 'center',
    borderRadius: 9,
    shadowRadius: 3,
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 0},
  }
});
