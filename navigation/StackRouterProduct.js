import React from 'react';
import { StackNavigator } from 'react-navigation';

import ProductScreen from '../screens/product-screen/ProductScreen';
import ProductView from '../screens/product-screen/product-view';

export const StackRouteProduct = StackNavigator({
  ProductScreen: {
    screen: ProductScreen,
  },
  ProductView: {
    screen: ProductView
  },
});


