import Expo from 'expo';
import React from 'react';
import { Platform,
  StatusBar,
  StyleSheet,
  View,
  Text
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import cacheAssetsAsync from './utilities/cacheAssetsAsync';
import { Tabs } from './navigation/RootNavigation';
import Colors from './constants/Colors';


class AppContainer extends React.Component {
  state = {
    appIsReady: false,
  };

  componentWillMount() {
    this._loadAssetsAsync();
  }

  async _loadAssetsAsync() {
    try {
      await cacheAssetsAsync({
        images: [require('./assets/images/expo-wordmark.png')],
        fonts: [
          FontAwesome.font,
          { 'Sukhumvit': require('./assets/fonts/SukhumvitSet-Medium.ttf') },
        ],
      });
    } catch (e) {
      console.warn(
        'There was an error caching assets (see: main.js), perhaps due to a ' +
          'network timeout, so we skipped caching. Reload the app to try again.'
      );
      console.log(e.message);
    } finally {
      this.setState({ appIsReady: true });
    }
  }

  render() {
    if (this.state.appIsReady) {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {Platform.OS === 'android' && <View style={styles.statusBar} />}
          <Tabs />
        </View>
      );
    } else {
      return <Expo.AppLoading />;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBar: {
    height: 24,
    backgroundColor: Colors.tintColor,
  },
});

Expo.registerRootComponent(AppContainer);
