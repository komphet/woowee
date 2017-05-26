import React from 'react';
import { StackNavigator } from 'react-navigation';

import FindScreen from '../screens/find-screen/FindScreen';

export const StackRouteFind = StackNavigator({
  FindScreen: {
    screen: FindScreen,
  },
});


