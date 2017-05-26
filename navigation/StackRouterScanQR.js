import React from 'react';
import { StackNavigator } from 'react-navigation';

import ScanQRScreen from '../screens/scanQR-screen/ScanQRScreen';

export const StackRouteScanQR = StackNavigator({
  ScanQRScreen: {
    screen: ScanQRScreen,
  },
});


