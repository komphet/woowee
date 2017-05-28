import React from 'react';
import { StackNavigator } from 'react-navigation';

import ScanQRScreen from '../screens/scanQR-screen/ScanQRScreen';
import ReadQRCodeScreen from '../screens/scanQR-screen/ReadQRCodeScreen';

export const StackRouteScanQR = StackNavigator({
  ScanQRScreen: {
    screen: ScanQRScreen,
  },
  ReadQRCodeScreen: {
    screen: ReadQRCodeScreen
  }
}, {
  mode: 'modal'
});


