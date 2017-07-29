import React from 'react';
import { Image } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

import { StackRouteProduct } from '../navigation/StackRouterProduct';
import { StackRouteFind } from '../navigation/StackRouterFind';
import { StackRouteScanQR } from '../navigation/StackRouterScanQR';
import { StackRouteNews } from '../navigation/StackRouterNews';

export const Tabs = TabNavigator({
  product: {
    screen: StackRouteProduct,
    navigationOptions: {
      tabBarLabel: 'Record',
      tabBarIcon: ({ tintColor }) => <Image source={require('../assets/logo/1.png')} style={{ width: 47, height: 47 }} />,
    }
  },
  news: {
    screen: StackRouteNews,
    navigationOptions: {
      tabBarLabel: 'News Feed',
      tabBarIcon: ({ tintColor }) => <Ionicons name='md-paper' size={30} color={tintColor}  />,
    }
  },
  scanQR: {
    screen: StackRouteScanQR,
    navigationOptions: {
      tabBarLabel: 'Scan QR',
      tabBarIcon: ({ tintColor }) => <Ionicons name='md-qr-scanner' size={30} color={tintColor}  />,
    }
  },
  find: {
    screen: StackRouteFind,
    navigationOptions: {
      tabBarLabel: 'Find Agents',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-search' size={30} color={tintColor}  />,
    }
  },
},
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition:"bottom",
    tabBarOptions: {
      activeTintColor: Colors.tintColor,
      showIcon: true,
    },
    swipeEnabled: false,
    animationEnabled: false,
    initialRouteName: 'product'
  },
)


