import React from 'react';
import { StackNavigator } from 'react-navigation';

import FindScreen from '../screens/FindScreen';

export const StackRouteFind = StackNavigator({
  FindScreen: {
    screen: FindScreen,
  },
});


