import React from 'react';
import { StackNavigator } from 'react-navigation';

import FindScreen from '../screens/find-screen/FindScreen';
import SelectScreen from '../screens/find-screen/SelectScreen';
import DealerScreen from '../screens/find-screen/DealerScreen';

export const StackRouteFind = StackNavigator({
  FindScreen: {
    screen: FindScreen,
  },
  SelectScreen: {
    screen: SelectScreen
  },
  DealerScreen: {
    screen: DealerScreen
  }
}, {
  mode: 'modal'
});


