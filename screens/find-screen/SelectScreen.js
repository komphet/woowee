import React from 'react';
import {
  ScrollView,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Alert,
  View,
  Text
} from 'react-native';
import Colors from '../../constants/Colors';
import { Button, List, ListItem } from 'react-native-elements';
import Url from '../../constants/Url';

export default class SelectScreen extends React.Component {
  static navigationOptions = {
    title: 'FEORA',
    headerTintColor: '#FFF',
    headerStyle: { backgroundColor: Colors.tintColor }
  };

  constructor() {
    super()
    this.state = {
    }
  }

  _onSelect = (id, index) => {
    this.props.navigation.goBack();
    this.props.navigation.state.params.onSelected(id, index)
  }

  render() {
    let { data } = this.props.navigation.state.params;
    return (
      <ScrollView>

        <List containerStyle={{marginBottom: 20}}>
          {
            data.map((item, i) => (
              <TouchableOpacity onPress={() => this._onSelect(item.id, i)} key={i}>
                <ListItem
                  title={item.name}
                />
              </TouchableOpacity>
            ))
          }
        </List>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
});
