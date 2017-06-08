import React from "react";
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
} from "react-native";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Button, Avatar } from "react-native-elements";
import Url from "../../constants/Url";

export default class PersonDetailScreen extends React.Component {
  static navigationOptions = {
    title: "FEORA   ",
    headerTintColor: "#FFF",
    headerStyle: { backgroundColor: Colors.tintColor },
    headerTitleStyle: { fontFamily: "Sukhumvit" }
  };

  constructor() {
    super();
    this.state = {
      data: [],
      onloading: true
    };
  }

  async componentWillMount() {
    let id = this.props.navigation.state.params.person_id;
    await fetch(Url.dealerInfo + id, {
      method: "GET"
    })
      .then(response => response.json())
      .then(res => {
        this.setState({
          onloading: false,
          data: res
        });
      })
      .catch(err => {
        Alert.alert("เกิดข่อผิดพลาด", "พบปัญหาระหว่างการส่งข้อมูล", [
          { text: "ตกลง", onPress: () => this.props.navigation.goBack() }
        ]);
        console.log(err);
      })
      .done();
  }

  render() {
    let { onloading, data } = this.state;
    if (onloading === true)
      return (
        <ActivityIndicator
          color="gray"
          animating
          size="large"
          style={{
            flex: 1,
            justifyContent: "center",
            height:
              Dimensions.get("window").height -
                56 * 2 -
                42 -
                24 /*tabbar:56,navigatebar:56,segment:42,statusbar:24*/
          }}
        />
      );
    else
      return (
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.imageBlock}>
              <Image source={{ uri: data.coverImage }} style={styles.image} />
            </View>
            <Image source={{ uri: data.image }} style={styles.imgProfile} />
            <View style={styles.form}>

              <View style={{ alignItems: "center", marginTop: 200 }}>
                <Text
                  style={{
                    color: "gray",
                    opacity: 0.9,
                    fontFamily: "Sukhumvit"
                  }}
                >
                  {data.name}
                </Text>
                <Text
                  style={{
                    color: "gray",
                    opacity: 0.9,
                    fontFamily: "Sukhumvit"
                  }}
                >
                  {data.provinceName} - {data.districtName}
                </Text>
              </View>

              <View style={[styles.contact, { marginTop: 20 }]}>
                <Image
                  source={require("../../assets/band/call.jpg")}
                  style={[
                    styles.icon,
                    { width: 33, height: 33, marginLeft: 4 }
                  ]}
                />
                <Text style={{ color: "gray", fontFamily: "Sukhumvit" }}>
                  {" "}  {data.telephone}
                </Text>
              </View>
              <View style={styles.contact}>
                <Image
                  source={require("../../assets/band/line.png")}
                  style={styles.icon}
                />
                <Text style={{ color: "gray", fontFamily: "Sukhumvit" }}>
                  {" "}  {data.line}
                </Text>
              </View>
              <View style={styles.contact}>
                <Image
                  source={require("../../assets/band/facebook.png")}
                  style={styles.icon}
                />
                <Text style={{ color: "gray", fontFamily: "Sukhumvit" }}>
                  {" "}  {data.facebook}
                </Text>
              </View>
              <View style={styles.contact}>
                <Image
                  source={require("../../assets/band/instragram.jpg")}
                  style={styles.icon}
                />
                <Text style={{ color: "gray", fontFamily: "Sukhumvit" }}>
                  {" "}  {data.instragram}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  bottom: 20,
                  position: "absolute"
                }}
              >
                <Ionicons name="ios-checkbox-outline" size={14} color="green" />
                <Text
                  style={{
                    color: "gray",
                    opacity: 0.9,
                    fontSize: 12,
                    fontFamily: "Sukhumvit"
                  }}
                >
                  {" "}Approved By FEORA
                </Text>
              </View>

              <View style={styles.cardUnderline}>
                <Text
                  style={{
                    marginRight: 14,
                    fontSize: 11,
                    alignSelf: "flex-end",
                    color: "#fff",
                    fontFamily: "Sukhumvit"
                  }}
                >
                  {data.dealerNumber}
                </Text>
              </View>
            </View>

          </View>
        </ScrollView>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20
  },

  form: {
    flex: 1,
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    width: Dimensions.get("window").width - 40,
    borderRadius: 9,
    shadowRadius: 3,
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 0 }
  },

  cardUnderline: {
    position: "absolute",
    bottom: 0,
    width: Dimensions.get("window").width - 40,
    backgroundColor: Colors.tintColor,
    height: 18,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },

  imageBlock: {
    position: "absolute",
    width: Dimensions.get("window").width - 40,
    height: 150,
    zIndex: 1,
    alignSelf: "center",
    top: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden"
  },

  image: {
    width: Dimensions.get("window").width - 40,
    height: 150
  },

  imgProfile: {
    alignSelf: "center",
    width: 100,
    height: 100,
    position: "absolute",
    zIndex: 3,
    borderRadius: 50,
    top: 120
  },

  contact: {
    alignSelf: "flex-start",
    alignItems: "center",
    marginLeft: 80,
    justifyContent: "flex-start",
    flexDirection: "row",
    marginBottom: 3
  },

  icon: {
    width: 40,
    height: 40
  }
});
