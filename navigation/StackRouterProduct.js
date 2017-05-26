import React from 'react';
import { StackNavigator } from 'react-navigation';

import ProductScreen from '../screens/ProductScreen';

export const StackRouteProduct = StackNavigator({
  ProductScreen: {
    screen: ProductScreen,
  },
});


